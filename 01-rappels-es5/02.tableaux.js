var villes=['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];
villes.forEach(function(ele){
    console.log(ele);
})

var inclutA = villes.every(function(ele){
    return ele.includes("a");
})

console.log("lettreADansToutesLesVilles == "+inclutA);

var inclutTiret = villes.some(function(ele){
    return ele.includes("-");
})

console.log("auMoinsUneVilleAvecUnTiret == "+inclutTiret);


var villesSansTiretSansEspace = villes.filter(function(ele){
    return !(ele.includes("-"))&&!(ele.includes(" "));
})

console.log("villesSansTiretSansEspace == "+villesSansTiretSansEspace);


var villesFinitParSEnMaj = villes.map(function(ele)
{ return ele.toUpperCase() })
.filter(function(ele){
    return ele.endsWith("S");
})

console.log("villesFinitParSEnMaj == "+villesFinitParSEnMaj);