const txtElement = [
  'Freelancer.',
  'Re-Write.',
  'Entry Data.',
  'Web Designer.',
  'Graphic Designer.',
]
let count = 0
let txtIndex = 0
let currentTxt = ''
let words = ''

;(function ngetik() {
  if (count == txtElement.length) {
    count = 0
  }

  currentTxt = txtElement[count]

  words = currentTxt.slice(0, ++txtIndex)
  document.querySelector('.efek-ngetik').textContent = words

  if (words.length == currentTxt.length) {
    count++
    txtIndex = 0
  }

  setTimeout(ngetik, 500)
})()
/* Style the buttons */
// .btn {
// 	border: none;
// 	outline: none;
// 	padding: 10px 16px;
// 	background-color: #f1f1f1;
// 	cursor: pointer;
// 	font-size: 18px;
//   }

//   /* Style the active class, and buttons on mouse-over */
//   .active, .btn:hover {
// 	background-color: #666;
// 	color: white;
//   }
//   </style>
//   </head>
//   <body>

//   <h1>Active Button</h1>
//   <p>Highlight the active/current (pressed) button.</p>

//   <div id="myDIV">
// 	<button class="btn">1</button>
// 	<button class="btn active">2</button>
// 	<button class="btn">3</button>
// 	<button class="btn">4</button>
// 	<button class="btn">5</button>
//   </div>

// Add active class to the current button (highlight it)
// var header = document.getElementById('myDIV')
// var btns = header.getElementsByClassName('btn')
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     var current = document.getElementsByClassName('active')
//     current[0].className = current[0].className.replace('active', '')
//     this.className += ' active'
//   })
// }
let btns = document.querySelectorAll('.btn')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace('active', '')
    this.className += ' active'
    this.parentElement.parentElement.classList.toggle('slide')
  })
}
// let side = document.querySelectorAll('.side')
// for (var i = 0; i < btns.length; i++) {
//   side[i].addEventListener('click', function () {
//     let change = document.getElementsByClassName('aktif')
//     change[0].className = change[0].className.replace('aktif', '')
//     this.className += ' aktif'
//   })
// }
const menu = document.querySelector('.menu-toggle')
menu.addEventListener('click', function (e) {
  if (e.target.className == 'box') {
    e.target.parentElement.previousElementSibling.classList.toggle('slide')
  }
})
