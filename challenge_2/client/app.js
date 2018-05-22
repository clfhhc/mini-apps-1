var app = {};
app.send = function(data){
    $.ajax({
        url: 'http://127.0.0.1:3000/',
        type: 'POST',
        dataType: 'application/json',
        data: data,
        success: function(response){
            console.log('successfully post', response);
        }
    })
}

$(document).ready(function(){
    $('#userInput').on('click', '.submit', function(event){
        event.preventDefault();
        let json = $("textarea#textarea").val();
        if (json) {
            try {
                json = JSON.parse(json);
                console.log(JSON.stringify(json));
                app.send(json);
            }
            catch(err) {
                console.log('interior error:', err);
            }
        }
    })
})

