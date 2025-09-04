function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleDefinisi() {
    const container = document.getElementById("definisi-container");
    container.classList.toggle("hidden");
}

function toggleContoh(type) {
    const info = document.getElementById(`info-${type}`);
    info.classList.toggle("hidden");
}

function showPhInfo(ph) {
    const infoBox = document.getElementById("ph-info-box");
    let info = "";

    switch (ph) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            info = "Larutan Asam kuat (misal: asam sulfat, cuka)";
            break;
        case 6:
        case 7:
            info = "Larutan Netral (misal: air murni)";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            info = "Larutan Basa kuat (misal: sabun, amonia)";
            break;
    }
    infoBox.innerText = `pH ${ph}: ${info}`;
}

function updateIndikator(indikator, ph) {
    const colorBox = document.getElementById(`${indikator}-color`);
    const info = document.getElementById(`${indikator}-info`);
    let color = "black";
    let desc = "";

    ph = parseInt(ph);

    const data = {
        sepatu: {
            1: "red",
            2: "red",
            3: "purple",
            4: "purple",
            5: "purple",
            8: "purple",
            9: "purple",
            10: "green",
            13: "green"
        },
        pacar: {
            1: "orange",
            2: "orange",
            3: "green",
            4: "yellow",
            5: "yellow",
            8: "yellow",
            9: "yellow",
            10: "yellow",
            13: "yellow"
        },
        bugenvil: {
            1: "purple",
            2: "red",
            3: "purple",
            4: "red",
            5: "red",
            8: "red",
            9: "brown",
            10: "brown",
            13: "green"
        }
    };

    const penjelasan = {
        sepatu: "Indikator bunga sepatu menunjukkan warna merah pada asam, ungu di netral, dan hijau di basa.",
        pacar: "Indikator daun pacar menunjukkan orange hingga hijau tergantung pH.",
        bugenvil: "Indikator bugenvil berubah dari merah ke hijau tergantung keasaman larutan."
    };

    const specialPH = [6, 7, 11, 12, 14];

    if (specialPH.includes(ph)) {
        color = "black";
        desc = "Tidak terdeteksi.";
    } else {
        color = data[indikator][ph] || "black";
        desc = penjelasan[indikator];
    }

    colorBox.style.backgroundColor = color;
    info.innerText = `pH ${ph}: ${desc}`;
}
