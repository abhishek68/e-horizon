// Loading
window.onload = ()=>{
    document.querySelector('.main').style.display = 'none'
}

setTimeout(() => {
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('.main').style.display = 'block'
}, 4000);