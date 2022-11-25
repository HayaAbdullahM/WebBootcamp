const selectButton = document.getElementById("name");



selectButton.addEventListener('change', () => {
    getTiming(selectButton.value)
})

async function getTiming(city) {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?country=Saudi+Arabia&city=${city}`)
    const json = await response.json() ; 
    const {Fajr, Dhuhr, Asr, Maghrib, Isha} = json.data.timings ;

    const fajirTableData = document.getElementById('Fajr') ; 
    fajirTableData.innerHTML = Fajr ; 

    // ! OR 

    document.getElementById('Fajr').innerHTML = Fajr


    document.getElementById('Zuhr').innerHTML = Dhuhr
    document.getElementById('Asr').innerHTML = Asr
    document.getElementById('Maghrib').innerHTML = Maghrib
    document.getElementById('Isha').innerHTML = Isha
}


getTiming(selectButton.value)


// Curson Parking : 