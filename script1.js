const number1=document.querySelectorAll('.num1');
const number2=document.querySelectorAll('.num2');
const number3=document.querySelectorAll('.num3');
const number4=document.querySelectorAll('.num4');
const lnk=document.querySelector('.lnk')

let Sum="0";

number1.forEach((num1) => {
    num1.addEventListener('click',()=>{
        inputnum(event.target.value);
    });
});

number2.forEach((num2) => {
    num2.addEventListener('click',(event)=>{
        inputnum(event.target.value);
    });
});

number3.forEach((num3) => {
    num3.addEventListener('click',(event)=>{
        inputnum(event.target.value);
    });
});

number4.forEach((num4) => {
    num4.addEventListener('click',(event)=>{
        inputnum(event.target.value);
    });
});

const inputnum=(num)=>{
    Sum=(parseInt(Sum)+parseInt(num)).toString();
}

lnk.addEventListener('click',()=>
{
    if(Sum>3&& Sum<=6)
        lnk.href="HTTML.html"
    else if(Sum>6&& Sum<=9)
        lnk.href="Python.html"
        else
        lnk.href="SQL.html"
});