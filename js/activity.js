"user strict";

define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");
    var jquery = require("jquery");
    var interact = require("interact");

    //matrices
    var explorar = require("../js/explorar.js");
    var jugar = require("../js/jugar.js");

    //variables de juego
    var gender = null;
    var name = null;
    var healthC = null;

    //matrices de juego
    var matrixE = null;
    var matrixT = null;
    var matrixP = null;
    var matrixC = null;
    var matrixGameC = null;

    //funcion drag
    function dragMoveListener (event) {
      var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }

    //***funcionaes de juego***
    //Emprendedores
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

    //Tips
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

    //Pasos
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

    //Conocedor
    function initConocedor(){
      matrixC = matrixJugar(1);
      healthC = 5;
      matrixGameC = [];
      $('#answ_area').empty();
      for (var i = 1; i <= healthC ; i++) {
        $('#health_conocedor').append('<div id="attempt'+i+'" class="attempt">'+i+'</div>');
      }
      gameC();
    }

    function gameC(){
      if (matrixC.length == 0) {
        $('.back_menu_jugar').click();
        return;
      }
      var matrixAux = [];
      for (var i = 0; i < 4; i++) {
        var pos = Math.floor(Math.random()*matrixC.length);
        matrixGameC.push(matrixC[pos]);
        matrixAux.push(matrixC[pos]);
        matrixC.splice(pos,1);
        //
        $('#item_name'+(i+1)).html(matrixGameC[i].name);
        $('#item_detail'+(i+1)).html(matrixGameC[i].detail);
      }
      for (var i = 0; i < 4; i++) {
        var pos = Math.floor(Math.random()*matrixAux.length);
        $('#answ_area').append('<div id="drag'+(i+1)+'" class="drag"></div>');
        $('#drag'+(i+1)).css('background-image', 'url('+matrixAux[pos].img+')');
        matrixAux.splice(pos,1);
      }
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
        //
        initConocedor();
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

      //Interact elements
      interact('.drop').dropzone({
        accept: '.drag',
        overlap: 0.9,

        ondropactivate: function (event) {
          event.target.classList.add('drop-active'); //dropzone
        },
        ondragenter: function (event) {
          var draggableElement = event.relatedTarget, dropzoneElement = event.target; //element in the dropzone
          dropzoneElement.classList.add('drop-target');
          draggableElement.classList.add('can-drop');
        },
        ondragleave: function (event) {
          // remove the drop feedback style
          event.target.classList.remove('drop-target');
          event.relatedTarget.classList.remove('can-drop');
        },
        ondrop: function (event) {
          //dropzone para la primera respuesta
          /*if (event.target.id == 'dropzone1' && dropResp1 != null && event.relatedTarget.id != dropResp1) {
            var id = $('#'+dropResp1).parent()[0].id;
            $('#'+id).empty();
            var pos = dropResp1.substr(4,1);
            $('#'+id).append('<div id="'+dropResp1+'" class="draggable drag-drop" data="'+(gameAt.matrix[pos-1])+'">'+(gameAt.matrix[pos-1])+'</div>');
            dropResp1 = null; 
          }
          if (event.target.id == 'dropzone1'){
            dropResp1 = event.relatedTarget.id;
            if (dropResp2 == event.relatedTarget.id)
              dropResp2 = null;
          }

          //dropzone para la segunda respuesta
          if (event.target.id == 'dropzone2' && dropResp2 != null && event.relatedTarget.id != dropResp2) {
            var id = $('#'+dropResp2).parent()[0].id;
            $('#'+id).empty();
            var pos = dropResp2.substr(4,1);
            $('#'+id).append('<div id="'+dropResp2+'" class="draggable drag-drop" data="'+(gameAt.matrix[pos-1])+'">'+(gameAt.matrix[pos-1])+'</div>');
            dropResp2 = null; 
          }
          if (event.target.id == 'dropzone2'){
            dropResp2 = event.relatedTarget.id;
            if (dropResp1 == event.relatedTarget.id)
              dropResp21 = null;
          }

          updateMatrix();*/
        },
        ondropdeactivate: function (event) {
          // remove active dropzone feedback
          event.target.classList.remove('drop-active');
          event.target.classList.remove('drop-target');
        }
      });
      interact('.drag').draggable({
        inertia: false,
        restrict: { restriction: "#content_conocedor", endOnly: true, elementRect: { top: 0, left: 0, bottom: 1, right: 1 } },
        autoScroll: true,
        onmove: dragMoveListener,
        onend: function (event) {
          /*var bool = false;
          $(event.target.classList).each(function(index, item){
            if (item == 'can-drop') {
              bool = true;
            }
          });
          if(bool == false){
            if (dropResp1 == event.target.id) {
              dropResp1 = null;
            }
            if (dropResp2 == event.target.id) {
              dropResp2 = null;
            }
          }
          
          validateDrag();*/
        }
      });
      window.dragMoveListener = dragMoveListener;

    });

});
