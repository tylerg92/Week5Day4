changecolor = $('a').each(function(){
    $(this).css('color', 'white')
})
let background = $('#nav').children()
$(background).css('background-color', '#145')

$('li:even').css('background-color', '#ccc')
$('li:odd').css('background-color', '#aaa')

let newName = $('#myInput').val('Tyler')

