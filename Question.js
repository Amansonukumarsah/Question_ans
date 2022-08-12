let num=Math.ceil(Math.random()*10);

let num1 =Math.ceil(Math.random()*10);
// console.log(num);
const quest=document.querySelector(".question");

quest.innerText=`Multiple of ${num} and ${num1} is?`;

const score1=document.getElementById('score')
let correctans=num*num1;

let score =JSON.parse(localStorage.getItem('score'))
if(!score)
{
    score=0;
}
score1.innerText=`Score:${score}`

const userans=document.getElementById('input')

// console.log(+userans.value)
const form1=document.getElementById("form");

form1.addEventListener('submit',()=>{
    const ans=+userans.value
    console.log(ans)
if(correctans===ans)
{
    score++;
    updatelocalstorage()
   
}
else{
    score--;
    updatelocalstorage()
   
}
})


function updatelocalstorage()
{
    localStorage.setItem('score',JSON.stringify(score))
}
