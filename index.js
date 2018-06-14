function standardize(name){
    name = name.replace(/\s/g, '').toLowerCase();

    return name;
}

function openSection(sectionName){
    let name = standardize(sectionName);

    $('.section').css('display', 'none')
    
    if ( $(window).width() > 739 && name === 'projects') {    

        $(`#${name}`).css('display', 'flex');  

    } else {

        $(`#${name}`).css('display', 'block');

    }
}

function main (){
    $('.nav-button').click(function() {
        let sectionName = $(this).html();
        openSection(sectionName);
    });
};

$(main);