function displayType(character) {
    var characterGame = character.getAttribute("data-game");
    alert(character.innerHTML + " appears in the game " + characterGame + "!");
}