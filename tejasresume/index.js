const hidd=document.getElementById("hidden")
const btn=document.getElementById("btn")
console.log(hidd)
console.log(btn)

btn.addEventListener('click',function(){
    hidd.style.visibility='visible'
    btn.innerText='double click to hide'
})

btn.addEventListener('dblclick',function(){
    hidd.style.visibility='hidden'
    btn.innerText('show more detail')

})