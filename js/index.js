window.onload = function(){
    // acción menú lateral
    const aside_burguer = $('.btn-burguer');
	if(aside_burguer){
		const menu = $('.mobile');
		aside_burguer.off('click').on('click',function(e){
            e.preventDefault();
    		$(menu).addClass('show-list-menu');
		});

        const burguer_close = $('#close-menu');
        burguer_close.off('click').on('click',function(e){
            $(menu).removeClass('show-list-menu');
        });
	}
    let date = new Date();

    $('#copyrigth span').html(date.getFullYear());
}