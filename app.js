const url = 'https://api.adviceslip.com/advice';

let text = document.querySelector('#text');
let id = document.querySelector('h4');
let btn=document.querySelector('.dice')
btn.addEventListener('click',()=>{
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        id.innerText = `ADVICE #${data.slip.id}`;
        text.innerText = `"${data.slip.advice}"`;
  });
})