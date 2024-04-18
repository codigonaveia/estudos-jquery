
function AlterarCoresPagina(prop){
 
    if(prop == 1){
      $('.quadro').css('background-color', 'red');
    }
    if(prop == 2){
      $('.quadro').css('background-color', 'yellow')
    }
}

function AlterarCorSlideUp(){

  $('#divSlideup').css('color','blue').slideUp(2000).slideDown(2000);
}