
const selectButton = document.getElementById('name') ; 

selectButton.addEventListener('click', () => {

    const URL = `https://api.aladhan.com/v1/timingsByCity?country=Saudi+Arabia&city=$value`


    console.log(selectButton.value)
})