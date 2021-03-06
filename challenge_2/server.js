const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');


//wrapping asynchronous functions in Promise
const writeFileAsync = function(filePath, fileContent, options) {
    return new Promise(function(resolve, reject){
        fs.writeFile(filePath, fileContent, options, function(err){
            if (err) reject(err);
            resolve();
        })
    })
}

const readFileAsync = function(filePath, options) {
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, options, function(err, data){
            if (err) reject(err);
            resolve(data);
        })
    })
}

//process sales_report.json
let processSalesReportJson = {};

processSalesReportJson.properties = ['id', 'parentId', 'firstName', 'lastName', 'county', 'city', 'role', 'sales'];
processSalesReportJson.processedArrays = [];
processSalesReportJson.fileContent = processSalesReportJson.properties.join(',') + '\n';

processSalesReportJson.process = function(json, baseId, parentIndex = '') {
    let tempArray = [];
    processSalesReportJson.properties.forEach((property, index) => {
        if (index === 0) {
            tempArray[index] = baseId[0];
            baseId[0]++;
        } else if (index === 1) {
            tempArray[index] = parentIndex;
        } else {
            tempArray[index] = json[property] ? json[property].toString() : '';
        }
    });
    processSalesReportJson.processedArray.push(tempArray);
    if (json.children && json.children.length) {
        json.children.forEach((child) => {
            processSalesReportJson.process(child, baseId, tempArray[0]);
        })
    }
};

processSalesReportJson.compileCSVFile = function(json){
    processSalesReportJson.processedArray = [];
    let baseId = [processSalesReportJson.processedArrays.length];
    processSalesReportJson.process(json, baseId);
    processSalesReportJson.processedArrays.push(...processSalesReportJson.processedArray)
    processSalesReportJson.tempContent = processSalesReportJson.processedArray.reduce((content, row, index) => {
        return content += row.join(',')+('\n');
    },'')
    processSalesReportJson.fileContent += processSalesReportJson.tempContent;
}

processSalesReportJson.filter = function(filterString) {
    processSalesReportJson.filteredContent = processSalesReportJson.properties.join(',') + '\n';
    let filter = new RegExp(filterString, 'i');
    let id = {};
    let index = 0;
    let tempString;
    processSalesReportJson.processedArrays.forEach((row) => {
        if (row[1] !== '') {
            if (id[row[1]] === undefined) {
                return;
            }
            tempString = `${index},${id[row[1]]}`;
        } else {
            tempString = `${index},`;
        }
        for (let i = 2; i < processSalesReportJson.properties.length; i++) {
            if (filter.test(row[i])) {
                return;
            }
            tempString += ',' + row[i]
        }
        processSalesReportJson.filteredContent += tempString + '\n';
        id[row[0]] = index;
        index++;
    });

}

//express.js app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.use(express.static(path.join(__dirname, 'client')));

app.options('/', (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.statusCode = 200;
    res.end();
})

app.get('/', (req,res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, 'client/index.html'));
    res.end();
})

app.post('/', (req,res)=> {
    console.log('post "/":')
    res.statusCode = 200;
    res.end();
})

app.get('/csv', (req,res)=> {
    console.log('get "/csv":');
    res.statusCode = 200;
    res.end(processSalesReportJson.fileContent);
})

app.post('/csv', (req,res)=> {
    console.log('post "/csv":')
    processSalesReportJson.compileCSVFile(req.body);
    res.statusCode = 201;
    res.send(processSalesReportJson.tempContent);
    res.end();
})

app.post('/filter', (req,res)=> {
    console.log('post "/filter":')
    res.statusCode = 201;
    if (req.body.filter) {
        processSalesReportJson.filter(req.body.filter);
        res.send(processSalesReportJson.filteredContent);
    } else {
        res.send(processSalesReportJson.fileContent);
    }
    res.end();
})

app.get('/favicon.ico', (req, res) => res.status(204));

let server = http.createServer(app);

server.listen(3000, '127.0.0.1');