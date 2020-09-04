const btn = document.querySelector('.btn').addEventListener('click', getClick)

function getClick() {
  location.href = 'https://shrouded-lowlands-50211.herokuapp.com/chat.html'
}

function randombg(){
  const rando = Math.floor(Math.random() * 7) + 0;
  const bigSize = ["url('/public/img/carBackground.jpg')",
                 "url('/public/img/staysafeBackground.jpg')",
                 "url('/public/img/sunshineBackground.jpg')",
                 "url('/public/img/brickell.jpg')",
                 "url('/public/img/lake.jpg')",
                 "url('/public/img/miamibeach.jpg')"
                ];
  document.querySelector("#random").style.backgroundImage = bigSize[random];
}