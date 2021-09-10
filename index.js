let myLeads = [];

const inputEl = document.getElementById('input-el');

const inputBtn = document.getElementById('input-btn');

const ulEl = document.getElementById('ul-el');

const deleteBtn = document.getElementById('delete-btn')

const tabBtn = document.getElementById('tab-btn');

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        
        // listItems += "<li><a target='_blank' href='" + leads[i] + "'>" + leads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>`
    
        // const li = document.createElement("li")
        // li.textContent = leads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBtn.addEventListener("click", function() {
    if (inputEl.value.length === 0) {
        throw new Error('Required')
    } else {
        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
})

tabBtn.addEventListener("click", function() { // will only work once chrome extension is deployed
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
        render(myLeads)        
    });
})