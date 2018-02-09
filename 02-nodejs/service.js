var tab = require('./data/devfest-2015');



var tabPres = tab.speakers;
var tabSess = tab.sessions;

var tabPresNomPrenom = tabPres.map(function (ele) {
    return ele.firstname + " " + ele.lastname;
});

var topPres = tabPres.filter(function (ele) {
    return ele.topspeaker;
}
).map(function (ele) {
    return ele.firstname + " " + ele.lastname;
});

var tabSessTitre = tab.sessions.map(function (ele) {
    return ele.title;
});



//Formatte un tableau pour le rendre zoli
var tabJolie = function (tab) {
    return tab.join('\n')
        ;
}


var tabPresJolie = tabJolie(tabPresNomPrenom);
var tabSessJolie = tabJolie(tabSessTitre);
var tabTopPressJolie = tabJolie(topPres);

var listerTousLesPresentateurs = function () {
    return tabPresJolie;
}
var listerToutesLesSessions = function () {
    return tabSessJolie;
}

var trouverUneSessionPasJolie = function (idSession) {
    return tabSess.filter(function (ele) {
        return ele.id == idSession;
    }).map(function (ele) {
        return ele.title;
    });
}


var trouverUneSession= function (idSession) {
    return tabJolie(trouverUneSessionPasJolie(idSession));
}

var listerTopPresentateurs= function () {
    return tabTopPressJolie;
}
exports.listerTousLesPresentateurs = listerTousLesPresentateurs;
exports.listerToutesLesSessions = listerToutesLesSessions;
exports.trouverUneSession = trouverUneSession;
exports.listerTopPresentateurs = listerTopPresentateurs;