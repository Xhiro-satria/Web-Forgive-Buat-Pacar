document.addEventListener("DOMContentLoaded", function () {
    // CARD
    const main1 = document.querySelector(".main-container");
    const main2 = document.querySelector(".main2-container");
    const main3 = document.querySelector(".main3-container");

    // FORM 1
    const btnLanjut = document.getElementById("btnLanjut");
    const nameInput = document.getElementById("nameInput");

    // FORM 2
    const btnTidak = document.getElementById("btnTidak");
    const btnYa = document.getElementById("btnYa");
    let namaUser = "";

    let scaleYa = 1;
    let scaleTidak = 1;
    
    // LANJUT FORM 1
btnLanjut.addEventListener("click", function () {
    if (nameInput.value.trim() === "") {
        alert("Isi dulu nama kamu 😙");
        nameInput.focus();
    } else {
        // simpan nama
        namaUser = nameInput.value.trim();

        // tampilkan nama di card 2 & 3
        document.getElementById("namaUser").textContent = namaUser;
        document.getElementById("namaUser3").textContent = namaUser;

        // transisi card
        main1.style.opacity = "0";
        main1.style.pointerEvents = "none";

        main2.style.display = "flex";
        main2.style.opacity = "1";
        main2.style.pointerEvents = "auto";
    }
});


    // KLIK GAKKK
    btnTidak.addEventListener("click", function (e) {
        e.preventDefault();

        // Maapin membesar
        scaleYa += 0.05;
        if (scaleYa > 1.8) scaleYa = 1.8;

        // gakkk mengecil
        scaleTidak -= 0.05;
        if (scaleTidak < 0.4) scaleTidak = 0.4;

        btnYa.style.transform = `scale(${scaleYa})`;
        btnTidak.style.transform = `scale(${scaleTidak})`;

        if (scaleTidak <= 0.4) {
            btnTidak.style.opacity = "0";
            btnTidak.style.pointerEvents = "none";
        }
    });

    // KLIK MAAPIN → tampilkan CARD 3
    btnYa.addEventListener("click", function () {
        main2.style.display = "none";      // sembunyikan card 2

        main3.style.display = "flex";      // tampilkan card 3
        main3.style.opacity = "1";          // buat terlihat
        main3.style.position = "absolute";  // supaya muncul di atas
        main3.style.top = "0";
        main3.style.left = "0";
        main3.style.width = "100%";
        main3.style.height = "100vh";
        main3.style.justifyContent = "center";
        main3.style.alignItems = "center";
        main3.style.transition = "opacity 0.5s ease"; // efek fade in
    });
});

//<!-- create by XhyroSatria -->