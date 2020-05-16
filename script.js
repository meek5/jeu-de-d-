///////////////////////////////////////////////////////////////////////////////
//UTILISATION DE PROMPT ET ALERT
/*let name = prompt('quel est  ton  nom ?')
alert(name + ' soyez le bienvennu')
console.log(name)*/

//////////////////////////////////////////////////////////////////////////////
//UTILISATION DE SWITCH

/*let personne;
personne = prompt('who are you please !');
let job;
job = prompt(personne + ' what is your work of to now days !')
console.log(personne+' is a '+job)
switch (job) {
    case 'student' :
        console.log(personne+' is a '+job);
        break;
    case 'driver' :
        console.log(personne+' is a '+job);
        break;
    case 'teacher' :
        console.log(personne+' is a '+job);
        break;
    default :
        console.log(personne + ' does anything else');
        break;
}*/

///////////////////////////////////////////////////////////////////////////////////////////
//LECTURE: FONCTION

//fonction d'une equation du segond degré
/*let A =prompt('Entrez la valeur de A');
let B =prompt('Entrez la valeur de B');
let c =prompt('Entrez  la valeur de C');
function secondDegre(a, b, c){
    let x1, x2;
    let deltat = Math.pow(b,2) - 4 * a * c;
    if(deltat < 0){
        console.log('pas de solution ! la valeur du deltat est negative');
    }else if(deltat === 0){
        let x = deltat / 2 *a*b;
        return x;
    } else{
        x1 = Math.sqrt(deltat) + 2 * a * b;
        x2 = Math.sqrt(deltat) - 2 * a * b;
        return (x1,x2)
    }
}
secondDegre(A, B, c)*/

//fonction de retraités. appelle d'une fonction dans l'autre
/*function ktreage(anneeDeNaiss){
    let age = 2020 - anneeDeNaiss;
    return age;
}
function anneeResteRetraite(annee,nom ){
    let age = ktreage(annee);
    let anneerestantes = 65 - age;
    if(anneerestantes >= 0){
        console.log(nom + ' sera en retraite '+anneerestantes+' ans apres')
    }else {
        console.log(nom + ' est en retraite ')
    }
}
anneeResteRetraite(prompt('ton Année de naissance svp'),prompt('ton nom c\'est quoi'));*/
//Ou alors voir cette logique sans utilisation de prompt
/*function ktreage(anneeDeNaiss){
    let age = 2020 - anneeDeNaiss;
    return age;
}
function anneeResteRetraite(annee,nom ){
    let age = ktreage(annee);
    let anneerestantes = 65 - age;
    if(anneerestantes >= 0){
        console.log(nom + ' sera en retraite '+anneerestantes+' ans apres')
    }else {
        console.log(nom + ' est en retraite ')
    }
}
anneeResteRetraite(1990,Samy);
anneeResteRetraite(1992,Deborah);
anneeResteRetraite(1995,Onesime);*/

///////////////////////////////////////////////////////////////////////////////
//LECTURE : Array
/*let sunDayPersonnes = new Array(' Onesime','Shukuru','Alfred');
let ajouter = sunDayPersonnes.push(prompt('ajouter une personnes'));
sunDayPersonnes.push('kiriku');
sunDayPersonnes.unshift('Naomie');

if(ajouter && sunDayPersonnes.indexOf('Onesime') === -1){
    console.log(sunDayPersonnes)
    alert('Entre dans le clip Onesine')
}else {
    console.log(sunDayPersonnes)
    alert('pas d\'acces')
}*/

///////////////////////////////////////////////////////////////////////
//LECTURE: OBJECTS 

//OBJECT'properties
/*let onesime = {
    name : 'onesime',
    lastname : 'wanzalire',
    age : 25,
    profession : 'programmeur',
    marié : false,
};
console.log(onesime); // objet entier
console.log(onesime[age]); //voir l'age de onesime
let tyiup = 'marié'//passation de la propriété marié en  propriété tyiup
console.log(onesime[tyiup]); 
onesime.lastname = 'kamabu'; //modification de la valeur dela propriété lastename de onesime
onesime['profession'] = 'evangeliste'; //modification de la valeur de la propriété profession de onesime
let kisughu = new Object();//declaration de l'objet sans valeurs
kisughu.name = 'kisughu';
kisughu.lastname = 'tresor';
kisughu['age'] = 23;
kisughu['prefession'] = 'cascadeur de la ville';
console.log(kisughu)*/

//OBJECT'methods
//v1.00
/*let onesime = {
    name : 'onesime',
    lastname : 'wanzalire',
    dateNaiss : 1995,
    equipe : ['shukuru', 'alfred', 'christian'],
    /*calculateAge : function(anneeDeNaiss){
        return 2020 -anneeDeNaiss;
    }
    /*calculateAge : function(){
        return 2020 - this.dateNaiss;
    }
};*/
/*console.log(onesime)
console.log(onesime.equipe[2])
console.log(onesime.calculateAge(1995))*/
/*console.log(onesime.name+' ton age est de '+onesime.calculateAge()+' ans');
let age = onesime.calculateAge(); // affection de la fonction calculateAge de l'objet onesime a la variable age
onesime.age = age;*/ // ajout de la propriété age dans l'objet onesime et on la passe la variable age
//v2.00
/*let onesime = {
    name : 'onesime',
    lastname : 'wanzalire',
    dateNaiss : 1995,
    equipe : ['shukuru', 'alfred', 'christian'],
    calculateAge : function(){ //creation de la methode
        this.age = 2020 -this.dateNaiss;
    }
}
onesime.calculateAge()
console.log(onesime)

let John = {
    dateNaiss : 1995,
    calculateAge : function(){ //creation de la methode
        this.age = 2020 -this.dateNaiss;
    }
}
John.calculateAge();
console.log(John);*/

//////////////////////////////////////////////////////////////////////////////////
//LECTURE : LOOPS 

let equipe = ['Onesime','John','Deborah','Baraka','Rachel'];

// for loop
/*for(i = 0; i < 10; i++){
    console.log(i);
}*/
/*for(i = 0; i < equipe.length; i++){ //boucle Ascendante
    console.log(equipe[i]);
}*/
/*for(i = equipe.length - 1; i>= 0; i--){ //boucle descendante
    console.log(equipe[i]);
}*/
/*for(i = 0; i < equipe.length; i++){
    console.log(equipe[i]);
    if(i===3){ 
        break; //boucle s'arrete a l'indice 3
    }
}*/
/*for(i = 0; i < equipe.length; i++){
    if(i===3){
        continue; //boucle saute l'indice 3
    }
    console.log(equipe[i]);
}*/

//while loop
/*let i = 5;
while(i >= equipe.length){
    console.log(equipe[i]);
    i--;
}*/

//////////////////////////////////////////////////////////////////////
//TRAVAIL PRATIQUE
/*let anneeDeNaiss = [2010,2000,1995,2004,1980]; //1
function printAllAge(){
    let ages =[];  //2
    let fullAges = [];
    for( let i = 0; i < anneeDeNaiss.length; i++){ //3
        ages[i] = 2020 - anneeDeNaiss[i];
    }
    for (i = 0; i < ages.length; i++){
        if(ages[i] >= 18){
            console.log('la personne numéro ' + (i + 1) + ' est agé de ' + ages[i] + ' et elle est majeure');
            fullAges.push(true);
        }else{
            console.log('la personne numéro ' + (i + 1) + ' est agé de ' + ages[i] + ' et elle n\'est pas majeure');
            fullAges.push(false);
        }
    }

    return fullAges;
}
let full_1 = printAllAge(anneeDeNaiss);
let full_2 = printAllAge([2014,2013,1999])*/

////////////////////////////////////////////////////////////////////////////
//LECTURE: THE this keyword

// console.log(this);

/*calculateAge(1995)
function calculateAge(year){
    console.log(2020 - year)
    console.log(this)
}*/

/*let onesime = {
    name : 'Onesime',
    anneeDeNaiss : 1995,
    calculeAge: function(){ // création de la methode de calcule de l'age pour onesime
        console.log(this);
        console.log(2020-this.anneeDeNaiss);

        function innerfunction(){ //pour savoir plus sur la fenetre de l'objet onesime 
            console.log(this); 
        }
        innerfunction();

    }
}
onesime.calculeAge();

let john = {
    name : 'John',
    anneeDeNaiss : 1997
}
john.calculeAge = onesime.calculeAge; // on fait appel à la méthode de calcule de l'age de onesime pour calculer l'age de john
john.calculeAge();*/

////////////////////////////////////////////////////////////////////////////////////////
//UTILISATION DE PROTOTYPE

//creation d'une methode(prototype) grace à la propriété prototype
/*let personne = function(name, lastNane, yearOfBirth){
    this.name = name;
    this.lastNane = lastNane;
    this.yearOfBirth = yearOfBirth;
}
personne.prototype.ktreAge = function(){
    age = 2020 - this.yearOfBirth;
    console.log(this.name +" "+this.lastNane+ " tu es agé de "+age+" ans")
}
let onesime = new personne("onesime","wanzalire",1995)
onesime.ktreAge()
let kiriku = new personne("Kiriku","Karaba",1987)
kiriku.ktreAge()
let lukusa = new personne("Lukusa","Kazungu",1234)
lukusa.ktreAge()
let beté = new personne("Beté","sukula",2000)
beté.ktreAge()*/

//creation d'un objet grace à la propriété Object.create  et lui passe en argument un prototype 
//creation du prototype
/*let personneProto ={ 
    calculeAge: function(){
        console.log(2000 - anneDeNaiss);
    } 
}

//creation de l'objet premiere maniere en lui passant en argument le prototype personneProto
let onesime = Object.create(personneProto);
onesime.name = "Wanzalire";
onesime.anneDeNaiss = 1995;
onesime.emploi = "programmeur";

//creation de l'objet deuxieme maniere en lui passant en argument le prototype personneProto
let john = Object.create(personneProto, {
    name: { value: "John" },
    anneDeNaiss: { value: 1997 },
    emploi: { value: "Commerçant"}
})*/


////////////////////////////////////////////////////////////////////////
//passe une fonction comme argument
/*let prixCoutant = 200000;
let vente = [150000, 120000, 400000, 570000, 560000];
let resultat = function(table, fonction){
    let resultat = [];
    for(let i = 0; i < vente.length; i++) {
        resultat.push(fonction(table[i]));
    }
    return resultat;
}

function calculeResultat(element){
    let resultat = prixCoutant - element;
    return resultat;
}

function siPerte(element) {
    return element < 0;
}function maxheatrate(element) {
    if(element <= -50000){
        return Math.round(206.9 - (0.6 * element));
    }else if(element === 0){
        return -1;

    }else {
        return "ooookkk bon travailleur";
    }
    
}

let revenu = resultat(vente, calculeResultat);
let savoirPerte = resultat(revenu, siPerte);
let rates = resultat(revenu,maxheatrate)
console.log(revenu);
console.log(savoirPerte);
console.log(rates);
*/

//////////////////////////////////////////////////////////
// LLECTURE: FUNCTIONS RETURNING FUNCTIONS

//
/*function jobInterview(job){
    if(job === "programmeur"){
        return function(name){
            console.log(name + ", tu peux nous prouver ton expérience du programmeur");
        }
    }else if (job === "designer"){
            return function(name){
                console.log(name + ", montre nous ton eperience de disigner");
            }
    }else{
        return function(name) {
            console.log("que fais-tu mon ami(e) " + name + "?");
        }     
    }
}

let questionProgrammeur = jobInterview("programmeur");
questionProgrammeur("Onesime");
let questionDesigner = jobInterview("designer");
questionDesigner("Christian");
let questionPasJob = jobInterview();
questionPasJob("Onesime");

//OU ALORS
jobInterview("programmeur")("onesime");
jobInterview("designer")("Christian");
jobInterview()("Onesime");*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//invoqué immediatement l'expression de la fonction (iife)




















































































