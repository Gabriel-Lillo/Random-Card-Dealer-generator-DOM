window.onload = () => {
    let generateNumber = () => {
        let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];
        let inumber = Math.floor(Math.random() * number.length);
        return number[inumber];
    }

    let generatePalos = () => {
        let palos = ["♦", "♥", "♠", "♣"];
        let ipalos = Math.floor(Math.random() * palos.length);
        return palos[ipalos];
    }

    document.querySelector('.numero').innerHTML = generateNumber();

    let randomPalos = generatePalos();
    
    document.getElementById('palo1').innerHTML = randomPalos;
    if (document.getElementById('palo1').innerHTML == '♥' || document.getElementById('palo1').innerHTML == '♦') {
        let paloss = document.querySelector('#palo1');
        paloss.style.color = 'red';
    }

    document.getElementById('palo2').innerHTML = randomPalos;
    if (document.getElementById('palo2').innerHTML == '♥' || document.getElementById('palo2').innerHTML == '♦') {
        let paloss = document.querySelector('#palo2');
        paloss.style.color = 'red';
    }
}