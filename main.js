

let generateNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9","J", "K", "Q"];
    let inumber = Math.floor(Math.random() * number.length);
    return number[inumber];
}

// console.log (generateNumber())

let generatePalos = () => {
    let palos = ["♦", "♥", "♠", "♣"];
    let ipalos = Math.floor(Math.random() * palos.length);
    return palos[ipalos];
}

// console.log(generatePalos())
window.onload = () => {
    document.querySelector('.numero').innerHTML = generateNumber();
    document.getElementsByClass('palo').innerHTML = generatePalos();
    
}