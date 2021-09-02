let myLeads = ["www.gamespot.com", "www.gamefaqs.com", "www.gameshark.com"];

const inputEl = document.getElementById('input-el');

const inputBtn = document.getElementById('input-btn');

const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener("click", function() {
    if (inputEl.value.length === 0) {
        throw new Error('Required')
    } else {
        myLeads.push(inputEl.value);
        console.log(inputEl.value + " Added!");
    }
})