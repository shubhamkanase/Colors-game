const btn = document.querySelectorAll('.button');
const body = document.querySelector('body')

btn.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

    })
   
})


let intervalId; 
const start = document.querySelector("#start");
const stopp = document.querySelector("#stopp");

start.addEventListener("click" , function(){
    intervalId = setInterval(function(){
    console.log("hello shubham");
    document.body.style.background = randoColor();
  }, 1000)
})

stopp.addEventListener("click", function(){
    clearInterval(intervalId);
   
})

const randoColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

