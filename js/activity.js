"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");

    //matrices
    var explorar = require("../js/explorar.js");

    //variables de juego
    var gender = null;
    var name = null;

    //matrices de juego
    var matrixE = null;
    var matrixT = null;
    var matrixP = null;

    //funcionaes de juego
    function initEmprendedores(){
      matrixE = matrixExplorar(1);
      gameE();
    }
    function gameE(){
      if (matrixE.length == 0) {
        $('.back_menu_explorar').click();
        return;
      }
      var pos = Math.floor(Math.random()*matrixE.length);
      var gameE = matrixE[pos];
      matrixE.splice(pos,1);
      //
      $('#name_emprendedores').html(gameE.name);
      $('#history_emprendedores').html(gameE.history);
      $('#img_emprendedores').css('background-image', 'url('+gameE.img+')');
    }

    function initTips(){
      matrixT = matrixExplorar(2);
      gameT();
    }
    function gameT(){
      if (matrixT.length == 0) {
        $('.back_menu_explorar').click();
        return;
      }
      var pos = Math.floor(Math.random()*matrixT.length);
      var gameT = matrixT[pos];
      matrixT.splice(pos,1);
      //
      $('#sentence_tips').html(gameT.sentence);
      $('#detail_tips').html(gameT.detail);
      $('#img_tips').css('background-image', 'url('+gameT.img+')');
    }

    function initPasos(){
      matrixP = matrixExplorar(3);
      $('.step').each(function(){
        var iStep = $(this)
          matrixP.forEach(function(item, index){
            if (iStep.val() == item.step) {
              iStep.css('background-image', 'url('+item.img+')');
              $('#'+iStep.attr('id')+'_name').html(item.step.toUpperCase());
            }
          });
      });
    }

    require(['domReady!'], function (doc) {
      activity.setup();

      //Button functions
      $('#play').on('click', function(){
        $('#opening').toggle();
        $('#menu_custom').toggle();
        //
        $('#content_character').show();
        $('#content_name').hide();
        $('#to_menu').hide();
      });

      $('.back_opening').on('click', function(){
        $('#opening').toggle();
        $('#menu_custom').hide();
        $('#menu').hide();
      });

      $('#to_menu').on('click', function(){
        if ($('#txt_name').val().length < 4) {
          alert('nombre corto');
          return;
        }
        //
        name = $('#txt_name').val()
        $('#menu_custom').toggle();
        $('#menu').toggle();
        $('#help_menu').click();
        if (gender == 0)
          $('#welcome_name').html('Bienvenida '+name+', anímate a emprender.')
        else
          $('#welcome_name').html('Bienvenido '+name+', anímate a emprender.')
      });

      $('#to_explorar').on('click', function(){
        $('#menu').toggle();
        $('#menu_explorar').toggle();
      });

      $('#to_jugar').on('click', function(){
        $('#menu').toggle();
        $('#menu_jugar').toggle();
      });

      $('.back_menu').on('click', function(){
        $('#menu').toggle();
        $('#menu_explorar').hide();
        $('#menu_jugar').hide();
      });

      $('#to_emprendedores').on('click', function(){
        $('#menu_explorar').toggle();
        $('#emprendedores').toggle();
        //
        initEmprendedores();
      });

      $('#to_tips').on('click', function(){
        $('#menu_explorar').toggle();
        $('#tips').toggle();
        //
        initTips();
      });

      $('#to_pasos').on('click', function(){
        $('#menu_explorar').toggle();
        $('#pasos').toggle();
        //
        initPasos();
      });

      $('.back_menu_explorar').on('click', function(){
        $('#menu_explorar').toggle();
        $('#emprendedores').hide();
        $('#tips').hide();
        $('#pasos').hide();
      });

      $('#to_conocedor').on('click', function(){
        $('#menu_jugar').toggle();
        $('#conocedor').toggle();
      });

      $('#to_pensador').on('click', function(){
        $('#menu_jugar').toggle();
        $('#pensador').toggle();
      });

      $('#to_emprendedor').on('click', function(){
        $('#menu_jugar').toggle();
        $('#emprendedor').toggle();
      });

      $('.back_menu_jugar').on('click', function(){
        $('#menu_jugar').toggle();
        $('#conocedor').hide();
        $('#pensador').hide();
        $('#emprendedor').hide();
      });

      //
      $('.character').on('click', function(){
        $('#content_character').hide();
        $('#content_name').show();
        gender = $(this).attr('value');
        name = "";
        $('#txt_name').val('');
        $('#to_menu').show();
      });
      $('#next_emprendedores').on('click', function(){
        gameE();
      });
      $('#next_tips').on('click', function(){
        gameT();
      });


      //hovers for steps
      $('.step').hover(function(){
        $('#'+$(this).attr('id')+'_name').animate({width:'toggle'},350);
      });

      //button functions for modal
      $('#close_modal').on('click', function(){
        $('#modal').addClass('hidden');
        $('#modal_content').addClass('hidden');
        //$('#play-help').addClass('hidden');
      });

      $('#close_modal_step').on('click', function(){
        $('#modal').addClass('hidden');
        $('#modal_content_step').addClass('hidden');
        //$('#play-help').addClass('hidden');
      });

      $('#help_menu').on('click', function(){
        //$('#modal_content').addClass('modal_content_menu');
        //$('#modal-content').removeClass('modal_content_game');
        //$('#modal-content').css('background-image', 'url(img/help-menu.png)');
        $('#modal').removeClass('hidden');
        $('#modal_content').removeClass('hidden');
      });

      $('.step').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal_content_step').removeClass('hidden');
        //
        var iStep = $(this)
        matrixP.forEach(function(item, index){
          if (iStep.val() == item.step) {
            $('#step_show').css('background-image', 'url('+item.img+')');
            $('#step_name_show').html(item.step.toUpperCase());
            $('#step_content').html(item.detail);
          }
        });
      });

      $('#help_conocedor').on('click', function(){
        $('#modal').removeClass('hidden');
        $('#modal_content').removeClass('hidden');
      });

    });

});
