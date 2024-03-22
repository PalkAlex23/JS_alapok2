$("load", function() {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa();
    esemenyKezeles();
    esemenyKezeles2();
});

function elemekElerese1() {
    const ELEM = $("section h2").eq(0)
    console.log(ELEM.html())
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM = $("#ide").eq(0)
    ELEM.html("<p>Jó reggelt!</p>")
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM = $(".ide").eq(0)
    ELEM.html("<p>Jó reggelt!</p>")
}
function elemekElerese4() {
    const ELEM = $("#lista")
    let txt = ""
    txt += "<ul>"
    for (let i = 1; i <= 5; i++) {
        let szam = (Math.floor(Math.random() * 20) + 10)
        txt += `<li>${szam}</li>`
    }
    txt += "</ul>"
    ELEM.html(txt)
}
function elemekFormazasa() {
    const ELEM = $("#lista")
    ELEM.addClass("formazott")
}
function esemenyKezeles() {
    const ELEM = $("#lista")
    ELEM.on("click", function() {
        const kattELEM = $(".kattintasutan")
        kattELEM.html(ELEM.html())
    });
}
function esemenyKezeles2() {
    const ELEM = $(".feladat")
    ELEM.html("<button>OK</button>")
    const ELEM2 = $(".feladat button").eq(0)
    ELEM2.on("click", function() {
        ELEM.html(`<div>
                                <img src="teszt.png" alt="tesztkép" id="esf3">
                            </div>`)
        const ELEM4 = $("#esf3")
        ELEM4.addClass("atmeret")
    })
}