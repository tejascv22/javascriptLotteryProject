const res=document.getElementById("result")
const pickbtn=document.getElementById("picknumber");
pickbtn.addEventListener('click',function(){
    resultgot=Math.floor(Math.random()*50)+1
    res.textContent=resultgot

})