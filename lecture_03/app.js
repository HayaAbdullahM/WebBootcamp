

const btn = document.getElementById('btn');
const label = document.getElementById('activity');


async function changeActivity() {

    label.innerHTML = '<div class="spinner-grow text-primary" role="status"></div>';

    const response = await fetch('https://www.boredapi.com/api/activity');

    if (!response.ok) {
        return;
    }

    const data = await response.json();

    label.textContent = data.activity;
}

changeActivity(); 



btn.addEventListener('click', async () => {
    await changeActivity();
})