let generateNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10","J", "K", "Q"];
    let inumber = Math.floor(Math.random() * number.length);
    return number[inumber];
}


let generatePalos = () => {
    let palos = ["♦", "♥", "♠", "♣"];
    let ipalos = Math.floor(Math.random() * palos.length);
    return palos[ipalos];
}

window.onload = () => {
    document.querySelector('.numero').innerHTML = generateNumber();
    document.getElementById('paloU').innerHTML = randomPalos;
    document.getElementById('paloD').innerHTML = randomPalos;
    
}

let randomPalos = generatePalos();

let color = () => {
    if (generatePalos() == '♥' || generatePalos() == '♦'){
        generatePalos().style.color = 'red';
    }
}