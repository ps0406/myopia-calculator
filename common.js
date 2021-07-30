var counter = 1;

$('body').on('click', '.home-button', function() { 
    $('.home').hide();
    $('#question-1').show();
});

$('body').on('click', '.next', function() { 
    $('.question').hide();

    counter++;
    console.log(counter);
    $('#question-'+counter+'').show();

});

$('body').on('click', '.previous', function() { 
    
    counter--;
    console.log(counter);
    $('.question').hide();
    if(counter >0){
        $('#question-'+counter).show();}

    else{
        $('.home').show();
    }
	
});