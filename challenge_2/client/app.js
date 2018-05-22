var app = {};

app.csvUrl = 'http://127.0.0.1:3000/csv';

app.handleGetResponse = function(data) {
    data = data.replace(/\n/g,'<br>')
    $('p.responsed-csv').html(data);
}

app.handlePostResponse = function(data) {
    data = data.replace(/\n/g,'<br>')
    $('p.responsed-csv').append(data);
}

app.send = function(data){
    $.ajax({
        url: app.csvUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        error: function(err) {
            console.log('err');
        }
    }).done((data)=>{
        app.handlePostResponse(data)})
//     fetch(app.csvUrl, {
//         body: JSON.stringify(data),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         mode: 'cors'
//     }).then(response => console.log(response))
}

app.get = function(){
    $.ajax({
        url: app.csvUrl,
        type: 'GET',
        contentType: 'text/plain',
        success: app.handleGetResponse
    })
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
})

