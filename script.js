$('.pegaData').click(function(){
    let data = $('#data').val();
    let url = `https://api.nasa.gov/planetary/apod?api_key=rtd1WXnj9OOSq1clfid0VWwgO5Oy0LXFcZvSQY7Q&date=${data}`;

    $.ajax({
        url : url,
        success : function(req){
            $("section").removeClass('invisivel')
            $('.titulo').html(`${req.title}`)
            $('.explicaçao').html(`${req.explanation}`)

            if(req.media_type == "image"){
                $('.imagem').html(`<img id="caixaImagem" src="${req.url}">`)
            }
            else if (req.media_type == "video"){
                
                $('.imagem').html(`<iframe class="caixaVideo" src="${req.url}"></iframe>`)
            }
        }
    }) 
})

