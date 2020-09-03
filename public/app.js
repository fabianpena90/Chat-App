const btn = document.querySelector('.btn').addEventListener('click', getClick)

function getClick() {
  location.href = 'https://shrouded-lowlands-50211.herokuapp.com/chat.html'
}

function randombg(){
  var random= Math.floor(Math.random() * 7) + 0;
  var bigSize = ["url('./public/img/carBackground.jpg')",
                 "url('./public/img/staysafeBackground.jpg')",
                 "url('./public/img/sunshineBackground.jpg')",
                 "url('./public/img/brickell.png')",
                 "url('./public/img/lake.png')",
                 "url('./public/img/miamibeach.png')"
                ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}