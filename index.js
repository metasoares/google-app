const clear = document.querySelector('.clearInput')
const input = document.querySelector('.search-input')

const lists = document.querySelectorAll('ul li')
const ul = document.querySelector('ul')


const theme = document.querySelector('.theme-container')
const leftIcon = document.querySelector('.leftIcon')
const left = document.querySelector('.left')

const rightIcon = document.querySelector('.rightIcon')
const right = document.querySelector('.right')


const body = document.querySelector('body')
const h = document.querySelector('h1')

const dividerColor = document.querySelector('.divider-icon')
const searchIconColor = document.querySelector('.search-icon')

const placeholder = document.querySelector('.pl-holder')


const googleContainer = document.querySelector('.googling-container')
const searchBox = document.querySelector('.searchBox')




console.log('That is ok')
console.log('That is ok', clear)
console.log('That is ok', input)
console.log('Lists:', lists[0].innerHTML)

// placeholder.style.display = 'none'
//Clear your input
clear.addEventListener('click', (e) =>{
    e.preventDefault()
    input.value = ''
})

//Undisplay lists
for(let i = 0; i < lists.length; i++){
  lists[i].style.display = 'none'
}

dividerColor.style.display = 'none'
//Click 
input.addEventListener('click', (e)=>{
  for(let i = 0; i < lists.length; i++){
  lists[i].style.display = 'block'
}
dividerColor.style.display = 'block'

})
input.addEventListener('keyup',(e) => {
    e.preventDefault()

    //display lists
    for(let i = 0; i < lists.length; i++){
      lists[i].style.display = 'block'
    }
   dividerColor.style.display = 'block'

    //search
    let search = input.value
    //Remove whitespace and special character
    let trimmedStr = search.trim().replaceAll(/[^\w ]/g,'')
    //Make an [] and make the first letter upperCase
    let arr = trimmedStr.split(' ')
    const myAr = arr.map((str, index)=> {
        if(index === 0){
          return  str.charAt(0).toUpperCase() + str.substring(1)
        } else {
          return str
        }
    }).join(' ')
    console.log(myAr)
    for(let i = 0; i < lists.length; i++){
        let items = lists[i].innerHTML
        console.log(lists[i])
        if(items.indexOf(myAr) > -1){
          lists[i].style.display = 'block'
        } else {
          lists[i].style.display = 'none'
        }

    }
})

console.log(body.style)
rightIcon.style.display = 'none'
//Click Theme
leftIcon.addEventListener('click', (e)=>{
  e.preventDefault()
  //Right Icon displays
  rightIcon.style.display = 'block'
  //Body background color updates
  body.style.backgroundColor = 'white'
  h.style.color = 'black'
  theme.style.justifyContent = 'right'
  theme.style.backgroundColor = '#374151'
  searchBox.style.backgroundColor = '#e2e8f0'
  clear.style.color = 'black'
  dividerColor.style.color = 'black'
  searchIconColor.style.color = 'black'
  googleContainer.style.backgroundColor = '#e2e8f0'
  googleContainer.style.borderRadius = '20px'
  placeholder.style.display = 'block'
  ul.style.color = 'black'


  left.style.display = 'none'

})
// leftIcon.style.display = 'none'

rightIcon.addEventListener('click', (e)=>  {
  e.preventDefault()
leftIcon.style.display = 'block'

//Body background color updates
body.style.backgroundColor = 'black'
h.style.color = 'white'
theme.style.justifyContent = 'left'
theme.style.backgroundColor = '#374151'
searchBox.style.backgroundColor = 'inherant'
clear.style.color = 'white'
dividerColor.style.color = 'white'
searchIconColor.style.color = 'white'
googleContainer.style.backgroundColor = '#374151'
searchBox.style.backgroundColor = '#374151'
// googleContainer.style.borderRadius = '20px'
placeholder.style.display = 'block'
ul.style.color = 'white'


right.style.display = 'none'

})