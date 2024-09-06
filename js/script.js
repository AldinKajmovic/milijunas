let brojTacnihOdgovora = 0;

function ucitajPrvoPitanje() {
    ucitajPitanje(0);
}

function kreirajRadioDugme(id, value, label) {
    let div = document.createElement("div");
    div.classList.add("form-check", "text-center", "mx-auto");

    let input = document.createElement("input");
    input.type = "radio";
    input.classList.add("form-check-input");
    input.id = id;
    input.name = "odgovor";
    input.value = value;
    input.required = true;

    let labelElement = document.createElement("label");
    labelElement.classList.add("form-check-label");
    labelElement.htmlFor = id;
    labelElement.textContent = label;

    div.appendChild(input);
    div.appendChild(labelElement);




    return div;
}


function ucitajPitanje(indeks) {

    document.getElementsByTagName("BODY")[0].style.height = "95vh";
    let brojRandomPitanja = Math.floor(Math.random() * 5);

    let glavniDiv = document.getElementById("formaOdgovori");
    glavniDiv.style = "margin-top:150px;";
    document.getElementById("pocetnaStranica").style.display = "none";

    let pitanje = document.createElement("h4");
    pitanje.classList.add("mt-4", "text-center");
    pitanje.textContent = pitanja[indeks][brojRandomPitanja].pitanje;
    pitanje.style.cssText = "font-size:32px; width:50%; margin-left:25%; border-radius:15px 50px; border:5px solid #1A1A1A; box-shadow: 5px 5px 15px #173573;  background-color:#1A1A1A;";
    glavniDiv.appendChild(pitanje);

    // Prvi red
    let prviRed = document.createElement("div");
    prviRed.classList.add("row");
    let prvaKolonaPrviRed = document.createElement("div");
    prvaKolonaPrviRed.classList.add("col");
    let divPrvaKolona = document.createElement("div");
    divPrvaKolona.classList.add("form-check", "mt-4");
    let inputElement = kreirajRadioDugme("radio1", "a", pitanja[indeks][brojRandomPitanja].odgovori["a"]);
    inputElement.style.cssText = "font-size:20px; border-radius:15px 50px; border:5px solid #1A1A1A; box-shadow: 5px 5px 15px #173573; width:50%; background-color:#1A1A1A;";

    divPrvaKolona.appendChild(inputElement);
    prvaKolonaPrviRed.appendChild(divPrvaKolona);

    let drugaKolonaPrviRed = document.createElement("div");
    drugaKolonaPrviRed.classList.add("col");
    let divDrugaKolona = document.createElement("div");
    divDrugaKolona.classList.add("form-check", "mt-4");
    let inputElement2 = kreirajRadioDugme("radio2", "b", pitanja[indeks][brojRandomPitanja].odgovori["b"]);
    inputElement2.style.cssText = "font-size:20px; border-radius:15px 50px; border:5px solid #1A1A1A; box-shadow: 5px 5px 15px #173573; width:50%; background-color:#1A1A1A;";
    divDrugaKolona.appendChild(inputElement2);
    drugaKolonaPrviRed.appendChild(divDrugaKolona);

    prviRed.appendChild(prvaKolonaPrviRed);
    prviRed.appendChild(drugaKolonaPrviRed);
    glavniDiv.appendChild(prviRed);

    // Drugi red
    let drugiRed = document.createElement("div");
    drugiRed.classList.add("row");
    let prvaKolonaDrugiRed = document.createElement("div");
    prvaKolonaDrugiRed.classList.add("col");
    let divPrvaKolona2 = document.createElement("div");
    divPrvaKolona2.classList.add("form-check", "mt-4");
    let inputElement3 = kreirajRadioDugme("radio3", "c", pitanja[indeks][brojRandomPitanja].odgovori["c"]);
    inputElement3.style.cssText = "font-size:20px; border-radius:15px 50px; border:5px solid #1A1A1A; box-shadow: 5px 5px 15px #173573; width:50%; background-color:#1A1A1A;";
    divPrvaKolona2.appendChild(inputElement3);
    prvaKolonaDrugiRed.appendChild(divPrvaKolona2);


    let drugaKolonaDrugiRed = document.createElement("div");
    drugaKolonaDrugiRed.classList.add("col");
    let divDrugaKolona2 = document.createElement("div");
    divDrugaKolona2.classList.add("form-check", "mt-4");
    let inputElement4 = kreirajRadioDugme("radio4", "d", pitanja[indeks][brojRandomPitanja].odgovori["d"]);
    inputElement4.style.cssText = "font-size:20px; border-radius:15px 50px; border:5px solid #1A1A1A; box-shadow: 5px 5px 15px #173573; width:50%; background-color:#1A1A1A;";
    divDrugaKolona2.appendChild(inputElement4);
    drugaKolonaDrugiRed.appendChild(divDrugaKolona2);
    drugiRed.appendChild(prvaKolonaDrugiRed);
    drugiRed.appendChild(drugaKolonaDrugiRed);
    glavniDiv.appendChild(drugiRed);


    let divDugme = document.createElement("div");
    divDugme.classList.add("d-flex", "justify-content-center", "mt-3");
    let dugme = document.createElement("button");
    dugme.classList.add("btn", "btn-primary", "glavniEkran");
    dugme.id = "dugmeOdg";
    dugme.textContent = "Potvrdi odgovor";
    dugme.type = "button";

    divDugme.appendChild(dugme);
    glavniDiv.appendChild(divDugme);
    document.getElementById("dugmeOdg").addEventListener("click", () => {
        provjeriOdgovor(indeks, brojRandomPitanja);
    });
}

function provjeriOdgovor(indeks, brojRandomPitanja) {
    let izabraniOdgovor = document.querySelector('input[name="odgovor"]:checked').value;
    let tacanOdgovor = pitanja[indeks][brojRandomPitanja].tacanOdgovor;

    if (izabraniOdgovor === tacanOdgovor) {
        brojTacnihOdgovora++;
        if (brojTacnihOdgovora < pitanja.length) {
            formaOdgovori.innerHTML = "";
            ucitajPitanje(indeks + 1);
        } else {

            alert("Čestitamo! Osvojili ste 1.000.000 KM. Vi ste novi milioner.");
        }
    } else {
        if (indeks == 0) {
            alert("Izgubili ste i osvojili 0 KM");
        } else {
            alert("Izgubili ste i osvojili: " + nagrade[indeks - 1]);
        }

        location.reload();
    }
}