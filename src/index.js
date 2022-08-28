// write your code here
//Fetching data from backend
function fetchRamen(){
    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramen => ramen.forEach(function(dish){
        renderDish(dish)
    }))
}
//Displaying data from db
function renderDish(dish){
    let rdish = document.createElement('img')
    rdish.src = dish.image
    document.getElementById('ramen-menu').appendChild(rdish)
}

function displaDish(){
    fetchRamen()
}

displaDish()
