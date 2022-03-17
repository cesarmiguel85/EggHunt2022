//Type can be 
//  -  'separate' pour les images en vertical --> on peut mettre autant qu'on veut
//  -  'horizontal' pour un defilement avec fleches horizontales --> on peut mettre autant qu'on veut
//  -  'image360' pour le viseur 360 --> 1 seule image (car on ne peut pas scroller vers le bas (ça tourne l'image 360))


export const jsondata = [
{
  area: "Barcelona: Barri Gotic [Spain]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_barcelona_barriogotico.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 7,
        x: 3413,
        y: 2143,
        width: 30,
        height: 40
      },
      {
        code: 8,
        x: 5835,
        y: 2203,
        width: 30,
        height: 40
      },
      {
        code: 9,
        x: 1527,
        y: 1403,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Barcelona: Sagrada Familia [Spain]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_arcelona_sagradafamilia.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 13,
        x: 1917,
        y: 2233,
        width: 30,
        height: 40
      },
      {
        code: 14,
        x: 590,
        y: 2102,
        width: 30,
        height: 40
      },
      {
        code: 15,
        x: 5081,
        y: 2152,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Bruges [Belgium]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_bruges.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 19,
        x: 2190,
        y: 2155,
        width: 30,
        height: 40
      },
      {
        code: 20,
        x: 471,
        y: 2153,
        width: 30,
        height: 40
      },
      {
        code: 21,
        x: 5069,
        y: 2223,
        width: 40,
        height: 40
      }]

    }
  ]
},
{
  area: "Ghent [Belgium]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_ghent.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 22,
        x: 2251,
        y: 2106,
        width: 30,
        height: 30
      },
      {
        code: 23,
        x: 600,
        y: 2146,
        width: 30,
        height: 40
      },
      {
        code: 24,
        x: 6497,
        y: 2039,
        width: 40,
        height: 40
      }]

    }
  ]
},
{
  area: "Myra: amphitheatre [Turkey]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_turkey_amphi_myra.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 25,
        x: 1398,
        y: 2029,
        width: 30,
        height: 40
      },
      {
        code: 26,
        x: 155,
        y: 1868,
        width: 30,
        height: 30
      },
      {
        code: 27,
        x: 7161,
        y: 2118,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Verona: theatre [Italy]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_verona.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 28,
        x: 2626,
        y: 1272,
        width: 50,
        height: 50
      },
      {
        code: 29,
        x: 5803,
        y: 1330,
        width: 50,
        height: 60
      },
      {
        code: 30,
        x: 628,
        y: 976,
        width: 30,
        height: 40
      }]

    }
  ]
}

];


export const variables = {
  //Si pas de base de données (false), toutes lesoptions sur l'app seront desactivée
  with_db: false,
  dbname: "",
  db_addParticpants: "",
  db_tableRanking: "",
  db_emailCheck: "",
  root: "https://cesarmiguel85.github.io/EggHunt2020",
  shareable: true,

}

export const messages_fr = {

  //PAGE D'ACCUEIL
  home_title: "Bienvenue à la chasse aux oeufs de Pâques",
  home_subtitle: "",
  home_desc: "Ce n'est pas parce que nous sommes confinés que nous ne pouvons pas maintenir l'esprit des activités!\n En prenant plusieurs idées d'ici et de là, profitant d'un side-project personnel avec mon collègue Andres, je vous propose une chasse aux oeufs de Pâques autour du monde en mode 'évasion'. J'ai rassemblé les quelques photos 360 de mes derniers voyages (elles pourraient être plus adaptées pour ceci, mais je n'avais jamais pensé faire ce jeu quand je les avais prises). J'ai caché des oeufs dans les images qu'il faudra retrouver.\n\nUne occasion pour partager avec vous des endroits magnifiques de façon ludique 😉\n\nCesar MIGUEL\n(Un merci spécial à Manu qui a pris beaucoup d'entre elles!)",
  //Si usage de Base de données, consentement
  home_disclaimer: "",
  home_type: "",
  home_start: "Démarrer la chasse!",

  //PAGE DES ZONES
  areas_title: "Chasse aux Oeufs de Pâques",
  //Carte de description du jeu
  areas_card_title: "C'est parti!",
  areas_card_desc: "Explorez chaque endroit puis cliquez sur les œufs pour les attraper dès que vous les verrez. \nIls sont colorés et pas trop compliqués à trouver, promis 😉(cherchez par terre ou entre les mains des gens, comme dans la vraie vie!)",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "Vous avez trouvé tous les oeufs de cet endroit, félicitations!",
  //Message oeufs restants
  areas_remaining: "Oeufs restants: ",

  //PAGE DES IMAGES
  imageviewer_title: "Lieu: ",
  imageviewer_found: "Oeufs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "Vous avez trouvé un nouvel oeuf! Good job!",
  imageviewer_addegg_nok: "Vous avez déjà cet oeuf!",

  //PAGE DE FIN DU JEU
  finish_title: "FÉLICITATIONS!",
  finish_card_title: "Vous avez trouvé tous les oeufs!",
  finish_card_content: "J'espère que vous avez apprécié ce jeu et il vous a permis de vous évader ne serait-ce que quelques minutes!\n\nPeut-être vous avez des idées pour les prochaines vacances? 😉\n\nCesar MIGUEL",
  finish_cardtime_title: "Voici votre score",
  finish_cardtime_content: "Vous avez terminé ce jeu en ",
  finish_ranking: "",
  finish_cardtime_saving:"",

  finish_share_title: "Partagez votre score sur LinkedIn! 👍🏻",
  finish_share_text1: "Partager sur LinkedIn",
  finish_share_text2: "",
  finish_quit: "Quitter",


  ranking_title: "",
  ranking_card_title: "",
  ranking_card_content: "",

}


export const messages_en = {

  //PAGE D'ACCUEIL
  home_title: "Welcome to the Easter Egg Hunt",
  home_subtitle: "",
  home_desc: "The confinement should not prevent us from enjoying the essence of some pleasures!\n Borrowing some ideas from here and there, and thanks to a side-project with my colleague Andres, I present to you a virtual Easter Egg Hunt around travel and mind 'evasion'. I have gathered the 360º images from my past travels (they are not the best pictures for this, but I never expected I would use them for this purpose!). I hid some Easter Eggs in the image that you will have to find.\n\n This is an occasion to daydream and share with you some amazing places in a playful way 😉\n\nCesar MIGUEL\n(Special thanks to Manu who took most of these pictures!)",
  //Si usage de Base de données, consentement
  home_disclaimer: "",
  home_type: "",
  home_start: "Start the hunt!",

  //PAGE DES ZONES
  areas_title: "Easter Egg Hunt",
  //Carte de description du jeu
  areas_card_title: "Let's go!",
  areas_card_desc: "Explore the places and look for the hidden eggs. Once you find them, click on them to catch them. \n They are colorful and easy to find, I promise 😉 (look on the ground or in people's hands, like real life!)",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "You found all the eggs in the area, congratulations!",
  //Message oeufs restants
  areas_remaining: "Remaining Eggs: ",

  //PAGE DES IMAGES
  imageviewer_title: "Place: ",
  imageviewer_found: "Eggs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "You found a new egg! Good job!",
  imageviewer_addegg_nok: "You already have this one!",

  //PAGE DE FIN DU JEU
  finish_title: "CONGRATULATIONS!",
  finish_card_title: "You found all the hidden Easter eggs!",
  finish_card_content: "I hope you liked this little game and I wish it took your mind off the confinementor a second. \n\n Maybe you found your next holiday destination ? 😉\n\nCesar MIGUEL",
  finish_cardtime_title: "This is your score",
  finish_cardtime_content: "You finished the game in ",
  finish_ranking: "",
  finish_cardtime_saving:"",

  finish_share_title: "Share your score and the game on LinkedIn! 👍🏻",
  finish_share_text1: "Share on LinkedIn",
  finish_share_text2: "",
  finish_quit: "Quit",

  ranking_title: "",
  ranking_card_title: "",
  ranking_card_content: "",

}