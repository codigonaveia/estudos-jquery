
var dados =[];
$('.btnCadastrar').on('click',function(){
    
    var nome = $('#nome').val();
    var sobrenome = $('#sobrenome').val();
    var tHTML ='';
     if(nome.trim()!= '' && sobrenome.trim()!= ''){
        //var novaLinha = $('<tr><td>' + valor + '</td></tr>'); Uma maneira
          tHTML = '<tr>'
          + '<td>' + nome.toUpperCase() +'</td>'
          +'<td>' + sobrenome.toUpperCase() + '</td>'
          +'<td><button class="btn btnRemover" onclick="RemoverLinha()">X</button>'
          + '</tr>';

          var clientes = {
            Nome: nome,
            SobreNome: sobrenome
          };
         
           dados.push(clientes);
          console.log(dados);
          $('.quadroResumo').empty();
          $.each(dados, function(index, item){
             $('.table-clientes-json tbody').append(
                `<tr>
                <td>${item.Nome}</td>
                <td>${item.SobreNome}</td>
                <td><button class="btn btnRemoverJson">X</button></td>
                </tr>`);

                $('.quadroResumo').append(`${item.Nome} ${item.SobreNome}, <br/>`);
          });
     }
        
     ///$('.table-clientes tbody').append("<tr><td>" + nome +"</td><td>" + sobrenome + "</td></tr>");
     $('.table-clientes tbody').append(tHTML);
     $('#nome').val('');
    $('#sobrenome').val('');

});
//REMOVE ITEM DA TABELA
$('.table-clientes').on('click','.btnRemover', function(){
    $(this).closest("tr").remove();
});
//REMOVER ITEM DO JSON
$('.table-clientes-json').on('click','.btnRemoverJson', function(){
    var index = $(this).data("index");

    dados.splice(index, 1);
    $(this).closest("tr").remove();
});
// function RemoverLinha(){
//     $(this).remove();
// }
