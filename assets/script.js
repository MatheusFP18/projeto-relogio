let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let img = document.getElementById("imagem"); // Certifique-se de que o ID está correto no HTML

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

    carregar(hour); // Atualiza a imagem com base na hora atual
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

function carregar(hour) {
    if (!img) {
        console.error("Elemento da imagem não encontrado!");
        return;
    }

    if (hour >= 0 && hour < 12) {
        document.body.style.background = "#e9d0bd"
        img.src = "assets/img/manha.png";
        img.alt = "Imagem da manhã";
    } else if (hour >= 12 && hour < 18) {
        document.body.style.background = "#ce6616"
        img.src = "assets/img/TardeC.png";
        img.alt = "Imagem da tarde";
    } else {
        img.src = "assets/img/noite.png";
        img.alt = "Imagem da noite";
    }
}

setInterval(updateClock, 1000);
updateClock(); // Chama a função imediatamente ao carregar a página

