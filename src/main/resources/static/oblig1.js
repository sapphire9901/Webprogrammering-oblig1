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


    //validering for inputene, sjekker om de er gyldige eller har blitt skrevet inn
    if (film === "") {
        document.getElementById("error_film").append("Må velge en film");
        return;
    }
    if (antall === "" || isNaN(antall) || parseInt(antall) <= 0) {
        document.getElementById("error_antall").append("Må velge antall");
        return;
    }
    if (navn === "") {
        document.getElementById("error_fornavn").append("Må skrive noe inn i fornavn");
        return;
    }

    if (etternavn === "") {
        document.getElementById("error_etternavn").append("Må skrive noe inn i etternavn");
        return;
    }
    if (telefon === "" || isNaN(telefon) || telefon.length !== 8) {
        document.getElementById("error_telefon").append("Må skrive noe inn i telefon");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epostadresse)) {
        document.getElementById("error_epost").append("Må skrive noe inn i epost");
        return;
    }

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

