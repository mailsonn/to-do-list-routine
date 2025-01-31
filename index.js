
let add = document.querySelector('#add');

let advicesArea = document.querySelector('.advices');

add.addEventListener('click', function(){
    let inputTask = document.querySelector('input').value;

    
})

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


