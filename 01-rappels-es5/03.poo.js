function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.age = 'NON RENSEIGNE';
    this.getNomComplet = function () {
        return this.nom + this.prenom + this.pseudo;
    }
    this.getInitiales = function () {
        return this.nom.charAt(0).toUpperCase() + this.prenom.charAt(0).toUpperCase();
    }

}

function afficherPersonne(p) {
    return p.getNomComplet();
}
var jules = new Personne('Jules', 'LEMAIRE', 'jules77');
var paul = new Personne('Paul', 'LEMAIRE', 'paul44');



console.log(afficherPersonne(jules));
console.log(afficherPersonne(paul));

jules.pseudo = 'jules44';
console.log(afficherPersonne(jules));
console.log(jules.age);
jules.age = 44;
console.log(jules.age);
console.log(jules.getInitiales());

var robert = {
    prenom: 'Robert',
    nom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + this.prenom + this.pseudo;
    }
};
console.log(afficherPersonne(robert));

function Client(nom, prenom, pseudo, numeroClient) {
    this.numeroClient = numeroClient;
    Personne.call(this, nom, prenom, pseudo);
    this.getInfos = function () {
        return this.numeroClient + this.nom + this.prenom;
    }
}

var steve = new Client('Steve', 'Lucas', 'steve44', 'A01');

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());