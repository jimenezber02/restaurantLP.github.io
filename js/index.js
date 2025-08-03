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

    const form = document.getElementById('reservation-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        sendReservation(this);
    });
}

function sendReservation(form){
    const span = document.getElementById("reservation-success");

    const members = parseInt(form.members.value);
    const date = form.date.value;
    const hour = form.hour.value;
    const location = form.location.value;

    let error = false;

    if (isNaN(members) || members < 1){
        error = true;
    }

    if (!date || !hour || !location) {
        error = true;
    }

    if (error) {
        span.innerHTML = "Hay campos inválidos";
        span.style.color = '#dd0909';
    } else {
        span.innerHTML = "Reservación completada!";
        span.style.color = "#2bc608";
    }
}