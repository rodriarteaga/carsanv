/*$(document).ready(function(){
      // Al cargar la página, ocultamos las cortinas
      $('.left-curtain').css('width', '0%');
      $('.right-curtain').css('width', '0%');
        
      $('.valentines-day').click(function(){
        // --- AJUSTE DE VOLUMEN ---
        var cancion = document.getElementById('miMusica');
        cancion.volume = 0.4; // Cambia este número: 0.1 es muy bajito, 0.9 es muy fuerte
        cancion.play();
        // -------------------------
        // -------------------------------------
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
          
    
          // Hacer visible la carta con una animación ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
            $(this).css('transform', 'scale(' + scale + ')');
          }}); // Animación de ondulación
        });
      });
    });*/

$(document).ready(function(){
    $('.valentines-day').click(function(){
        var audio = document.getElementById('miMusica');
        audio.volume = 0.4;
        audio.play();

        $('.envelope').css({'animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
            
            // Usamos display flex y mantenemos el centrado
            $('#card').css({'display':'flex', 'visibility':'visible', 'opacity': 0});
            
            $('#card').animate({'opacity': 1}, {
                duration: 1000, 
                step: function(now, fx) {
                    // Calculamos la escala con el seno para el efecto rebote
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    // IMPORTANTE: Mantenemos el translate(-50%, -50%) para que no se mueva del centro
                    $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
                }
            });
        });
    });
});    