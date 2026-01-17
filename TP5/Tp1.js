function colorh3(couleur) {
    for (let i = 0; i < document.getElementsByTagName('h3').length; i++)
        document.getElementsByTagName('h3')[i].style.color = couleur;
}

//EXMAScript (2eme methode)
//for(let x of tableau )... syntaxe
// const colorh3 = (couleur) => {
//     for (let element of document.getElementsByTagName('h3'))
//         element.style.color = couleur;

// }

const analyseForm = () => {

    // let message='Bonjour' + document.forms[0].genre.value+' ' +document.forms[0].prenom.value+' '+
    // document.forms[0].nom.value+'\n';
    let message = `Bonjour ${document.forms[0].genre.value} ${document.forms[0].prenom.value}  ${document.forms[0].nom.value}
    Vous maitrisez les langues suivantes : 
    `
    for (let elt of document.forms[0].langues) {
        if (elt.checked)
        message += `- ${elt.value}
    `
    }
    alert(message)

}