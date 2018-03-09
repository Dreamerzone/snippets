$(window).on('resize load',function(){if( $(this).width() < 975 ){$('#sm').removeClass('in');$('#sm').addClass('out');}
else{$('#sm').removeClass('out');$('#sm').addClass('in');}});
