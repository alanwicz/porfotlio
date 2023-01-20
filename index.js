let ghost = document.getElementsByClassName('ghost');

function appear(){
   ghost.style.visibility = 'visible';
}
  
ghost.onmouseover = appear();