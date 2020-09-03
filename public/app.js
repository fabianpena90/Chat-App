const btn = document.querySelector('.btn').addEventListener('click', getClick)

function getClick() {
  location.href = 'https://shrouded-lowlands-50211.herokuapp.com/'
}

function randombg(){
  var random= Math.floor(Math.random() * 7) + 0;
  var bigSize = ["url('../img/carBackground.jpg')",
                 "url('../img/staysafeBackground.jpg')",
                 "url('../img/sunshineBackground.jpg')",
                 "url('../img/brickell.png')",
                 "url('../img/lake.png')",
                 "url('../img/miamibeach.png')"
                ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}