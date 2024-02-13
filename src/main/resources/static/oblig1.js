const filmRegister=[];
function visPersonRegister(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>e-postadresse</th>" +
        "</tr>";
    for (let p of filmRegister){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.navn+"</td><td>"+p.etternavn+"</td><td>"+p.epostadresse+"</td>";
        ut+="</tr>";
    }
    document.getElementById("filmRegister").innerHTML=ut;
}
function registrer(){
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const navn = document.getElementById("navn").value;
    const etternavn = document.getElementById("etternavn").value;
    const epostadresse = document.getElementById("epostadresse").value;

    //her må jeg lage if setninger for hvert element ffør jeg tar dem videre i billett
    if (film === "")"Ikke gyldig input"

    const billett = {
        film : film,
        antall : antall,
        navn : navn,
        etternavn : etternavn,
        epostadresse : epostadresse
    };
    filmRegister.push(billett);
    //nullstill inputboksene
    document.getElementById("film").value="";
    document.getElementById("antall").value="";
    document.getElementById("navn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("epostadresse").value="";
    visPersonRegister()}
