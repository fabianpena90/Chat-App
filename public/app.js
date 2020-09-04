const btn = document.querySelector('.btn').addEventListener('click', getClick)
console.log('Hello')
function getClick() {
  location.href = 'chat'
}

function randombg(){
  const random = Math.floor(Math.random() * 6) + 0;
  const bigSize = ["url('./img/carBackground.jpg')",
                 "url('./img/staysafeBackground.jpg')",
                 "url('./img/sunshineBackground.jpg')",
                 "url('./img/brickell.jpg')",
                 "url('./img/lake.jpg')",
                 "url('./img/miamibeach.jpg')"
                ];
                console.log(bigSize[random])
  document.querySelector("#random").style.backgroundImage = bigSize[random];
}