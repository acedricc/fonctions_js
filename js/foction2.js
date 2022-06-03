const btn = document.querySelector('button')
const img = document.querySelector('.d-none')


btn.addEventListener('click',function(event){
    img.setAttribute("style", "display:block")
    btn.value
    console.log(btn)
    btn.innerHTML = 'faire disparaitre l\'image'
    console.log(btn)

   btn.addEventListener('click',function(e){
        img.setAttribute("style", "display:none")
        btn.value
        console.log(btn)
        
        
    })
    
    
})







// img.remove()

