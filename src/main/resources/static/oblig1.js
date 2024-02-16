const filmRegister=[];
// Function to clear the content displayed by visFilmRegister

function visFilmRegister(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for (let p of filmRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"
            +p.navn+"</td><td>"+p.etternavn+"</td><td>"
            +p.telefon+"</td><td>"+p.epostadresse+"</td>";
        ut+="</tr>";
    }
    document.getElementById("filmRegister").innerHTML=ut;
}
//registrerer inputene og viser dem
function registrer() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const navn = document.getElementById("navn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epostadresse = document.getElementById("epostadresse").value;

    //initialiserer variabel med value false
    let hasError = false;

    // Validation for film
    if (film === "") {
        document.getElementById("error_film").textContent = "Må velge en film";
        hasError = true;
    } else {
        document.getElementById("error_film").textContent = "";
    }

    // Validering for antall billett
    if (antall === "" || isNaN(antall) || parseInt(antall) <= 0) {
        document.getElementById("error_antall").textContent = "Må velge antall";
        hasError = true;
    } else {
        document.getElementById("error_antall").textContent = "";
    }

    // Validering for fornavn
    if (navn === "") {
        document.getElementById("error_fornavn").textContent = "Må skrive noe inn i fornavn";
        hasError = true;
    } else {
        document.getElementById("error_fornavn").textContent = "";
    }

    // Validering for etternavn
    if (etternavn === "") {
        document.getElementById("error_etternavn").textContent = "Må skrive noe inn i etternavn";
        hasError = true;
    } else {
        document.getElementById("error_etternavn").textContent = "";
    }

    // Validering for telefonnummer ved å bruke regex
    const telefonRegex = /^\d{8}$/;
    if (telefon === "" || !telefonRegex.test(telefon)) {
        document.getElementById("error_telefon").textContent = "Må skrive inn et gyldig telefonnummer (8 siffer)";
        hasError = true;
    } else {
        document.getElementById("error_telefon").textContent = "";
    }

    // Validering for email ved bruk av regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epostadresse)) {
        document.getElementById("error_epost").textContent = "Må skrive inn en gyldig e-postadresse";
        hasError = true;
    } else {
        document.getElementById("error_epost").textContent = "";
    }

    // hvis noen av  input er invalid, returner uten registrering
    if (hasError) {
        return;
    }

    // If all validations pass, register the ticket

    //en konstant for billettregistrering
    const billett = {
        film: film,
        antall: antall,
        navn: navn,
        etternavn: etternavn,
        telefon: telefon,
        epostadresse: epostadresse
    };
    filmRegister.push(billett);
    //nullstill inputboksene
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("navn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epostadresse").value = "";
    visFilmRegister();

}

    //Funksjon for å slette alt i filmregisteret
    function slettRegister(){
        document.getElementById("billettTabell").deleteRow(0);
    }

