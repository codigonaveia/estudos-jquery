

///Minha primeira função em Jquery



function olaMundo(){
    var nome = 'Edinaldo Santos';
    return nome;

}

$('#btnMostrar').on('click',function(){
    var resultado = olaMundo();
    $('#mensagem').html(resultado);
})
