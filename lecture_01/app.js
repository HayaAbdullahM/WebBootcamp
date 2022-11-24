
const button = document.getElementById('button') ; 
const firstImage = document.getElementById('firstImage') ;
const secondImage = document.getElementById('secondImage') ;

var counter = 0 ; 

button.addEventListener('click', () => {
    counter++ ; 

    firstImage.src = `/images/dice${Math.floor((Math.random() * 6)) + 1}.png`
    secondImage.src = `/images/dice${Math.floor((Math.random() * 6)) + 1}.png`


    if (firstImage.src == secondImage.src) {
        window.alert(`You go it right after ${counter} tries` )
        counter  = 0 ; 
    }
}) ; 