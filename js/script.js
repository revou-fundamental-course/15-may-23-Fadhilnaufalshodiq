// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika Hamburger Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
// hitung Luas Persegi
function kirimluaspersegi() {
    var sisi = parseInt(document.getElementById('nilailuas1').value);
    var luas = sisi * sisi;

    // Menampilkan rumus luas persegi
    var rumus = "L = S x S";
    document.getElementById('rumus-luas-persegi').textContent = rumus;

    // Menampilkan masukan nilai sisi
    var nilai = "L = " + sisi + " x " + sisi;
    document.getElementById('masukan-nilai-luas').textContent = nilai;

    // Menampilkan hasil luas
    document.getElementById('hasil-luas-persegi').textContent = "Luas: " + luas;
}

function resetluaspersegi() {
    // Kode JavaScript untuk mereset nilai input dan hasil luas
    document.getElementById('nilailuas1').value = "";
    document.getElementById('hasil-luas-persegi').textContent = "";
    document.getElementById('rumus-luas-persegi').textContent = "";
    document.getElementById('masukan-nilai-luas').textContent = "";
}


function kirimkelilingpersegi() {
    // Kode JavaScript untuk menghitung keliling persegi
    var sisi = parseInt(document.getElementById('nilaikeliling1').value);
    var keliling = 4 * sisi;
    document.getElementById('hasil-keliling-persegi').textContent = "Keliling : " + keliling;

    // Menampilkan rumus keliling persegi
    var rumus = "K = 4 x S";
    document.getElementById('rumus-keliling-persegi').textContent = rumus;

    // Menampilkan masukan nilai sisi
    document.getElementById('masukan-nilai').textContent = "S = 4 x   " + sisi;
}

function resetkelilingpersegi() {
    // Kode JavaScript untuk mereset nilai input dan hasil keliling
    document.getElementById('nilaikeliling1').value = "";
    document.getElementById('hasil-keliling-persegi').textContent = "";
    document.getElementById('rumus-keliling-persegi').textContent = "";
    document.getElementById('masukan-nilai').textContent = "";
}