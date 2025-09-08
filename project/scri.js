const btn=document.getElementById("btn")
const num=document.getElementById("number")
console.log(btn)
let count=0
btn.addEventListener("click",function(){
    count+=1
    num.textContent=count

})
console.log(count)
const dec=document.getElementById('decbtn')
dec.addEventListener('click',function(){

    if(count>0){
        count-=1
      num.textContent=count
    }
})