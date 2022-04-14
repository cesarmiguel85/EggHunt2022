//Type can be
//  -  'separate' pour les images en vertical --> on peut mettre autant qu'on veut
//  -  'horizontal' pour un defilement avec fleches horizontales --> on peut mettre autant qu'on veut
//  -  'image360' pour le viseur 360 --> 1 seule image (car on ne peut pas scroller vers le bas (ça tourne l'image 360))


export const jsondata = [
{
  area: "Acacias",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/Acacias_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 1,
        x: 315,
        y: 1801,
        width: 30,
        height: 40
      },
      {
        code: 2,
        x: 2308,
        y: 1492,
        width: 30,
        height: 40
      },
      {
        code: 3,
        x: 3383,
        y: 1742,
        width: 30,
        height: 40
      },{
        code: 4,
        x: 4102,
        y: 1794,
        width: 30,
        height: 40
      },{
        code: 5,
        x: 5700,
        y: 1435,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Arcueil",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/Arcueil_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 11,
        x: 4331,
        y: 1753,
        width: 30,
        height: 40
      },
      {
        code: 12,
        x: 4779,
        y: 1848,
        width: 30,
        height: 40
      },
      {
        code: 13,
        x: 5536,
        y: 1927,
        width: 30,
        height: 40
      },{
        code: 14,
        x: 880,
        y: 2025,
        width: 30,
        height: 40
      },{
        code: 15,
        x: 927,
        y: 1285,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Bayen - Open Space",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/Open_space_Bayen_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 31,
        x: 3169,
        y: 1631,
        width: 30,
        height: 40
      },
      {
        code: 32,
        x: 4368,
        y: 1518,
        width: 30,
        height: 40
      },
      {
        code: 33,
        x: 1024,
        y: 1560,
        width: 30,
        height: 40
      },{
        code: 34,
        x: 1560,
        y: 1883,
        width: 30,
        height: 40
      },{
        code: 35,
        x: 2429,
        y: 1822,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Le Square",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/Square_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 41,
        x: 2880,
        y: 1491,
        width: 30,
        height: 40
      },
      {
        code: 42,
        x: 3792,
        y: 1254,
        width: 30,
        height: 40
      },
      {
        code: 43,
        x: 4793,
        y: 1487,
        width: 30,
        height: 40
      },{
        code: 44,
        x: 396,
        y: 1726,
        width: 30,
        height: 40
      },{
        code: 45,
        x: 1767,
        y: 1577,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "STO1 - Charge",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/STO1_charge_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 51,
        x: 2595,
        y: 1689,
        width: 30,
        height: 40
      },
      {
        code: 52,
        x: 3179,
        y: 1785,
        width: 30,
        height: 40
      },
      {
        code: 53,
        x: 4972,
        y: 1744,
        width: 30,
        height: 40
      },{
        code: 54,
        x: 187,
        y: 1535,
        width: 30,
        height: 40
      },{
        code: 55,
        x: 1599,
        y: 1801,
        width: 30,
        height: 40
      }]

    }
    
  ]
  
},
{
  area: "STO2",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/STO2_5.jpg',
      default_lat: 0,
      default_fov: 38,
      rectangles: [{
        code: 71,
        x: 2498,
        y: 1536,
        width: 30,
        height: 40
      },
      {
        code: 72,
        x: 3963,
        y: 1851,
        width: 30,
        height: 40
      },
      {
        code: 73,
        x: 5193,
        y: 1679,
        width: 30,
        height: 40
      },{
        code: 74,
        x: 5630,
        y: 1534,
        width: 30,
        height: 40
      },{
        code: 75,
        x: 689,
        y: 1883,
        width: 30,
        height: 40
      }]

    }
    
  ]
  
}



];


export const variables = {
  doubleclickcoordinates:true, //mettre true pour activer l'affichage des coordonnees sur image360 avec double click

  //Si pas de base de données (false), toutes lesoptions sur l'app seront desactivée
  with_db: true,
  valid_domain: "", //si l'email doit être l'email pro, par ex. accor.com, sinon laisser en blanc

  db_endpoint_log: "https://script.google.com/macros/s/AKfycbyFnJzyDg049e8aIBj-kZa8_967HGn6pOR8-ZR5QjkXcvX1Y5nyrx0bwYrCwiPMtcyU/exec",
  db_id_scores: "Scores",
  db_id_comments: "Comments",
  db_token: "QAZPLM1209WSXOKN",
  db_read_source_gsheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7dCFUQqNzRMLn1bzO426uZ34JmbkSaNjfmeiMq5dww3uiL7eOjpmKaXkPM54xrtsG71hGRAPnnrM3/pub?gid=0&single=true&output=csv",
  db_visible_headers: ["nickname", "email", "time"], // Leave empty array [] to show all headers
  
  root: "./", //adresse de la racine pour retour forcé
  shareable: false, //afficher le bouton "partager sur linkedin"

}

export const messages_fr = {

  switch_lang: "SWITCH TO ENGLISH",

  //PAGE D'ACCUEIL
  home_title: "Bienvenue à la chasse aux oeufs de Pâques",
  home_subtitle: "",
  home_desc: "En 2022, la chasse aux oeufs de Pâques c'est virtuel. Mais les oeufs en chocolat sont réels 🤩 ! \n Trouve les 5 oeufs cachés sur chaque image, ton temps est compté. Les 3 plus rapides seront récompensés, mais ne t'inquiète pas il y a du chocolat 🍫 pour tout le monde 😊 \n Un grand merci à Cesar qui a créé ce jeu (talent de codeur non négligeable 👾) ",
  //Si usage de Base de données, consentement
  home_nickname: "Quel est ton nom (Prénom NOM) ?",
  home_email: "Quel est ton email ?",
  home_email_wrong: "(mauvais format d'email)",
  home_start: "Démarrer la chasse!",

  //PAGE DES ZONES
  areas_title: "Chasse aux Oeufs de Pâques",
  //Carte de description du jeu
  areas_card_title: "C'est parti!",
  areas_card_desc: "Explore les sites Cityscoot puis clique sur les œufs pour les attraper dès que tu les as trouvé. \nIls sont colorés et pas trop compliqués à trouver, promis 😉 ",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "Tu as trouvé tous les oeufs de cet endroit, félicitations!",
  //Message oeufs restants
  areas_remaining: "Oeufs restants: ",

  //PAGE DES IMAGES
  imageviewer_title: "Lieu: ",
  imageviewer_found: "Oeufs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "Tu as trouvé un nouvel oeuf! Good job!",
  imageviewer_addegg_nok: "Tu as déjà cet oeuf!",

  //PAGE DE FIN DU JEU
  finish_title: "FÉLICITATIONS!",
  finish_card_title: "Tu as trouvé tous les oeufs!",
  finish_card_content: "J'espère que tu as apprécié ce jeu, rapproche toi de ton chef de site pour avoir les vrais oeufs en chocolat. \n\nOn contactera les 3 temps les plus rapides pour un cadeau!",
  finish_cardtime_title: "Voici ton score",
  finish_cardtime_content: "Tu as terminé ce jeu en ",
  finish_ranking: "Consulter le ranking",
  finish_cardtime_saving:"",

  finish_quit: "Quitter",

  finish_cardcomment_title: "Laisse-nous un commentaire!",
  finish_cardcomment_content: "C'est optionnel, mais on adore les feedbacks! 😉",
  finish_cardcomment_button: "Envoyer le commentaire",

  finish_scores_ok_message: "Bravo! Votre score est enregistré!",
  finish_comments_ok_message: "Merci! Ton commentaire est enregistré!",
  finish_scores_nok_message: "Oh oh... On n'arrive pas enregistrer le commentaire...",
  finish_comments_nok_message: "Ouch... On n'arrive pas enregistrer ton score...",

  ranking_title: "Ranking",
  ranking_card_title: "Voici les joueurs les plus rapides!",
  ranking_card_content: "Félicications à tous pour avoir terminé le jeu 😉 (il faut peut-être attendre un peu que le ranking se mette à jour ou vider le cache)",
  ranking_table_header: ["Nom/Pseudo", "Email", "Temps (s)"], //étiquettes pour la table, attention à l'ordre, elles matchent les headers dans la variable db_visible_headers
  ranking_empty: "Il semblerait qu'il n'y a pas encore eu de joeurs..."

}


export const messages_en = {

  switch_lang: "SWITCH TO ENGLISH",

  //PAGE D'ACCUEIL
  home_title: "Bienvenue à la chasse aux oeufs de Pâques",
  home_subtitle: "",
  home_desc: "En 2022, la chasse aux oeufs de Pâques c'est virtuel. Mais les oeufs en chocolat sont réels 🤩 ! \n Trouve les 5 oeufs cachés sur chaque image, ton temps est compté. Les 3 plus rapides seront récompensés, mais ne t'inquiète pas il y a du chocolat 🍫 pour tout le monde 😊 \n Un grand merci à Cesar qui a créé ce jeu (talent de codeur non négligeable 👾) ",
  //Si usage de Base de données, consentement
  home_nickname: "Quel est ton nom (Prénom NOM) ?",
  home_email: "Quel est ton email ?",
  home_email_wrong: "(mauvais format d'email)",
  home_start: "Démarrer la chasse!",

  //PAGE DES ZONES
  areas_title: "Chasse aux Oeufs de Pâques",
  //Carte de description du jeu
  areas_card_title: "C'est parti!",
  areas_card_desc: "Explore les sites Cityscoot puis clique sur les œufs pour les attraper dès que tu les as trouvé. \nIls sont colorés et pas trop compliqués à trouver, promis 😉 ",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "Tu as trouvé tous les oeufs de cet endroit, félicitations!",
  //Message oeufs restants
  areas_remaining: "Oeufs restants: ",

  //PAGE DES IMAGES
  imageviewer_title: "Lieu: ",
  imageviewer_found: "Oeufs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "Tu as trouvé un nouvel oeuf! Good job!",
  imageviewer_addegg_nok: "Tu as déjà cet oeuf!",

  //PAGE DE FIN DU JEU
  finish_title: "FÉLICITATIONS!",
  finish_card_title: "Tu as trouvé tous les oeufs!",
  finish_card_content: "J'espère que tu as apprécié ce jeu, rapproche toi de ton chef de site pour avoir les vrais oeufs en chocolat. \n\nOn contactera les 3 temps les plus rapides pour un cadeau!",
  finish_cardtime_title: "Voici ton score",
  finish_cardtime_content: "Tu as terminé ce jeu en ",
  finish_ranking: "Consulter le ranking",
  finish_cardtime_saving:"",

  finish_quit: "Quitter",

  finish_cardcomment_title: "Laisse-nous un commentaire!",
  finish_cardcomment_content: "C'est optionnel, mais on adore les feedbacks! 😉",
  finish_cardcomment_button: "Envoyer le commentaire",

  finish_scores_ok_message: "Bravo! Votre score est enregistré!",
  finish_comments_ok_message: "Merci! Ton commentaire est enregistré!",
  finish_scores_nok_message: "Oh oh... On n'arrive pas enregistrer le commentaire...",
  finish_comments_nok_message: "Ouch... On n'arrive pas enregistrer ton score...",

  ranking_title: "Ranking",
  ranking_card_title: "Voici les joueurs les plus rapides!",
  ranking_card_content: "Félicications à tous pour avoir terminé le jeu 😉 (il faut peut-être attendre un peu que le ranking se mette à jour ou vider le cache)",
  ranking_table_header: ["Nom/Pseudo", "Email", "Temps (s)"], //étiquettes pour la table, attention à l'ordre, elles matchent les headers dans la variable db_visible_headers
  ranking_empty: "Il semblerait qu'il n'y a pas encore eu de joeurs..."

}
