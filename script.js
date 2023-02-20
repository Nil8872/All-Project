const btn = document.getElementById('btn');
const jock = document.querySelector(".jock");

const apikey = "hK+ZW7/96xF23tzJx12k4w==n8ThhyYzuyXreaVL";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const option = {
    method: 'GET',
    headers: { 'X-Api-Key': apikey },
};
const getJoke = async () => {
    try {
        jock.innerHTML = "Updating...";
        btn.disabled = true;
        btn.innerText = "loading...";
        const response = await fetch(apiUrl, option);
        const data = await response.json();
        btn.disabled = false;
        btn.innerText = "TELL A JOKE ME";
        jock.innerHTML = data[0].joke;
    }catch(er){
        jock.innerHTML = "Check your Internet and try again..."
        btn.disabled = false;
        btn.innerText = "Tell A Joke Me";
    };
}
btn.addEventListener('click', () => {

    getJoke();

})