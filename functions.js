jQuery(document).ready(function (){

    $('.volte').hide();

    $(window).scroll(function(){
        if ($(this).scrollTop()>750){
            $('.volte').fadeIn();
        }else{
            $('.volte').fadeOut();
        }
    });

    $('.volte').click(function(){
        $('body').animate({
            scrollTop: 0
        }, 1000);
    });
});

/* 
Tentei fazer um botão de voltar ao topo mas não deu de jeito nenhum 
(apesar de eu achar que a função esta certa)
*/
