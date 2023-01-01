const items = document.querySelectorAll('.info')
const image = document.querySelector('pic')

//TO DO:
// on hover open the image in Box5 
// close image after click and accordian is open
// if accordian open no image reveal

//document /get element by id (1-17)

///

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    console.log (e.attributes)
    //console.log(document.body.serializeWithStyles());
    imageData = e.target.getAttribute('.box5')
    console.log(imageData)
    e.target.style.zIndex = 99
    image.setAttribute('src', imageData)
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px'
    image.style.left = e.clientX + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    image.setAttribute('src', '')
  })
})