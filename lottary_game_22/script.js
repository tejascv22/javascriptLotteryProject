const res=document.getElementById("result")
const pickbtn=document.getElementById("picknumber");
const creatimg=document.getElementById('image')
let isProcessing = false;
pickbtn.addEventListener('click',function(){
    for(let i=1;i<=13;i++){
        document.getElementById(i).classList.remove('winningbox')
    }
    if (isProcessing) {
    res.textContent = "⏳ Please wait until completion of operation...";
    return;
  }
    isProcessing = true;
    res.textContent="please wait..."
    setTimeout(function(){
    resultgot=Math.floor(Math.random()*13)+1
    res.textContent=resultgot
isProcessing = false;
    document.getElementById(resultgot).classList.add('winningbox')
},2000)

})

const element=[100,400,600,300,900,410,50,55,60,90,84,75,95]
element.forEach(function(value,i,arr){
    const box=`<div class="box" id="${i+1}">${i+1}. ${value} rs</div>`
    creatimg.insertAdjacentHTML("beforeend",box)

})
