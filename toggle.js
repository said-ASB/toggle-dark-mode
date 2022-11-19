const button = document.getElementById('btn')

let toggling = false

button.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-theme')
})


