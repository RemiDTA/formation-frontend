console.log("01 - Fonctions");
var nombre1=10;
var nombre2 = 20;

var additionner = function(nb1,nb2){
    return nb1+nb2;
}

var resultat1 = additionner(nombre1,nombre2);
console.log(resultat1);

var somme = additionner;

var resultat2 = somme(nombre1,nombre2);
console.log(resultat2);

var multiplication = function(nb1,nb2){
    return nb1*nb2;
}

resultat3=multiplication(nombre1, nombre2);
console.log(resultat3);

var afficherOperation = function(nomOperation, nb1,nb2,operation){


    return console.log(nomOperation +" nb1 == "+ nb1 + " nb2 == " + nb2 + " == " + operation(nb1,nb2));
};

afficherOperation("somme", nombre1, nombre2, somme);

afficherOperation("Soustraction", 15, 5, function(n1,n2){return n1-n2;});