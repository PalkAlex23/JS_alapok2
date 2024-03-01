window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenyKezeles();
    esemenyKezeles2();
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll("section h2")[0]
    console.log(ELEM.innerHTML)
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM = document.querySelectorAll("#ide")[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM = document.querySelectorAll(".ide")[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>"
}
function elemekElerese4() {
    const ELEM = document.querySelector("#lista")
    let txt = ""
    txt += "<ul>"
    for (let i = 1; i <= 5; i++) {
        let szam = (Math.floor(Math.random() * 20) + 10)
        txt += `<li>${szam}</li>`
    }
    txt += "</ul>"
    ELEM.innerHTML = txt
}
function elemekFormazasa() {
    const ELEM = document.querySelector("#lista")
    ELEM.classList.add("formazott")
}
function esemenyKezeles() {
    const ELEM = document.querySelector("#lista")
    ELEM.addEventListener("click", function() {
        const kattELEM = document.getElementsByClassName("kattintasutan")
        kattELEM[0].innerHTML = ELEM.innerHTML
    });
}
function esemenyKezeles2() {
    const ELEM = document.querySelector(".feladat")
    ELEM.innerHTML = "<button>OK</button>"
    const ELEM2 = document.querySelectorAll(".feladat button")[0]
    ELEM2.addEventListener("click", function() {
        ELEM.innerHTML +=  `<div>
                                <img src="teszt.png" alt="tesztkép" id="esf3">
                            </div>`
        const ELEM4 = document.querySelector("#esf3")
        ELEM4.classList.add("atmeret")
    })
}