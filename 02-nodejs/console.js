var service = require('./service.js');
var readline = require('readline');

var listerTousPres = service.listerTousLesPresentateurs;
var listerTopPres = service.listerTopPresentateurs;
var listerSession = service.listerToutesLesSessions;
var listerSessionId = service.trouverUneSession;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var questionUtilisateur=function(){
    rl.question('*** Application Conférence *** \n 1. Liste de tous les présentateurs \n 2. Top présentateurs \n 3. Liste des sessions \n 4. Détail d\'une session \n',function (answer) {
        if (answer==1)
        {
            console.log(listerTousPres());
        }
        if (answer==2)
        {
            console.log(listerTopPres());
        }
        if (answer==3)
        {
            console.log(listerSession());

        }
        if (answer==4)
        {
            rl.question('Quel id de session ?',function (id) {
                console.log(listerSessionId(id));
            });
        }
        if (answer!=1 && answer!=2 && answer!=3 && answer!=4)
        {
            rl.close();
        }
        questionUtilisateur();
    });
  }
  questionUtilisateur();
  
