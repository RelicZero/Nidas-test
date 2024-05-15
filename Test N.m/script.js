const game = document.getElementById("games");
let create = document.getElementById("add");
let makes = document.getElementById("make");


let numb = 0;

function creates() {

    event.preventDefault()
    numb ++
    game.innerHTML += '<p>' + numb + ". " + makes.value + '<input type="checkbox" class="check">' +'</p>' 

}

function remove(){

    event.preventDefault()
    numb = numb - numb
    game.innerHTML -= '<p>' + '</p>'

}