var app = {};

app.csvUrl = 'http://127.0.0.1:3000/csv';
app.filterUrl = 'http://127.0.0.1:3000/filter';

app.data = [];
app.convertData = function(data) {
    data = data.split('\n').slice(0,-1);
    data = data.map(line => `<tr><td>${line.replace(/,/g,',</td><td>')}</td></tr>`).join('');
    return data;
}
app.handleFullResponse = function(data) {
    data = app.convertData(data);
    $('table.responsed-csv').html(data);
}

app.handleIncrementalResponse = function(data) {
    data = app.convertData(data);
    $('table.responsed-csv').append(data);
}

app.send = function(data){
    // $.ajax({
    //     url: app.csvUrl,
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(data),
    //     error: function(err) {
    //         console.log('err');
    //     }
    // }).done((data)=>{
    //     app.handleIncrementalResponse(data)})
    fetch(app.csvUrl, {
        body: JSON.stringify(data),
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors'
    }).then(response => response.text())
    .then(app.handleIncrementalResponse)
}

app.get = function(){
    // $.ajax({
    //     url: app.csvUrl,
    //     type: 'GET',
    //     contentType: 'text/plain',
    //     success: app.handleFullResponse
    // })
    fetch(app.csvUrl, {
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        method: 'GET',
        mode: 'cors'
    }).then(response => response.text())
    .then(app.handleFullResponse)
}

app.filter = function(data) {
    // $.ajax({
    //     url: app.filterUrl,
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(data),
    //     error: function(err) {
    //         console.log('err');
    //     }
    // }).done((data)=>{
    //     app.handleFullResponse(data)})
    fetch(app.filterUrl, {
        body: JSON.stringify(data),
        headers: {
            'Accept': 'text/plain',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors'
    }).then(response => response.text())
    .then(app.handleFullResponse)
}

$(document).ready(function(){
    app.get();
    $('#userInput').on('click', '.submit', function(event){
        event.preventDefault();
        let json = $("textarea#textarea").val();
        if (json) {
            json = JSON.parse(json);
            app.send(json);
        }
    })

    $('#userFilter').on('click', '.submit', function(event){
        event.preventDefault();
        let filterString = $("input#filter-input").val();
        json = {filter: filterString};
        app.filter(json);
    })
})

