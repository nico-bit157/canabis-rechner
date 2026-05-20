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
    let table_body_gp = "<tr><td>Festpreis</td><td>" + gramm + "g x " + grundpreis.toFixed(2).replace('.', ',') + "€</td><td>" + grundpreis_gesamt.toFixed(2).replace('.', ',') + "€</td></tr>"
    let table_body_30 =""
    let table_body_15_30 =""
    let table_body_15 =""

    if (actual > 30) {
        teilpreis30_plus = preis30plus * (actual - 30);
        table_body_30 = "<tr><td>Fixzuschlag >30g</td><td>" + (actual-30) + "g x " + preis30plus.toFixed(2).replace('.', ',') + "€</td><td>" + teilpreis30_plus.toFixed(2).replace('.', ',') + "€</td></tr>"
        actual = 30;
    }

    if (actual > 15) {
        teilpreis30 = preis30 * (actual - 15);
        table_body_15_30 = "<tr><td>Fixzuschlag 15g-30g</td><td>" + (actual-15) + "g x " + preis30.toFixed(2).replace('.', ',') + "€</td><td>" + teilpreis30.toFixed(2).replace('.', ',') + "€</td></tr>"
        
        actual = 15;
    }

    if (actual > 0) {
        teilpreis15 = preis15 * actual;
        table_body_15 = "<tr><td>Fixzuschlag <15g</td><td>" + (actual) + "g x " + preis15.toFixed(2).replace('.', ',') + "€</td><td>" + teilpreis15.toFixed(2).replace('.', ',') + "€</td></tr>"
        
    }

    let gesamtpreis = grundpreis_gesamt + teilpreis30_plus + teilpreis30 + teilpreis15

    document.getElementById('ergebnis').innerText =
        'Gesamtpreis: ' + gesamtpreis.toFixed(2).replace('.', ',') + ' €';

    document.getElementById("result_table").style.visibility = "visible";
    document.getElementById("table-body").innerHTML =
        table_body_gp + table_body_15 + table_body_15_30 + table_body_30 
}