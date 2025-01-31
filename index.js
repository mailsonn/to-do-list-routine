
let add = document.querySelector('#add');

let tela = document.querySelector('.box-task');
let mark = document.querySelector('.markup-task');

add.addEventListener('click', function(){
    
    let inputTask = document.querySelector('input').value;

    tela.style.display='block';
    mark.style.display='flex';

    tela.textContent= inputTask;

    
})







//API
let advicesArea = document.querySelector('.advices');

let url = 'https://api.adviceslip.com/advice';

async function advices(){
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    

    let randomAdvice = data.slip.advice;
    let advicesArea = document.querySelector('.advices');

    advicesArea.innerHTML = randomAdvice;

}

advices();
//API


