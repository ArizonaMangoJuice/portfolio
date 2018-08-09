'use strict';

function standardize(name){
  name = name.replace(/\s/g, '').toLowerCase();
  console.log(name);
  return name;
}

function openSection(sectionName){
  let name = standardize(sectionName);

  $('.section').css('display', 'none');
    
  if ( $(window).width() > 610 && name === 'projects') {    
    console.log($(`#${name}`).children());
    if(name === 'projects'){
      $(`#${name}`).css('display', 'flex');
      $(`#${name}`)
        .addClass('.grid-projects');
    } else {
      $(`#${name}`).css('display', 'block');
    } 
    
    $(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.height() >= 610) { 
        if(name === 'projects'){
          $(`#${name}`).css('display', 'flex');
          $(`#${name}`)
            .addClass('.grid-projects');
        } else {
          $(`#${name}`).css('display', 'block');
        } 
      }
      // if (win.width() >= 1280) { /* ... */ }
    });

  } else {

    $(`#${name}`).css('display', 'block');

  }
}

function main (){
  //under construction!!
  // $(window).on('load',function() {
  //   $('body').removeClass('preload');
  // });

  $('.nav-button').click(function() {
    let sectionName = $(this).html();
    $('.nav-button').removeClass('.nav-focus');
    $(this).addClass('.nav-focus');
    // console.log($(this));
    openSection(sectionName);
  });
}

$(main);