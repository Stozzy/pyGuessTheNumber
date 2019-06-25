const userGuess = document.getElementById('userGuess');
const cpuNumber = Math.floor((Math.random() * 20) + 1);

console.log(cpuNumber);

userGuess.addEventListener('change', function (e) {

    let guess = userGuess.value;
    let newItem = document.createElement('li');

    console.log(userGuess);

    if (guess < cpuNumber) {
        newItem.innerHTML = guess + " was too low! Try again!";
    } else if (guess > cpuNumber) {
        newItem.innerHTML = guess + " was too high! Try again!";
    } else if (guess == cpuNumber) {
        newItem.innerHTML = guess + " was correct!";
    }

    gameOutput.appendChild(newItem);

    // if (userGuessVal = 'y') {
    // 	while (gameOutput.hasChildNodes()) {
    // gameOutput.removeChild(gameOutput.firstChild);
    // 	}
});
