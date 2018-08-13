'use strict';
let name;
function standardize(navname) {
  name = navname.replace(/\s/g, '').toLowerCase();
  return name;
}

function openSection(sectionName) {
  if(sectionName === 'Resume') return;
  let name = standardize(sectionName);
  
  $('.section').css('display', 'none');

  if ($(window).width() > 610 || name === 'projects') {
    if (name === 'projects') {
      $(`#${name}`)
        .css({
          'display': 'flex',
          'align-items': 'center'
        });
      $(`#${name}`)
        .addClass('.grid-projects');
    } else {
      $(`#${name}`)
        .css('display', 'block');
    }
  } else {
    $(`#${name}`)
      .css('display', 'block');
  }
  
}

function main() {
  $(window).on('resize', function(){
    var win = $(this); 
    if(name){
      if (win.width() > 599) {  
        if (name === 'projects') {
          $(`#${name}`)
            .css('display', 'flex');
          $(`#${name}`)
            .addClass('.grid-projects');
        }
      }else {
        console.log(name);
        if(name === 'projects'){
          $(`#${name}`)
            .removeClass('.grid-projects');
          $('.projects').css({
            'display': 'flex',
            'align-items': 'center'
          });
        }
      }
    }
  });
  $('.nav-button').click(function () {
    let sectionName = $(this).html();
    $('.nav-button').removeClass('.nav-focus');
    $(this).addClass('.nav-focus');
    openSection(sectionName);
  });
}

$(main);