let items = []
const button = document.getElementById('btn')
const input = document.getElementById('inputEl')
const listed = document.getElementById('ulEL')

button.addEventListener('click', function(){
    items.push(input.value)
    input.value = ''
    format()
})

function format(){
    let listItems = ''
    for(let i = 0; i< items.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='https://www.${items[i]}.com/'>
        ${items[i]}</a>
        </li>
        `
    }
    listed.innerHTML = listItems
}