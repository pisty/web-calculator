import './assets/css/style.css'
import storage from './storage'

const Storage = new storage()
const res = document.querySelector('.result')
res.innerHTML = 0

document.querySelectorAll('.numbers').forEach(function(item) {
  item.addEventListener("click", function(e) {
    if (Number.isInteger(parseInt(e.target.innerHTML))) {
      // number
      if(parseInt(res.innerHTML) === 0) {
        res.innerHTML = parseInt(e.target.innerHTML)
      } else {
        res.innerHTML = res.innerHTML + parseInt(e.target.innerHTML)
      }
    }
  }, false)
})

document.querySelectorAll('.operators').forEach(function(item) {
  item.addEventListener("click", function(e) {
    if (e.target.innerHTML === 'x') {
      res.innerHTML = res.innerHTML + '*'
    } else if (e.target.innerHTML === '÷') {
      res.innerHTML = res.innerHTML + '/'
    } else {
      res.innerHTML = res.innerHTML + e.target.innerHTML
    }
  }, false)
})

document.querySelector('.equal').addEventListener('click', function(e) {
  res.innerHTML = eval(res.innerHTML)
})

document.querySelector('.clear').addEventListener('click', function(e) {
  res.innerHTML = 0
})
