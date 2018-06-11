function standardize(name){
    name = name.replace(/\s/g, '').toLowerCase();

    return name;
}

function openSection(sectionName){
    let name = standardize(sectionName);

    $('.section').css('display', 'none')

    $(`#${name}`).css('display', 'block');
}

function main (){
    $('.nav-button').click(function() {
        let sectionName = $(this).html();
        openSection(sectionName);
    });


};

$(main);