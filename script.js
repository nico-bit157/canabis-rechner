function berechnen() {
    const gramm = parseFloat(document.getElementById('gramm').value) || 0;

    const grundpreis = parseFloat(document.getElementById('grundpreis').value) || 0;
    const preis15 = parseFloat(document.getElementById('preis15').value) || 0;
    const preis30 = parseFloat(document.getElementById('preis30').value) || 0;
    const preis30plus = parseFloat(document.getElementById('preis30plus').value) || 0;

    let actual = gramm
    let grundpreis_gesamt = actual * grundpreis;
    let teilpreis30_plus = 0
    let teilpreis30 = 0
    let teilpreis15 = 0

    if (actual > 30) {
        teilpreis30_plus = preis30plus * (actual - 30);
        actual = 30;
    }

    if (actual > 15) {
        teilpreis30 = preis30 * (actual - 15);
        actual = 15;
    }

    if (actual > 0) {
        teilpreis15 = preis15 * actual;
    }

    let gesamtpreis = grundpreis_gesamt + teilpreis30_plus + teilpreis30 + teilpreis15

    document.getElementById('ergebnis').innerText =
        'Gesamtpreis: ' + gesamtpreis.toFixed(2).replace('.', ',') + ' €';

    document.getElementsByClassName("result-table").style.visibility = "visible";
    //document.getElementById("result-table").innerHTML =
    //    "<tr><td>Grundpreis</td>" + gramm + " x " + grundpreis + "<td></td><td>" + grundpreis_gesamt + "</td></tr>"
}