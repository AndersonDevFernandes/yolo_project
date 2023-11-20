// function logar(){
//   var passworld = document.getElementById('pass').value

//   if (passworld == '0000'){
//     alert('Logado com Sucesso')
//     location.href = "./html/home.html"
//   } else {
//     alert('ID incorreto. ')
//   }
// }

function logar() {
  var password = document.getElementById('pass').value;

  if (password === '0000') {
    alert('Logado com Sucesso');
    
    // Salva o estado do login no localStorage
    localStorage.setItem('loginStatus', 'true');
    
    // Redireciona para outra página
    location.href = "home.html";
  } else {
    alert('Senha incorreta.');
  }
}

//SLIDER

function rangeSlider1(value){
  document.getElementById('rangeValue1').innerHTML = value; 
}
function rangeSlider2(value){
  document.getElementById('rangeValue2').innerHTML = value; 
}
function rangeSlider3(value){
  document.getElementById('rangeValue3').innerHTML = value; 
}

// scroll reveal

window.sr = ScrollReveal({reset: true})


ScrollReveal().reveal('.logo',{
  rotate: { x:90, y:0, z:0},
  delay: 400
});

sr.reveal('.texto1',{
  rotate: { x:0, y:90, z:0},
  delay: 700,
});

sr.reveal('.texto2',{
  rotate: { x:0, y:90, z:0},
  delay: 700,
});


ScrollReveal().reveal('.button',{
  delay: 1400
});


