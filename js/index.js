'use strict';
let name;
function standardize(name) {
  name = name.replace(/\s/g, '').toLowerCase();
  return name;
}

function openSection(sectionName) {
  if(sectionName === 'Resume') return;
  let name = standardize(sectionName);
  
  $('.section').css('display', 'none');

  if ($(window).width() > 610 && name === 'projects') {
    if (name === 'projects') {
      $(`#${name}`).css('display', 'flex');
      $(`#${name}`)
        .addClass('.grid-projects');
    } else {
      $(`#${name}`).css('display', 'block');
    }
  } else {

    $(`#${name}`).css('display', 'block');

  }
}

function main() {
  $('.nav-button').click(function () {
    let sectionName = $(this).html();
    $('.nav-button').removeClass('.nav-focus');
    $(this).addClass('.nav-focus');
    openSection(sectionName);
  });
}

$(main);