let items = []
const button = document.getElementById('btn')
const input = document.getElementById('inputEl')
const listed = document.getElementById('ulEL')
const deleteButton = document.getElementById('delete-btn')
const saveButton = document.getElementById('save-tab')
const fromLocalStorage = JSON.parse(localStorage.getItem("items"))

if(fromLocalStorage){
    items = fromLocalStorage
    format(items)
}


saveButton.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    items.push(tabs[0].url)
    localStorage.setItem('items', JSON.stringify(items))
    format(items)
    })
    
})

deleteButton.addEventListener('dblclick', function(){
    localStorage.clear()
    items = []
    format(items)
})

button.addEventListener('click', function(){
    items.push(input.value)
    input.value = ''
    localStorage.setItem("items", JSON.stringify(items))
    format(items)
})

function format(item){
    let listItems = ''
    for(let i = 0; i< items.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='https://www.${item[i]}.com/'>
        ${item[i]}</a>
        </li>
        `
    }
    listed.innerHTML = listItems
}