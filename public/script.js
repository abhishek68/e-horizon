// Loading
window.onload = ()=>{
    document.querySelector('.main').style.display = 'none'
}

setTimeout(() => {
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('.main').style.display = 'block'
}, 4000);

function onchange(){
    alert("hello")
let Password1 = document.getElementById("password1")
if(Password1.length>6)
{
  alert("hello")
}
let Password2 = document.querySelector('#password2');
console.log(Password1)
if(Password1 === Password2)
{
    setTimeout(() => {
        document.querySelector('#warning1').style.display = 'block';
    }, 4000);
}
}