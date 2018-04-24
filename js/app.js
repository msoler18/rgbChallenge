var correct;
//Initialize game
game();

// Click circles  
$('.option').on('click', guess);

function game(){

  $('.option').each(function(index) {
    var color = generateColor();
    $(this).css('background-color', color);

    if (index == correct){
      $('.question').text(color);
    }
  });
}

function guess(){
  var index = $('.option').index(this);
  if (index == correct){
    alert('Muy bien!!!')
  }else{
    alert('Noo que mal!!')
  }
  game();
}

  
function generateColor(){
  return 'rgb('+ random() +','+ random() +','+ random() +')';
}

function random(){
  return Math.floor(Math.random() * 255);
}