const buttons = document.querySelectorAll(".drum");
for (let btn of buttons) {
    btn.addEventListener("click", () => {
        const key = btn.textContent.trim();
        makeSound(key);
    });
}

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("https://files.codingninjas.in/tom-1-28537.mp3");
            tom1.play();
            break;
        case "a":
        var tom2 = new Audio("https://files.codingninjas.in/tom-2-28541.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("https://files.codingninjas.in/tom-3-28542.mp3");
        tom3.play();
        break; 
    case "d":
        var tom4 = new Audio("https://files.codingninjas.in/tom-4-28543.mp3");
        tom4.play();
        break; 
    case "5":
        var tom5 = new Audio("https://files.codingninjas.in/snare-28545.mp3");
        tom5.play();
        break; 
    case "6":
        var tom6 = new Audio("https://files.codingninjas.in/crash-28546.mp3");
        tom6.play();
        break;
    case "7":
        var tom7 = new Audio("https://files.codingninjas.in/kick-bass-28547.mp3");
        tom7.play();
        break;
    }
}