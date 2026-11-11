/* CJAJLK Nature V1.5 — catalogue enrichi : 46 méthodes et 6 guides. Prix purement indicatifs modifiables. */
window.NATURE_DATA = {
 ingredients: [
  {id:'eau', name:'Eau', unit:'ml', pack:1000, price:0.004, note:'Eau du robinet ; coût indicatif.',buyTip:"À trouver : robinet domestique ; utiliser de l’eau potable pour les surfaces alimentaires."},
  {id:'savon_noir',name:'Savon noir ménager liquide',unit:'ml',pack:1000,price:8, note:'Choisir une formule ménagère, jamais un cosmétique.',buyTip:"À chercher : rayon entretien de grandes surfaces, drogueries, magasins bio. Choisir « savon noir ménager ». "},
  {id:'vinaigre',name:'Vinaigre blanc ménager',unit:'ml',pack:1000,price:1.6,note:'Acide. Jamais avec eau de Javel ; éviter pierre naturelle.',buyTip:"À chercher : rayon entretien ou droguerie ; vérifier concentration et compatibilité des surfaces."},
  {id:'bicarbonate',name:'Bicarbonate de soude ménager',unit:'g',pack:1000,price:4,note:'Ne pas confondre avec cristaux de soude.',buyTip:"À chercher : rayon entretien ou magasin de bricolage. Qualité ménagère, ne pas confondre avec les cristaux de soude."},
  {id:'marseille',name:'Savon de Marseille en copeaux sans parfum',unit:'g',pack:500,price:6.5,note:'Vérifier la composition et les recommandations machine.',buyTip:"À chercher : rayon lessive, savon de Marseille en coopérative ou droguerie ; vérifier composition et absence de parfum."},
  {id:'cristaux',name:'Cristaux de soude (carbonate de sodium)',unit:'g',pack:500,price:3,note:'Irritant ; porter des gants, éviter les poussières.',buyTip:"À chercher : droguerie ou rayon entretien. Produit irritant, respecter l’étiquette."},
  {id:'karite',name:'Beurre de karité cosmétique sans parfum',unit:'g',pack:100,price:8,note:'Vérifier les allergies et la date de péremption.',buyTip:"À chercher : magasin cosmétique ou parapharmacie ; qualité cosmétique, composition et traçabilité lisibles."},
  {id:'tournesol',name:'Huile de tournesol cosmétique ou alimentaire fraîche',unit:'ml',pack:1000,price:4,note:'Pas d’ajout d’eau ; surveiller odeur et rancissement.',buyTip:"À chercher : rayon alimentaire ou cosmétique ; huile récente, sans parfum et adaptée à l’usage prévu."},
  {id:'cire',name:'Cire d’abeille cosmétique',unit:'g',pack:100,price:5,note:'Dérivé apicole : vérifier les sensibilités.',buyTip:"À chercher : boutiques cosmétiques, droguerie ou apiculteur ; choisir une cire de qualité cosmétique."},
  {id:'avoine',name:'Flocons d’avoine nature finement mixés',unit:'g',pack:500,price:2,note:'Ne pas utiliser si allergie connue à l’avoine.',buyTip:"À chercher : rayon céréales / épicerie ; flocons nature sans additifs, selon les allergies."},
  {id:'citrique',name:'Acide citrique ménager',unit:'g',pack:500,price:5,note:'Irritant pour les yeux ; à manipuler avec précaution.'}
 ],
 sources: [
  {id:'ademe', name:'ADEME – Ingrédients de base pour le ménage',url:'https://agirpourlatransition.ademe.fr/particuliers/amenager-maison/entretenir/ingredients-base-menage-ecologique',buyTip:"À chercher : rayon entretien ou droguerie ; acide citrique ménager, étiquetage clair."},
  {id:'ademe-sec',name:'ADEME – Précautions avec les produits ménagers',url:'https://agirpourlatransition.ademe.fr/particuliers/amenager-maison/entretenir/precaution-produits-menagers'},
  {id:'smitom',name:'SMITOM-LOMBRIC – Lessive au savon de Marseille',url:'https://www.lombric.com/reduire-mes-dechets/tutos-et-recettes/lessive-maison/'},
  {id:'dgccrf',name:'DGCCRF – Sécurité des produits cosmétiques',url:'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/les-produits-cosmetiques'},
  {id:'ameli',name:'Assurance Maladie – Hygiène bucco-dentaire',url:'https://www.ameli.fr/assure/sante/bons-gestes/quotidien/brosser-dents'},
  {id:'anses',name:'ANSES – Précautions avec les huiles essentielles',url:'https://vigilanses.anses.fr/fr/node/2146'},
  {id:'ademe-air',name:'ADEME – Qualité de l’air et ménage sans parfums',url:'https://www.ademe.fr/presse/communique-national/qualiteair-interieur-3-questions-a-isabelle-augeven-bour/'},
  {id:'anses-hygiene',name:'ANSES – Hygiène domestique (nettoyage et désinfection)',url:'https://www.anses.fr/fr/system/files/MIC2012sa0005Fi.pdf'}
 ],
 recipes: [
  {
   id:'sols',equipment:{"essential":["Seau propre d’au moins 5 L","Doseur gradué pour mesurer 15 ml","Serpillière ou balai à franges adapté au sol"],"optional":["Gants de ménage si peau sensible ou contact prolongé","Petite cuillère ou agitateur réservé au ménage"],"container":"Le seau sert directement à la préparation. Aucun flacon de conservation : solution à jeter après usage.","note":"Ne préparez pas de stock : le mélange dilué est destiné à un lavage immédiat."}, title:'Sols au savon noir', category:'maison', type:'recette', icon:'floor', level:'Facile', minutes:5,
   desc:'Un seau de lavage sans parfum ajouté, pour surfaces compatibles.', base:5000, yieldUnit:'ml',
   ingredients:[['eau',5000],['savon_noir',15]], comparatorUnit:'5 L', comparison:0,
   steps:['Verser {{eau}} d’eau tiède dans un seau propre.','Ajouter {{savon_noir}} de savon noir ménager.','Remuer doucement, laver avec une serpillière propre et respecter le rinçage indiqué pour le sol.','Vider le seau après le ménage ; ne pas conserver la solution diluée.'],
   safety:['Tester sur une zone discrète ; vérifier la notice du revêtement.','Ne pas utiliser sur bois non protégé, surfaces huilées ou matériaux incompatibles.','Ce mélange nettoie mais ne désinfecte pas. Ne jamais ajouter d’autres produits.'],
   storage:'À utiliser immédiatement ; jeter le reste.', source:['ademe','ademe-sec'], tags:['Économique','Sans parfum'], sensitivity:'house'
  },
  {
   id:'cuisine',equipment:{"essential":["Pichet ou récipient propre d’au moins 500 ml","Doseur gradué (petits volumes, environ 5 ml)","Lavette propre ou chiffon microfibre réservé au ménage"],"optional":["Petit flacon verseur propre, pour transporter le mélange pendant le ménage","Entonnoir réservé au ménage"],"container":"Pichet ou flacon verseur de 500 ml, réservé au ménage et étiqueté. Ne pas stocker le reste.","note":"Évitez la pulvérisation dans l’air ou vers le visage ; appliquez au chiffon et rincez les zones en contact alimentaire."},title:'Nettoyant cuisine minute', category:'maison',type:'recette',icon:'spray',level:'Facile',minutes:4,desc:'Pour surfaces lavables, hors matériaux délicats.',base:500,yieldUnit:'ml',
   ingredients:[['eau',500],['savon_noir',5]],steps:['Verser l’eau dans un récipient propre.','Ajouter le savon noir puis mélanger sans faire mousser.','Appliquer avec une lavette ; rincer à l’eau potable les surfaces en contact avec les aliments.','Jeter ce qui reste après le ménage.'],
   safety:['Essayer sur une petite zone avant usage.','Ne pas utiliser sur écrans, bois brut ou matériaux incompatibles.','Nettoyage seulement, pas de désinfection.'],storage:'À préparer pour l’usage immédiat.',source:['ademe','ademe-sec'],tags:['Sans parfum','Simple'],sensitivity:'house'
  },
  {
   id:'vitres',equipment:{"essential":["Pichet ou petit récipient propre d’au moins 500 ml","Doseur gradué pour 50 ml de vinaigre","Deux chiffons propres non pelucheux (application et séchage)"],"optional":["Petit flacon pulvérisateur de 500 ml compatible avec le vinaigre, réservé au ménage","Entonnoir réservé au ménage"],"container":"Pichet ou spray compatible, propre et étiqueté, utilisé immédiatement ; jeter le mélange restant.","note":"Si vous utilisez un spray, pulvérisez sur le chiffon plutôt que dans l’air ; jamais sur un écran ou près du visage."},title:'Vitres au vinaigre dilué',category:'maison',type:'recette',icon:'window',level:'Facile',minutes:4,desc:'Pour vitres ordinaires compatibles.',base:500,yieldUnit:'ml',
   ingredients:[['eau',450],['vinaigre',50]],steps:['Verser l’eau dans un récipient propre.','Ajouter le vinaigre blanc ménager sans mélanger à d’autres produits.','Appliquer sur un chiffon adapté, nettoyer la vitre et essuyer.','Rincer le matériel et jeter le mélange restant.'],
   safety:['Jamais avec de l’eau de Javel, même après usage récent sans rinçage.','Éviter pierre naturelle, écrans, surfaces traitées ou joints sensibles.','Tester une petite zone ; aérer la pièce.'],storage:'À préparer pour un usage immédiat.',source:['ademe','ademe-sec'],tags:['Petit budget'],sensitivity:'house'
  },
  {
   id:'detartrage',equipment:{"essential":["Récipient propre d’au moins 400 ml","Verre doseur pour l’eau et le vinaigre","Chiffon doux ou éponge adaptée","Gants de ménage pour éviter un contact prolongé"],"optional":["Petite brosse souple si l’objet le permet"],"container":"Bol ou pichet utilisé sur le moment ; aucun stockage de la solution préparée.","note":"Vérifiez les recommandations du fabricant : le vinaigre peut abîmer certains matériaux et appareils."},title:'Détartrage d’un récipient compatible',category:'maison',type:'recette',icon:'drop',level:'Facile',minutes:8,desc:'Vinaigre dilué contre les dépôts calcaires légers.',base:400,yieldUnit:'ml',
   ingredients:[['eau',300],['vinaigre',100]],steps:['Vérifier que le fabricant de l’objet autorise l’utilisation de vinaigre dilué.','Mélanger l’eau et le vinaigre dans un récipient adapté.','Appliquer brièvement sur la zone entartrée, sans laisser sécher.','Rincer abondamment à l’eau claire et sécher.'],
   safety:['Ne jamais mélanger avec Javel, détachants ou autres produits.','Interdit sur marbre, pierre calcaire, surfaces acidophobes ou appareil dont la notice l’exclut.','Ne pas utiliser pour le détartrage médical ou les appareils de santé.'],storage:'Préparation minute ; jeter le reste.',source:['ademe','ademe-sec'],tags:['Anticalcaire'],sensitivity:'house'
  },
  {
   id:'pate',equipment:{"essential":["Petit bol propre","Balance de cuisine pour mesurer les grammes","Cuillère ou petite spatule","Chiffon ou éponge douce non abrasive"],"optional":["Gants de ménage si peau fragile"],"container":"Bol de préparation uniquement : ne pas mettre en pot pour conserver.","note":"À utiliser immédiatement. Tester l’abrasion sur une zone cachée et jeter le reste."},title:'Pâte nettoyante au bicarbonate',category:'maison',type:'recette',icon:'bowl',level:'Facile',minutes:3,desc:'Petite quantité pour nettoyage ponctuel de surfaces résistantes.',base:75,yieldUnit:'g',
   ingredients:[['bicarbonate',50],['eau',25]],steps:['Mettre {{bicarbonate}} de bicarbonate dans un bol.','Ajouter progressivement {{eau}} d’eau jusqu’à obtenir une pâte.','Essayer sur une zone invisible puis frotter délicatement avec un chiffon doux.','Rincer soigneusement puis sécher ; jeter le reste.'],
   safety:['L’effet abrasif peut rayer certaines surfaces.','Éviter aluminium, surfaces fragiles et revêtements sensibles.','Ne pas associer à du vinaigre ou à un autre nettoyant.'],storage:'À utiliser aussitôt.',source:['ademe','ademe-sec'],tags:['2 ingrédients'],sensitivity:'house'
  },
  {
   id:'odeur',equipment:{"essential":["Coupelle stable, sèche, clairement identifiable","Balance de cuisine pour 50 g de bicarbonate"],"optional":["Petit récipient stable avec protection contre les renversements"],"container":"Coupelle à placer hors de portée des enfants et des animaux, sans contact avec les aliments.","note":"Ne pas utiliser un spray : le bicarbonate reste sec dans sa coupelle."},title:'Absorbeur d’odeurs pour poubelle',category:'maison',type:'recette',icon:'jar',level:'Facile',minutes:2,desc:'Petite coupelle sèche de bicarbonate, hors de portée.',base:50,yieldUnit:'g',
   ingredients:[['bicarbonate',50]],steps:['Verser {{bicarbonate}} de bicarbonate sec dans une coupelle stable.','Placer la coupelle dans un endroit sec et inaccessible aux enfants et animaux.','Remplacer si humide, souillé ou inefficace.','Jeter le produit usagé ; laver la coupelle.'],
   safety:['Ne remplace pas le nettoyage de la poubelle.','Ne pas laisser accessible aux enfants ou animaux.','Ne jamais mélanger avec des produits de désinfection.'],storage:'Conserver uniquement au sec ; remplacer s’il devient humide.',source:['ademe'],tags:['Sans parfum'],sensitivity:'house'
  },
  {
   id:'vaisselle',equipment:{"essential":["Porte-savon qui laisse sécher le savon","Éponge ou brosse à vaisselle propre","Eau potable pour un rinçage abondant"],"optional":["Gants de vaisselle en cas de mains sensibles"],"container":"Pas de bouteille à préparer : garder le savon solide au sec entre deux usages.","note":"Une passoire ou un flacon spray n’est pas nécessaire pour cette méthode."},title:'Vaisselle au savon de Marseille',category:'maison',type:'recette',icon:'dish',level:'Facile',minutes:2,desc:'Méthode à la demande, sans bouteille de liquide dilué à conserver.',base:5,yieldUnit:'g',
   ingredients:[['marseille',5]],steps:['Humidifier une éponge ou une brosse à vaisselle propre.','Prélever une petite quantité de savon de Marseille adapté à cet usage.','Laver la vaisselle, puis rincer abondamment à l’eau potable.','Laisser sécher le savon et l’éponge séparément.'],
   safety:['Vérifier que le savon choisi est adapté au lavage de la vaisselle.','Attention aux résidus sur verrerie et aux surfaces délicates.','Utiliser une brosse propre ; ne pas stocker un mélange aqueux artisanal.'],storage:'Le savon solide se conserve selon sa propre étiquette.',source:['ademe'],tags:['Zéro mélange'],sensitivity:'house'
  },
  {
   id:'lessive',equipment:{"essential":["Récipient résistant à la chaleur, de volume suffisant, réservé à l’entretien","Doseur gradué pour l’eau","Balance de cuisine et cuillère de dosage réservées à cette préparation","Spatule ou cuillère longue dédiée au ménage","Bidon propre avec bouchon, adapté au volume et clairement étiqueté","Gants de protection et lunettes contre les projections"],"optional":["Entonnoir à large ouverture dédié au ménage pour remplir le bidon","Passoire très fine dédiée au ménage si des résidus de copeaux restent visibles ; ne jamais verser de particules dans la machine","Étiquettes autocollantes et feutre indélébile"],"container":"Bidon solide, fermé et étiqueté « LESSIVE » ; jamais une bouteille de boisson. Garder hors de portée des enfants.","note":"Ne réutilisez pas pour cuisiner les ustensiles qui ont été en contact avec les cristaux de soude. Ne filtrez qu’à température sûre, sans éclaboussures."},title:'Lessive au savon de Marseille (essai)',category:'linge',type:'recette',icon:'laundry',level:'Intermédiaire',minutes:20,desc:'Petite préparation inspirée d’une recette de collectivité, à tester prudemment.',base:1000,yieldUnit:'ml',
   ingredients:[['eau',1000],['marseille',50],['bicarbonate',30],['cristaux',30]],steps:['Vérifier la notice de votre machine et la composition du savon avant de commencer.','Chauffer l’eau sans ébullition ; retirer du feu.','Incorporer les copeaux de savon en mélangeant jusqu’à dissolution.','Ajouter avec précaution le bicarbonate, puis les cristaux de soude ; éviter les poussières et les projections.','Laisser refroidir, transvaser dans un bidon propre étiqueté ; agiter doucement avant chaque usage.','Tester sur une petite charge de linge robuste et surveiller résidus et état de la machine.'],
   safety:['Porter des gants pour manipuler les cristaux de soude et éviter l’inhalation des poussières.','Ne convient pas aux lainages, à la soie ni nécessairement aux machines ; respecter leurs notices.','Les recettes au savon peuvent laisser des dépôts : commencer par une dose faible et interrompre en cas de résidus.','Ne pas ajouter d’huiles essentielles ou de produits blanchissants ; tenir loin des enfants.','La stabilité microbiologique et la durée de conservation ne sont pas établies : fabriquer une petite quantité, ne pas garder longtemps.','Pour peau sensible : commencer par une petite charge, bien rincer le linge puis surveiller une éventuelle réaction cutanée ; ne jamais appliquer la lessive concentrée sur la peau.'],
   storage:'Conservation non validée : faire une petite quantité, surveiller aspect/odeur et jeter au moindre changement.',source:['smitom','ademe-sec'],tags:['Recette pilote','Sans parfum'],sensitivity:'laundry'
  },
  {
   id:'detach',equipment:{"essential":["Savon de Marseille adapté au linge","Petit récipient d’eau ou robinet","Chiffon propre pour l’essai sur une couture"],"optional":["Petite brosse textile très souple si l’étiquette du vêtement l’autorise","Gants si peau sensible"],"container":"Pas de flacon nécessaire : utiliser directement le savon sur la tache.","note":"Tester d’abord sur un endroit discret et respecter les consignes du vêtement."},title:'Prétraitement des taches au savon',category:'linge',type:'recette',icon:'shirt',level:'Facile',minutes:5,desc:'Un geste localisé avant le lavage habituel.',base:2,yieldUnit:'g',
   ingredients:[['marseille',2]],steps:['Vérifier les indications de lavage du textile.','Tester sur une couture discrète.','Humidifier légèrement la tache et frotter très doucement avec un peu de savon.','Laisser agir quelques minutes sans laisser sécher puis rincer et laver selon l’étiquette.'],
   safety:['Éviter laine, soie et tissus délicats sans confirmation de compatibilité.','Ne pas frotter fortement : risque de décoloration ou d’usure.','Ce traitement ne garantit pas le retrait de toutes les taches.'],storage:'Usage immédiat.',source:['ademe'],tags:['Petit budget'],sensitivity:'laundry'
  },
  {
   id:'baume',equipment:{"essential":["Petit pot cosmétique propre, parfaitement sec et fermable (environ 50 ml)","Récipient résistant à la chaleur pour bain-marie","Casserole et eau pour le bain-marie (sans contact avec le produit)","Balance de précision pour les ingrédients solides","Doseur pour 10 ml d’huile et petite spatule propre","Étiquette : ingrédients et date de fabrication"],"optional":["Petite spatule souple pour transférer le baume","Thermomètre de cuisine propre pour mieux éviter la surchauffe"],"container":"Petit pot cosmétique sec et opaque si possible, avec couvercle. Ne pas ajouter d’eau.","note":"Le matériel et le pot doivent être très propres et totalement secs. Tester sur une petite zone de peau saine avant un usage plus large."},title:'Baume mains sans eau',category:'soins',type:'recette',icon:'cream',level:'Intermédiaire',minutes:15,desc:'Préparation courte à base de matières grasses, sans parfum.',base:40,yieldUnit:'g',
   ingredients:[['karite',30],['tournesol',10]],steps:['Nettoyer et sécher soigneusement le matériel et un petit pot.','Faire ramollir doucement {{karite}} de karité au bain-marie tiède, sans le surchauffer.','Retirer du feu, incorporer {{tournesol}} d’huile de tournesol et mélanger.','Transvaser dans le pot parfaitement sec et laisser prendre.','Étiqueter avec ingrédients et date de préparation.'],
   safety:['Ne pas utiliser en cas d’allergie à un composant, sur eczéma actif, lésion ou infection.','Effectuer un essai prudent sur une petite zone de peau saine ; observer 24 à 48 h.','Un test sans réaction ne garantit pas l’absence d’allergie.','Ne pas introduire d’eau dans le pot ; jeter si odeur ou aspect changent.'],storage:'Aucune durée sûre universelle : suivre les dates des matières premières, conserver au sec/frais, jeter au moindre changement.',source:['dgccrf','anses'],tags:['Sans eau','Sans parfum'],sensitivity:'skin'
  },
  {
   id:'levres',equipment:{"essential":["Petit pot cosmétique propre, parfaitement sec et fermable (environ 20 ml)","Bol résistant à la chaleur pour bain-marie","Casserole pour bain-marie","Balance de précision, idéalement au gramme ou mieux","Doseur pour 5 ml d’huile et petite spatule propre","Étiquette : ingrédients et date"],"optional":["Petit bec verseur ou mini spatule pour remplir le pot sans renverser"],"container":"Petit pot à baume lèvres, fermé et parfaitement sec ; ne pas utiliser de spray.","note":"Ne pas appliquer sur lèvres abîmées ou irritées. Les composants doivent être compatibles avec l’usage cosmétique."},title:'Baume à lèvres sans parfum',category:'soins',type:'recette',icon:'lip',level:'Intermédiaire',minutes:15,desc:'Baume anhydre pour lèvres intactes, sans huiles essentielles.',base:20,yieldUnit:'g',
   ingredients:[['karite',10],['cire',5],['tournesol',5]],steps:['Nettoyer puis sécher soigneusement le petit pot et les ustensiles.','Faire fondre doucement {{cire}} de cire avec {{karite}} de karité au bain-marie, sans surchauffer.','Hors du feu, ajouter {{tournesol}} d’huile de tournesol et mélanger.','Verser dans le pot sec, laisser refroidir et étiqueter.'],
   safety:['Éviter si allergie au karité, à la cire d’abeille ou aux autres composants.','Ne pas appliquer sur lèvres lésées, infectées ou très irritées.','Tester prudemment une petite quantité ; un test négatif ne garantit pas l’absence d’allergie.','Prévenir les brûlures lors de la fonte ; aucun arôme ni huile essentielle.'],storage:'Suivre la date limite des matières premières ; au sec, sans eau ; jeter si altération.',source:['dgccrf'],tags:['3 ingrédients','Sans parfum'],sensitivity:'skin'
  },
  {
   id:'huilecorps',equipment:{"essential":["Petit flacon cosmétique propre, complètement sec, de 30 à 50 ml","Doseur gradué permettant de mesurer 30 ml","Bouchon étanche et étiquette avec la date"],"optional":["Mini entonnoir sec et propre","Flacon-pompe adapté aux huiles pour doser sans toucher le contenu"],"container":"Petit flacon opaque ou à conserver à l’abri de la lumière. Pour ce produit, pas de spray aérosol.","note":"Éviter toute entrée d’eau dans le flacon. Surveiller l’odeur de rancissement et jeter si le produit change."},title:'Huile de corps simple',category:'soins',type:'recette',icon:'bottle',level:'Facile',minutes:2,desc:'Un seul ingrédient pour une application légère sur peau intacte.',base:30,yieldUnit:'ml',
   ingredients:[['tournesol',30]],steps:['Prendre un flacon propre et totalement sec.','Verser {{tournesol}} d’huile fraîche et étiqueter.','Appliquer quelques gouttes sur une zone de peau saine puis étaler.','Refermer pour éviter poussière et humidité.'],
   safety:['Éviter visage acnéique et zones inflammatoires si le produit aggrave les symptômes.','Ne pas appliquer sur lésions ou eczéma actif sans conseil médical.','Tester sur une petite zone de peau saine avant une application plus large.','Arrêter en cas d’irritation ; ne pas ajouter d’huiles essentielles.'],storage:'Conserver selon l’étiquette de l’huile, à l’abri de chaleur et lumière.',source:['dgccrf'],tags:['1 ingrédient','Sans parfum'],sensitivity:'skin'
  },
  {
   id:'masque',equipment:{"essential":["Balance de cuisine pour l’avoine","Petit moulin ou mixeur propre et sec pour réduire les flocons","Petit bol propre et cuillère","Doseur pour 15 ml d’eau"],"optional":["Passoire très fine ou petit tamis propre pour obtenir une poudre d’avoine plus homogène","Bandeau pour dégager les cheveux"],"container":"Bol de préparation seulement. À utiliser aussitôt et jeter entièrement le reste : pas de pot de conservation.","note":"La passoire très fine sert ici à tamiser l’avoine SÈCHE. Ne pas conserver le masque une fois l’eau ajoutée."},title:'Masque minute à l’avoine',category:'soins',type:'recette',icon:'bowl',level:'Facile',minutes:6,desc:'Préparation aqueuse à usage unique sur peau saine uniquement.',base:35,yieldUnit:'g',
   ingredients:[['avoine',20],['eau',15]],steps:['Réduire {{avoine}} de flocons d’avoine nature en poudre fine avec du matériel propre.','Ajouter {{eau}} d’eau juste avant l’application pour former une pâte souple.','Appliquer une fine couche sur peau saine et intacte en évitant yeux et bouche.','Rincer délicatement après quelques minutes sans laisser sécher complètement.','Jeter immédiatement toute pâte restante.'],
   safety:['Ne pas utiliser en cas d’allergie à l’avoine, d’eczéma actif ou de peau lésée.','Tester sur une petite zone et arrêter si irritation ; ce n’est pas un traitement dermatologique.','Ne jamais conserver ce mélange avec de l’eau.'],storage:'À utiliser immédiatement, ne jamais stocker.',source:['dgccrf'],tags:['Minute','Sans parfum'],sensitivity:'skin'
  },
  {
   id:'hotte', equipment:{essential:['Bol ou pichet de 350 ml réservé au ménage','Doseur gradué pour 5 ml','Chiffon microfibre propre','Chiffon humide pour rincer'], optional:['Gants de ménage','Brosse souple si le fabricant l’autorise'],container:'Dans un bol : préparation minute, sans stockage.',note:'Débrancher la hotte et intervenir uniquement sur surfaces froides et non électriques.'},
   title:'Dégraissage extérieur de hotte',category:'maison',type:'recette',icon:'spray',level:'Facile',minutes:8,desc:'Nettoyage doux de l’extérieur d’une hotte compatible.',base:305,yieldUnit:'ml',
   ingredients:[['eau',300],['savon_noir',5]],steps:['Couper l’alimentation de la hotte et attendre le refroidissement.','Mélanger {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans un récipient propre.','Passer un chiffon à peine humide sur les parties extérieures autorisées par la notice.','Essuyer avec un chiffon humidifié à l’eau claire puis sécher. Jeter la solution restante.'],
   safety:['Ne jamais pulvériser directement sur un appareil électrique, une commande ou un moteur.','Vérifier la notice pour inox, aluminium ou revêtements fragiles ; tester une zone discrète.','Ce nettoyage ne remplace pas le nettoyage des filtres selon la notice et ne désinfecte pas.'], storage:'Préparation minute à jeter après usage.',source:['ademe','ademe-sec'],tags:['Dégraissant','Sans parfum'],sensitivity:'house'
  },
  {
   id:'bacpoubelle',equipment:{essential:['Seau ou bac propre de 1 L','Doseur gradué pour 10 ml','Brosse dédiée au bac à déchets','Gants de ménage','Accès à de l’eau claire pour rincer'],optional:['Chiffon de séchage réservé au ménage'],container:'Mélange temporaire dans le seau ; ne rien conserver en flacon.',note:'Vider le bac avant de commencer, ne pas transférer le produit dans un récipient alimentaire.'},
   title:'Lavage d’un bac à poubelle',category:'maison',type:'recette',icon:'bowl',level:'Facile',minutes:10,desc:'Éliminer les salissures et odeurs courantes d’un bac lavable.',base:1010,yieldUnit:'ml',
   ingredients:[['eau',1000],['savon_noir',10]],steps:['Vider le bac et retirer les déchets solides.','Mélanger {{eau}} d’eau tiède avec {{savon_noir}} de savon noir ménager.','Frotter les surfaces lavables avec une brosse réservée à cet usage.','Rincer abondamment, vider l’eau sale selon les règles locales et laisser sécher avant de remettre un sac.'],
   safety:['Garder à l’écart de la zone de préparation des aliments.','Ne pas ajouter d’eau de Javel ni d’autre détergent.','Ce lavage ne garantit pas une désinfection ; porter des gants en cas de contact avec déchets souillés.'],storage:'Usage immédiat ; jeter le reste.',source:['ademe','ademe-sec'],tags:['Hygiène du bac','Simple'],sensitivity:'house'
  },
  {
   id:'frigoodeur',equipment:{essential:['Petite coupelle stable, sèche et propre','Balance de cuisine pour 40 g','Étiquette indiquant de ne pas consommer'],optional:['Petit récipient stable anti-renversement'],container:'Coupelle sèche à poser sans contact direct avec les aliments.',note:'Placer hors d’atteinte des jeunes enfants ; jeter et remplacer si humide ou sali.'},
   title:'Coupelle anti-odeurs au réfrigérateur',category:'maison',type:'recette',icon:'jar',level:'Facile',minutes:2,desc:'Une coupelle sèche pour aider à limiter les odeurs légères.',base:40,yieldUnit:'g',
   ingredients:[['bicarbonate',40]],steps:['Vérifier que le réfrigérateur est propre et rechercher la source éventuelle d’une mauvaise odeur.','Placer {{bicarbonate}} de bicarbonate sec dans une coupelle stable.','Poser la coupelle sans contact avec les aliments.','Remplacer si elle est humide, sale ou ne remplit plus son rôle ; jeter le contenu usagé.'],
   safety:['La coupelle n’assainit pas un réfrigérateur et ne remplace ni le nettoyage ni la conservation correcte des aliments.','Ne pas verser le bicarbonate sur les aliments ; ne pas laisser les enfants jouer avec.','En cas d’odeur persistante, vérifier les aliments avariés et l’état de l’appareil.'],storage:'À utiliser sec ; remplacer si humide ou souillé.',source:['ademe'],tags:['Sans parfum','Une matière'],sensitivity:'house'
  },
  {
   id:'huilecheveux',equipment:{essential:['Petit verre ou coupelle parfaitement propre et sec','Doseur précis pour 10 ml','Serviette destinée à protéger les vêtements'],optional:['Peigne à dents larges propre'],container:'Coupelle de préparation utilisée immédiatement ; aucun flacon à conserver.',note:'Appliquer uniquement sur les longueurs, jamais sur le cuir chevelu irrité ou lésé ; attention au sol glissant.'},
   title:'Soin avant-shampoing pour les longueurs',category:'hygiene',type:'recette',icon:'shampoo',level:'Facile',minutes:5,desc:'Très petite quantité d’huile sans parfum sur les pointes sèches ; ne lave pas les cheveux.',base:10,yieldUnit:'ml',
   ingredients:[['tournesol',10]],steps:['Verser {{tournesol}} d’huile de tournesol fraîche dans une coupelle propre et sèche.','Essayer une goutte sur une petite mèche, loin du cuir chevelu.','Appliquer progressivement sur les longueurs et les pointes uniquement ; ne pas en mettre sur le visage ni les racines.','Laver les cheveux avec un shampoing habituel adapté, puis rincer jusqu’à élimination de l’huile.'],
   safety:['Ce soin gras n’est pas un shampoing et ne traite aucune affection du cuir chevelu.','Éviter totalement en cas d’allergie connue ou sur peau lésée, irritée, avec eczéma actif.','Éviter yeux, visage et sol de douche qui pourrait devenir glissant ; arrêter si réaction.'],storage:'Préparation minute ; jeter le surplus de la coupelle.',source:['dgccrf'],tags:['Sans parfum','Avant-shampoing'],sensitivity:'skin'
  },
  {
  "id": "frigo_lavage",
  "title": "Nettoyage des clayettes du réfrigérateur",
  "category": "maison",
  "icon": "jar",
  "minutes": 12,
  "desc": "Nettoyage de parties amovibles lavables, avec rinçage soigneux.",
  "ingredients": [
    [
      "eau",
      1000
    ],
    [
      "savon_noir",
      5
    ]
  ],
  "steps": [
    "Éteindre ou sécuriser l’appareil si sa notice l’exige, puis sortir les aliments au frais.",
    "Préparer {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans une bassine.",
    "Laver les clayettes amovibles compatibles avec une lavette propre.",
    "Rincer à l’eau potable, sécher complètement et replacer les éléments. Jeter le bain de lavage."
  ],
  "safety": [
    "Ne jamais introduire la solution dans les ouvertures, circuits électriques ou joints fragiles.",
    "Ne pas confondre nettoyage et désinfection ; en cas de souillure particulière suivre les recommandations du fabricant.",
    "Ne mélanger aucun produit, et ne pas garder de mélange dilué."
  ],
  "tags": [
    "Cuisine",
    "Rinçage"
  ],
  "storage": "Usage immédiat ; jeter le mélange.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 1005,
  "equipment": {
    "essential": [
      "Bassine de 2 L réservée au ménage",
      "Doseur gradué pour 5 ml",
      "Lavette propre et chiffon de séchage"
    ],
    "optional": [
      "Gants de ménage",
      "Petite brosse douce compatible avec les clayettes"
    ],
    "container": "Bassine utilisée immédiatement ; aucun flacon à conserver.",
    "note": "Rincer à l’eau potable toutes les surfaces en contact avec les aliments."
  },
  "sensitivity": "house"
},
  {
  "id": "douche_paroi",
  "title": "Traces calcaires sur paroi de douche",
  "category": "maison",
  "icon": "shower",
  "minutes": 7,
  "desc": "Essai sur verre non traité et surfaces explicitement compatibles.",
  "ingredients": [
    [
      "eau",
      400
    ],
    [
      "vinaigre",
      100
    ]
  ],
  "steps": [
    "Vérifier la notice de la paroi : ne pas utiliser sur pierre naturelle, joints fragiles ou traitement anticalcaire.",
    "Mélanger {{eau}} d’eau et {{vinaigre}} de vinaigre blanc dans un bol.",
    "Appliquer avec une lavette sur une petite zone, sans pulvériser dans l’air.",
    "Rincer tout de suite et sécher avec une microfibre ; jeter le reste."
  ],
  "safety": [
    "Ne jamais utiliser après un produit chloré ou à base de Javel sans rinçage complet.",
    "Un vinaigre acide peut attaquer certains traitements de verre, joints, pierres ou métaux.",
    "Cette méthode est un essai de nettoyage, pas un désinfectant."
  ],
  "tags": [
    "Salle de bains",
    "Anticalcaire"
  ],
  "storage": "Usage immédiat.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 500,
  "equipment": {
    "essential": [
      "Bol ou pichet de 600 ml",
      "Doseur gradué de 100 ml",
      "Chiffon doux et microfibre sèche"
    ],
    "optional": [
      "Gants ménagers"
    ],
    "container": "Bol utilisé immédiatement, pas de préparation en bouteille à garder.",
    "note": "Tester seulement sur une petite zone parfaitement compatible."
  },
  "sensitivity": "house"
},
  {
  "id": "lavabo",
  "title": "Lavabo lavable au savon noir",
  "category": "maison",
  "icon": "drop",
  "minutes": 6,
  "desc": "Nettoyage doux d’un lavabo compatible, sans anticalcaire.",
  "ingredients": [
    [
      "eau",
      500
    ],
    [
      "savon_noir",
      5
    ]
  ],
  "steps": [
    "Vérifier la compatibilité du lavabo et de la robinetterie.",
    "Verser {{eau}} d’eau et {{savon_noir}} de savon noir dans un petit récipient.",
    "Nettoyer avec une éponge non abrasive, en évitant les pièces fragiles.",
    "Rincer complètement à l’eau claire puis sécher ; jeter la solution."
  ],
  "safety": [
    "Ne pas utiliser sur une matière dont la notice exclut les détergents.",
    "Un mélange savonneux ne détartre pas et ne désinfecte pas.",
    "Éviter tout mélange avec d’autres produits ménagers."
  ],
  "tags": [
    "Salle de bains",
    "Sans parfum"
  ],
  "storage": "Utiliser immédiatement.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 505,
  "equipment": {
    "essential": [
      "Récipient gradué de 600 ml",
      "Éponge non abrasive réservée au ménage",
      "Chiffon de séchage"
    ],
    "optional": [
      "Gants de ménage"
    ],
    "container": "Préparation minute dans le récipient ; aucun stockage.",
    "note": "Matériel ménager séparé des accessoires de toilette."
  },
  "sensitivity": "house"
},
  {
  "id": "plaque_froide",
  "title": "Plaque de cuisson froide : dégraissage doux",
  "category": "maison",
  "icon": "floor",
  "minutes": 7,
  "desc": "Pour l’extérieur des plaques autorisées par le fabricant.",
  "ingredients": [
    [
      "eau",
      300
    ],
    [
      "savon_noir",
      3
    ]
  ],
  "steps": [
    "Éteindre la plaque et attendre qu’elle soit complètement froide.",
    "Mélanger {{eau}} d’eau et {{savon_noir}} de savon noir dans un bol.",
    "Nettoyer la surface au chiffon à peine humide sans pénétrer dans les commandes ni ouvertures.",
    "Rincer au chiffon propre légèrement humide, sécher et jeter le reste."
  ],
  "safety": [
    "Ne jamais asperger ni inonder un appareil électrique.",
    "La notice prime : la méthode ne convient pas à tous les revêtements, notamment certaines vitrocéramiques.",
    "Éviter les éponges abrasives et ne pas confondre avec un nettoyage d’entretien de four pyrolyse."
  ],
  "tags": [
    "Cuisine",
    "Dégraissant"
  ],
  "storage": "À utiliser sans stockage.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 303,
  "equipment": {
    "essential": [
      "Petit bol de 350 ml",
      "Petite seringue doseuse ou doseur pour 3 ml",
      "Deux chiffons doux et secs"
    ],
    "optional": [
      "Gants de ménage"
    ],
    "container": "Bol utilisé immédiatement, aucun spray.",
    "note": "Appareil éteint, froid, sans contact avec éléments électriques."
  },
  "sensitivity": "house"
},
  {
  "id": "evier_inox",
  "title": "Évier en inox : lavage doux",
  "category": "maison",
  "icon": "dish",
  "minutes": 6,
  "desc": "Nettoyage courant de l’inox non traité.",
  "ingredients": [
    [
      "eau",
      500
    ],
    [
      "savon_noir",
      5
    ]
  ],
  "steps": [
    "Vérifier que la surface est bien en inox compatible.",
    "Préparer {{eau}} d’eau avec {{savon_noir}} de savon noir.",
    "Passer une éponge non abrasive dans le sens du brossage de l’inox.",
    "Rincer soigneusement à l’eau potable puis essuyer pour limiter les traces."
  ],
  "safety": [
    "Ne pas utiliser sur un métal ou un revêtement différent sans accord du fabricant.",
    "Éviter poudres abrasives et laine d’acier qui peuvent marquer la surface.",
    "Ce lavage n’est pas une désinfection."
  ],
  "tags": [
    "Cuisine",
    "Inox"
  ],
  "storage": "Préparation minute.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 505,
  "equipment": {
    "essential": [
      "Bol gradué de 600 ml",
      "Éponge douce non abrasive",
      "Chiffon microfibre sec"
    ],
    "optional": [
      "Gants de ménage"
    ],
    "container": "Pas de conservation : préparer dans un bol.",
    "note": "Rincer les surfaces en contact avec la vaisselle ou les aliments."
  },
  "sensitivity": "house"
},
  {
  "id": "carrelage_mural",
  "title": "Carrelage mural lavable",
  "category": "maison",
  "icon": "floor",
  "minutes": 10,
  "desc": "Lavage de carreaux émaillés compatibles, avec rinçage.",
  "ingredients": [
    [
      "eau",
      1000
    ],
    [
      "savon_noir",
      5
    ]
  ],
  "steps": [
    "Vérifier que le revêtement est lavable et n’est pas en pierre naturelle ou carreau poreux sensible.",
    "Préparer {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans un seau.",
    "Essuyer les carreaux à l’aide d’une lavette douce en évitant les prises et commandes.",
    "Rincer puis sécher ; jeter le liquide après utilisation."
  ],
  "safety": [
    "Éviter joints friables et infiltrations ; en cas de moisissures récurrentes traiter la cause de l’humidité.",
    "Ne pas pulvériser près de prises ou appareils électriques.",
    "Ne pas ajouter de Javel, vinaigre ou autres produits."
  ],
  "tags": [
    "Salle de bains",
    "Carrelage"
  ],
  "storage": "Jeter après usage.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 1005,
  "equipment": {
    "essential": [
      "Petit seau de 2 L",
      "Doseur gradué",
      "Lavette souple",
      "Chiffon de séchage"
    ],
    "optional": [
      "Gants ménagers"
    ],
    "container": "Dans un petit seau ; jeter après ménage.",
    "note": "Ne pas employer sur prises, boîtiers ou matériaux qui ne supportent pas l’eau."
  },
  "sensitivity": "house"
},
  {
  "id": "mobilier_jardin",
  "title": "Mobilier de jardin en plastique",
  "category": "maison",
  "icon": "home",
  "minutes": 15,
  "desc": "Nettoyage de mobilier lavable et stable à l’eau.",
  "ingredients": [
    [
      "eau",
      1000
    ],
    [
      "savon_noir",
      10
    ]
  ],
  "steps": [
    "Brosser à sec feuilles, poussières et terre sans les souffler dans l’air.",
    "Mélanger {{eau}} d’eau et {{savon_noir}} de savon noir dans un seau.",
    "Laver les surfaces de plastique compatibles avec une éponge douce.",
    "Rincer à l’eau claire, laisser sécher et jeter la solution."
  ],
  "safety": [
    "Essayer dans un coin caché ; éviter bois non traité, peinture fragile et textiles.",
    "Le sol peut devenir glissant ; empêcher animaux et enfants d’accéder au seau.",
    "Ne pas mélanger à de l’eau de Javel ou un autre détergent."
  ],
  "tags": [
    "Extérieur",
    "Sans parfum"
  ],
  "storage": "Usage immédiat.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 1010,
  "equipment": {
    "essential": [
      "Seau de 2 L",
      "Brosse douce ou éponge non abrasive",
      "Doseur gradué"
    ],
    "optional": [
      "Gants de ménage",
      "Chiffon de séchage"
    ],
    "container": "Seau temporaire, sans flacon de stockage.",
    "note": "Vider l’eau sale selon les consignes locales, pas dans les massifs."
  },
  "sensitivity": "house"
},
  {
  "id": "facades_meubles",
  "title": "Façades de meubles stratifiés",
  "category": "maison",
  "icon": "home",
  "minutes": 8,
  "desc": "Nettoyer les surfaces stratifiées lavables sans les détremper.",
  "ingredients": [
    [
      "eau",
      500
    ],
    [
      "savon_noir",
      3
    ]
  ],
  "steps": [
    "Lire la notice : le bois brut, les vernis fragiles et les matériaux poreux sont exclus.",
    "Préparer {{eau}} d’eau et {{savon_noir}} de savon noir.",
    "Humidifier légèrement un chiffon, nettoyer une petite zone en évitant chants et charnières.",
    "Passer un chiffon légèrement humide puis sécher aussitôt. Jeter le reste."
  ],
  "safety": [
    "Jamais d’inondation : l’eau peut faire gonfler les panneaux de meubles.",
    "Ne pas pulvériser sur charnières ou commandes électriques.",
    "Essayer sur une zone discrète et éviter les surfaces non compatibles."
  ],
  "tags": [
    "Mobilier",
    "Doux"
  ],
  "storage": "À utiliser sans stockage.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 503,
  "equipment": {
    "essential": [
      "Bol de 550 ml",
      "Petit doseur pour 3 ml",
      "Deux chiffons doux propres"
    ],
    "optional": [
      "Gants si peau fragile"
    ],
    "container": "Bol minute. Aucune bouteille de solution conservée.",
    "note": "Attention aux placages, vernis et matériaux absorbants."
  },
  "sensitivity": "house"
},
  {
  "id": "brosses_menage",
  "title": "Lavage des brosses de ménage",
  "category": "maison",
  "icon": "bowl",
  "minutes": 12,
  "desc": "Retirer les salissures des brosses lavables et laisser sécher.",
  "ingredients": [
    [
      "eau",
      1000
    ],
    [
      "savon_noir",
      5
    ]
  ],
  "steps": [
    "Enlever à sec les saletés et cheveux de la brosse, avec des gants si besoin.",
    "Mettre {{eau}} d’eau et {{savon_noir}} de savon noir dans une bassine réservée au ménage.",
    "Brosser et laver les parties autorisées par le fabricant.",
    "Rincer soigneusement, égoutter, sécher à l’air libre et jeter l’eau."
  ],
  "safety": [
    "Cette opération lave les brosses mais ne les désinfecte pas.",
    "Remplacer les brosses en mauvais état ou contaminées plutôt que les conserver.",
    "Ne pas immerger les parties bois ou motorisées si la notice l’interdit."
  ],
  "tags": [
    "Matériel",
    "Nettoyage"
  ],
  "storage": "Jeter la solution immédiatement.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 1005,
  "equipment": {
    "essential": [
      "Bassine de 2 L réservée au ménage",
      "Gants de ménage",
      "Petit doseur gradué",
      "Support d’égouttage"
    ],
    "optional": [
      "Petite brosse de nettoyage séparée"
    ],
    "container": "Bain de lavage temporaire ; pas de solution stockée.",
    "note": "Ne pas réutiliser cette bassine pour les soins de la peau."
  },
  "sensitivity": "house"
},
  {
  "id": "lavage_main_coton",
  "title": "Lavage à la main de coton résistant",
  "category": "linge",
  "icon": "shirt",
  "minutes": 15,
  "desc": "Petite bassine pour vêtements lavables au savon, puis rinçage abondant.",
  "ingredients": [
    [
      "eau",
      3000
    ],
    [
      "marseille",
      5
    ]
  ],
  "steps": [
    "Vérifier l’étiquette : réserver cette méthode au coton résistant lavable à la main.",
    "Mettre {{eau}} d’eau tiède dans une bassine puis y dissoudre soigneusement {{marseille}} de copeaux de savon de Marseille.",
    "Laver doucement une petite pièce sans trop frotter puis rincer plusieurs fois à l’eau claire.",
    "Presser sans tordre et sécher selon l’étiquette ; jeter le bain de lavage."
  ],
  "safety": [
    "Ne pas utiliser sur laine, soie, tissus techniques, teintes instables ou textiles indiquant nettoyage à sec.",
    "Un savon peut laisser des résidus : rincer abondamment et arrêter si inconfort cutané.",
    "Ne jamais utiliser de cristaux de soude dans cette recette destinée à une petite lessive manuelle."
  ],
  "tags": [
    "Coton",
    "À la main"
  ],
  "storage": "Usage immédiat.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 3005,
  "equipment": {
    "essential": [
      "Bassine de 4 L",
      "Balance pour mesurer 5 g de savon",
      "Eau claire pour plusieurs rinçages",
      "Gants si peau sensible"
    ],
    "optional": [
      "Filet de lavage pour petites pièces"
    ],
    "container": "Bassine temporaire ; solution non conservée.",
    "note": "Ne jamais transvaser dans un flacon de boisson."
  },
  "sensitivity": "laundry"
},
  {
  "id": "tache_terre",
  "title": "Tache de terre sur tissu robuste",
  "category": "linge",
  "icon": "shirt",
  "minutes": 8,
  "desc": "Brosser la terre sèche avant un prétraitement très local.",
  "ingredients": [
    [
      "marseille",
      3
    ]
  ],
  "steps": [
    "Laisser sécher totalement la terre sur le vêtement puis brosser doucement à l’extérieur.",
    "Vérifier l’étiquette et tester le savon de Marseille sur une couture cachée.",
    "Avec un peu d’eau, appliquer {{marseille}} de savon sur la tache sans frotter agressivement.",
    "Rincer et laver selon l’étiquette du textile ; ne pas ajouter de produits chimiques."
  ],
  "safety": [
    "Ne pas brosser le daim, les textiles délicats ou les traitements imperméables fragiles.",
    "Éviter de respirer la poussière si la terre est très sèche ; brosser doucement.",
    "Ne pas utiliser sur tissus pour lesquels le fabricant déconseille le savon."
  ],
  "tags": [
    "Taches",
    "Avant lavage"
  ],
  "storage": "Préparation locale à usage immédiat.",
  "source": [
    "ademe",
    "ademe-sec"
  ],
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "g",
  "base": 3,
  "equipment": {
    "essential": [
      "Brosse textile souple",
      "Savon de Marseille adapté au linge",
      "Point d’eau et chiffon propre"
    ],
    "optional": [
      "Gants si peau réactive"
    ],
    "container": "Aucune préparation à garder en flacon.",
    "note": "Brosser uniquement quand la terre est sèche, sans abîmer les fibres."
  },
  "sensitivity": "laundry"
},
  {
  "id": "soin_cuticules",
  "title": "Soin léger des cuticules",
  "category": "soins",
  "icon": "bottle",
  "minutes": 3,
  "desc": "Très peu d’huile sur le contour d’ongles sains et non irrités.",
  "ingredients": [
    [
      "tournesol",
      5
    ]
  ],
  "steps": [
    "Laver puis sécher les mains et s’assurer qu’aucune cuticule n’est blessée ou infectée.",
    "Déposer {{tournesol}} d’huile fraîche dans une petite coupelle parfaitement propre et sèche.",
    "Appliquer seulement quelques gouttes au contour d’ongles intacts, en évitant la peau lésée.",
    "Essuyer tout excédent et jeter l’huile restée dans la coupelle."
  ],
  "safety": [
    "Ne traite pas les infections ou inflammations des ongles ; consulter en cas de rougeur douloureuse ou de pus.",
    "Éviter en cas d’allergie connue ; un essai local ne garantit pas l’absence de réaction.",
    "Attention : l’huile peut rendre certains objets glissants."
  ],
  "tags": [
    "Ongles",
    "Sans parfum"
  ],
  "storage": "Préparation minute : ne pas conserver la coupelle.",
  "source": [
    "dgccrf"
  ],
  "sensitivity": "skin",
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "ml",
  "base": 5,
  "equipment": {
    "essential": [
      "Petite coupelle complètement sèche",
      "Doseur précis pour 5 ml",
      "Papier ou tissu propre pour l’excédent"
    ],
    "optional": [
      "Mini-pipette propre dédiée au soin"
    ],
    "container": "Coupelle utilisée immédiatement, sans flacon partagé.",
    "note": "Réservé aux ongles et aux peaux sains ; ne pas appliquer en cas d’eczéma actif."
  }
},
  {
  "id": "talons_karite",
  "title": "Soin des talons intacts au karité",
  "category": "soins",
  "icon": "cream",
  "minutes": 4,
  "desc": "Une petite application de beurre de karité cosmétique pur.",
  "ingredients": [
    [
      "karite",
      10
    ]
  ],
  "steps": [
    "Examiner les talons : ne pas appliquer sur crevasse ouverte, inflammation ou peau infectée.",
    "Prélever {{karite}} de karité cosmétique dans une coupelle propre avec une spatule sèche.",
    "Ramollir entre les doigts propres puis appliquer une couche fine sur la peau intacte.",
    "Essuyer l’excédent et mettre des chaussettes propres si souhaité. Jeter tout reste manipulé."
  ],
  "safety": [
    "Éviter en cas de sensibilité connue au produit ; faire un essai limité sur peau saine.",
    "Ne traite pas les crevasses profondes, l’eczéma ou les infections ; demander conseil si la peau est lésée.",
    "Le sol peut devenir glissant après application ; ne pas marcher pieds nus juste après."
  ],
  "tags": [
    "Pieds",
    "Sans eau"
  ],
  "storage": "Ne conserver que le produit d’origine selon sa notice.",
  "source": [
    "dgccrf"
  ],
  "sensitivity": "skin",
  "type": "recette",
  "level": "Facile",
  "yieldUnit": "g",
  "base": 10,
  "equipment": {
    "essential": [
      "Petit pot d’origine du karité cosmétique",
      "Spatule propre et sèche",
      "Petite coupelle sèche"
    ],
    "optional": [
      "Chaussettes propres"
    ],
    "container": "Conserver seulement le karité d’origine selon son étiquette ; ne pas remettre de produit manipulé dans le pot.",
    "note": "Cette fiche décrit un geste de soin simple, pas une crème formulée en laboratoire."
  }
},
  {
    "id": "miroir_eau",
    "title": "Miroir : eau et microfibre",
    "category": "maison",
    "type": "recette",
    "icon": "window",
    "level": "Facile",
    "minutes": 3,
    "desc": "Nettoyage léger sans parfum ni produit supplémentaire.",
    "base": 100,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        100
      ]
    ],
    "steps": [
      "Humidifier légèrement une microfibre propre avec {{eau}} d’eau.",
      "Essuyer le miroir, sans détremper ses bords.",
      "Terminer avec une seconde microfibre propre et sèche."
    ],
    "safety": [
      "Ne pas laisser l’eau pénétrer dans le cadre ou derrière le tain du miroir.",
      "Pour miroir chauffant ou traité, suivre la notice.",
      "Nettoyage seul, pas de désinfection."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe-air",
      "ademe-sec"
    ],
    "tags": [
      "Sans détergent",
      "Petit budget"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Deux microfibres propres, une humide et une sèche",
        "Petit récipient d’eau potable"
      ],
      "optional": [
        "Raclette de vitre adaptée et propre"
      ],
      "container": "Aucun contenant de stockage ; l’eau est utilisée immédiatement.",
      "note": "Ne pas utiliser d’éponge abrasive ni trop mouiller les bords."
    }
  },
  {
    "id": "poignees_portes",
    "title": "Poignées et interrupteurs : chiffon doux",
    "category": "maison",
    "type": "recette",
    "icon": "home",
    "level": "Facile",
    "minutes": 7,
    "desc": "Dépoussiérer les zones fréquemment touchées sans pulvériser.",
    "base": 252,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        250
      ],
      [
        "savon_noir",
        2
      ]
    ],
    "steps": [
      "Débrancher ou couper le courant si la notice le recommande ; ne jamais mouiller les mécanismes.",
      "Préparer {{eau}} d’eau et {{savon_noir}} de savon noir dans un bol.",
      "Passer un chiffon à peine humide sur les surfaces compatibles, sans pénétration de liquide.",
      "Essuyer avec un linge humidifié à l’eau claire puis sécher complètement."
    ],
    "safety": [
      "Ne jamais pulvériser sur prises, interrupteurs ou mécanismes électriques.",
      "Ne garantit pas une désinfection ; respecter la notice et tester un endroit discret."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Surfaces fréquemment touchées",
      "Sans spray"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Bol dédié au ménage",
        "Petit doseur gradué",
        "Deux microfibres dont une presque sèche"
      ],
      "optional": [
        "Gants si peau sensible"
      ],
      "container": "Bol utilisé pour la session uniquement.",
      "note": "Ne tremper ni interrupteur ni poignée électrique ; très peu de liquide."
    }
  },
  {
    "id": "plinthes",
    "title": "Plinthes lavables : entretien doux",
    "category": "maison",
    "type": "recette",
    "icon": "floor",
    "level": "Facile",
    "minutes": 10,
    "desc": "Nettoyer des plinthes résistantes et peintures compatibles.",
    "base": 1005,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        1000
      ],
      [
        "savon_noir",
        5
      ]
    ],
    "steps": [
      "Dépoussiérer les plinthes avec un chiffon sec.",
      "Mélanger {{eau}} d’eau tiède et {{savon_noir}} de savon noir ménager.",
      "Passer une lavette essorée sur une petite zone d’essai puis continuer si le revêtement résiste.",
      "Essuyer puis sécher ; vider le récipient après usage."
    ],
    "safety": [
      "Éviter bois brut, plinthes gonflées ou peintures fragiles.",
      "Ne pas mouiller les jointures ni laisser la solution stagner."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Entretien courant",
      "Maison"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Seau ou bassine de 2 L",
        "Chiffon sec et lavette humide",
        "Doseur gradué"
      ],
      "optional": [
        "Brosse souple pour les angles"
      ],
      "container": "Dans la bassine, sans mise en bouteille.",
      "note": "Utiliser un linge bien essoré pour limiter l’humidité."
    }
  },
  {
    "id": "joints_ceramique",
    "title": "Joints de carrelage : brossage doux",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 12,
    "desc": "Retirer les salissures ordinaires sur joints minéraux compatibles.",
    "base": 255,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        250
      ],
      [
        "savon_noir",
        5
      ]
    ],
    "steps": [
      "Préparer {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans une coupelle.",
      "Brosser délicatement une petite zone test de joint à l’aide d’une brosse souple.",
      "Rincer avec un chiffon humide à l’eau claire.",
      "Sécher et renouveler uniquement si nécessaire."
    ],
    "safety": [
      "Ne traite pas les moisissures et ne désinfecte pas ; en cas de moisissure persistante, rechercher la cause d’humidité.",
      "Ne pas abraser joints friables, silicone ou pierres sensibles.",
      "Ne jamais mélanger des produits de nettoyage."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Salle de bains",
      "Brosse douce"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Bol ou petit seau",
        "Brosse à poils souples réservée aux joints",
        "Chiffon humide pour le rinçage"
      ],
      "optional": [
        "Gants de ménage"
      ],
      "container": "Bol pour une seule utilisation.",
      "note": "Éviter les brosses métalliques et les joints dégradés."
    }
  },
  {
    "id": "baignoire_email",
    "title": "Baignoire compatible : lavage doux",
    "category": "maison",
    "type": "recette",
    "icon": "drop",
    "level": "Facile",
    "minutes": 8,
    "desc": "Lavage courant d’une baignoire lavable sans détartrant acide.",
    "base": 1005,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        1000
      ],
      [
        "savon_noir",
        5
      ]
    ],
    "steps": [
      "Vérifier la compatibilité du matériau et préparer {{eau}} d’eau tiède avec {{savon_noir}} de savon noir.",
      "Nettoyer doucement avec une lavette non abrasive.",
      "Rincer abondamment à l’eau claire.",
      "Sécher les rebords et vider la bassine."
    ],
    "safety": [
      "Émail ancien, acrylique et revêtements antidérapants exigent des précautions spécifiques : suivre la notice.",
      "Attention au risque de glissade ; bien rincer toute trace savonneuse.",
      "Ne pas mélanger avec du détartrant, de l’eau de Javel ou d’autres produits."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Salle de bains",
      "Sans acide"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Petite bassine",
        "Lavette douce non abrasive",
        "Doseur de 5 ml"
      ],
      "optional": [
        "Gants de ménage"
      ],
      "container": "À utiliser dans la bassine puis jeter.",
      "note": "Rincer soigneusement pour éviter un fond glissant."
    }
  },
  {
    "id": "microondes",
    "title": "Micro-ondes : nettoyage intérieur à froid",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 9,
    "desc": "Entretien simple d’une cavité compatible, appareil débranché.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "savon_noir",
        3
      ]
    ],
    "steps": [
      "Débrancher l’appareil et attendre qu’il soit froid.",
      "Mélanger {{eau}} d’eau et {{savon_noir}} de savon noir dans un récipient.",
      "Sur les parois compatibles, passer une lavette légèrement humide sans toucher les aérations ni les composants sensibles.",
      "Rincer au chiffon humidifié d’eau potable, puis sécher avant de rebrancher."
    ],
    "safety": [
      "Ne jamais mettre le récipient ou la préparation en chauffe pour ce nettoyage.",
      "Ne pas arroser les commandes, ouïes ou composants ; respecter la notice.",
      "Ce procédé ne désinfecte pas."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Cuisine",
      "Appareil électrique"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Bol de préparation",
        "Doseur gradué",
        "Deux lavettes propres non abrasives"
      ],
      "optional": [
        "Gants de ménage"
      ],
      "container": "Solution minute, sans stockage.",
      "note": "Nettoyer appareil froid et débranché ; ne pas chauffer le mélange."
    }
  },
  {
    "id": "grilles_four",
    "title": "Grilles de four amovibles : lavage doux",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 15,
    "desc": "Lavage ponctuel de grilles compatibles, entièrement refroidies.",
    "base": 1010,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        1000
      ],
      [
        "savon_noir",
        10
      ]
    ],
    "steps": [
      "Retirer la grille seulement lorsque le four est froid et éteint.",
      "Préparer {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans une bassine.",
      "Nettoyer la grille avec une brosse douce ou un chiffon sur un support protégé.",
      "Rincer complètement puis sécher avant remise en place."
    ],
    "safety": [
      "Suivre la notice du four ; ne pas abîmer un traitement antiadhésif ou chromé.",
      "Ne jamais appliquer de produit sur les résistances ou parties électriques.",
      "Porter des gants en cas de bords métalliques coupants."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Four",
      "Dégraissage doux"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Grande bassine adaptée à la grille",
        "Doseur gradué",
        "Brosse douce et éponge non abrasive"
      ],
      "optional": [
        "Gants de protection adaptés"
      ],
      "container": "Bain de lavage à éliminer après usage.",
      "note": "Ne pas employer de laine d’acier sur grille traitée."
    }
  },
  {
    "id": "carafe_verre",
    "title": "Carafe en verre : traces de calcaire",
    "category": "maison",
    "type": "recette",
    "icon": "drop",
    "level": "Facile",
    "minutes": 8,
    "desc": "Détartrage ponctuel de verre ordinaire, sans décor fragile.",
    "base": 500,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        400
      ],
      [
        "vinaigre",
        100
      ]
    ],
    "steps": [
      "Vérifier que la carafe n’a ni décor métallique, ni cristal, ni revêtement sensible.",
      "Mélanger {{eau}} d’eau et {{vinaigre}} de vinaigre blanc dans la carafe.",
      "Laisser agir brièvement sur les traces légères, sans bouchon hermétique.",
      "Vider, rincer plusieurs fois à l’eau potable puis sécher."
    ],
    "safety": [
      "Jamais avec eau de Javel ou autre nettoyant, même utilisé juste avant sans rinçage.",
      "Ne pas utiliser sur cristal, pierres décoratives, métaux ni matériaux incompatibles.",
      "Rincer minutieusement avant utilisation alimentaire."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Anticalcaire",
      "Verre"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Verre doseur",
        "Carafe en verre ordinaire compatible",
        "Accès à l’eau potable pour rinçage"
      ],
      "optional": [
        "Brosse souple pour carafe"
      ],
      "container": "Mélanger dans la carafe, ne pas stocker.",
      "note": "N’utiliser qu’un vinaigre ménager dilué, de concentration usuelle et clairement étiquetée."
    }
  },
  {
    "id": "tasse_ceramique",
    "title": "Tasse en céramique : traces de thé",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 7,
    "desc": "Retrait doux des taches superficielles sur céramique non décorée.",
    "base": 20,
    "yieldUnit": "g",
    "ingredients": [
      [
        "bicarbonate",
        10
      ],
      [
        "eau",
        10
      ]
    ],
    "steps": [
      "Mettre {{bicarbonate}} de bicarbonate de soude ménager et {{eau}} d’eau dans une coupelle.",
      "Déposer une petite noisette de pâte sur la trace avec une éponge douce.",
      "Frotter sans insister ; rincer très abondamment à l’eau potable.",
      "Sécher et jeter le reste de la pâte."
    ],
    "safety": [
      "Ne pas utiliser sur décors peints, dorures, matériau poreux ou émail abîmé.",
      "Le bicarbonate est légèrement abrasif : tester sans frotter fortement.",
      "Bicarbonate ménager uniquement pour nettoyer, jamais à consommer."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Tasse",
      "Bicarbonate"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Balance de cuisine",
        "Petit bol",
        "Éponge douce non abrasive"
      ],
      "optional": [
        "Gants pour peau sensible"
      ],
      "container": "Pâte faite sur place ; ne pas conserver.",
      "note": "Rinçage alimentaire minutieux après usage."
    }
  },
  {
    "id": "planche_plastique",
    "title": "Planche à découper en plastique : lavage",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 8,
    "desc": "Nettoyage courant d’une planche lavable, après utilisation.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "savon_noir",
        3
      ]
    ],
    "steps": [
      "Retirer les résidus alimentaires.",
      "Mélanger {{eau}} d’eau tiède et {{savon_noir}} de savon noir dans une bassine.",
      "Nettoyer la planche plastique intacte avec une lavette propre.",
      "Rincer abondamment à l’eau potable et laisser sécher complètement."
    ],
    "safety": [
      "Ne pas confondre lavage et désinfection ; suivre les exigences d’hygiène alimentaire, surtout après viande crue.",
      "Une planche profondément rayée doit être remplacée.",
      "Éviter les produits parfumés ; ne pas mélanger plusieurs nettoyants."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "anses-hygiene",
      "ademe-sec"
    ],
    "tags": [
      "Cuisine",
      "Rinçage obligatoire"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Bassine et lavette propres",
        "Doseur gradué",
        "Zone de séchage propre"
      ],
      "optional": [
        "Brosse souple réservée aux planches"
      ],
      "container": "Préparer le bain puis jeter après usage.",
      "note": "Pour une utilisation alimentaire, bien éliminer tout résidu de savon."
    }
  },
  {
    "id": "peigne_plastique",
    "title": "Peignes en plastique : lavage des résidus",
    "category": "hygiene",
    "type": "recette",
    "icon": "shampoo",
    "level": "Facile",
    "minutes": 8,
    "desc": "Entretien d’accessoires capillaires lavables, sans soin appliqué sur la peau.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "marseille",
        3
      ]
    ],
    "steps": [
      "Retirer les cheveux retenus par le peigne.",
      "Mélanger {{eau}} d’eau tiède avec {{marseille}} de copeaux de savon de Marseille sans parfum, complètement dissous.",
      "Nettoyer le peigne plastique avec une petite brosse douce.",
      "Rincer abondamment puis sécher avant réutilisation."
    ],
    "safety": [
      "Ne pas immerger un accessoire en bois, électrique ou comportant de la colle.",
      "Ne pas utiliser pour traiter une infestation de poux ou une infection.",
      "Ne pas appliquer le bain préparé sur cuir chevelu ou visage."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Accessoires",
      "Sans parfum"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Petit bol",
        "Brosse souple dédiée",
        "Doseur/mini-balance pour savon"
      ],
      "optional": [
        "Petite passoire pour retenir les débris avant élimination"
      ],
      "container": "Bol, utilisé pendant le nettoyage puis jeté.",
      "note": "Bien dissoudre les copeaux, rincer puis sécher entièrement."
    }
  },
  {
    "id": "brosse_maquillage",
    "title": "Pinceaux cosmétiques synthétiques : rinçage",
    "category": "hygiene",
    "type": "recette",
    "icon": "sparkles",
    "level": "Facile",
    "minutes": 12,
    "desc": "Nettoyage limité des manches et fibres compatibles, sans désinfection.",
    "base": 252,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        250
      ],
      [
        "marseille",
        2
      ]
    ],
    "steps": [
      "Vérifier la notice du pinceau et exclure les modèles non lavables.",
      "Dissoudre {{marseille}} de savon de Marseille sans parfum dans {{eau}} d’eau tiède.",
      "Laver doucement uniquement les poils synthétiques, en gardant la virole et le manche aussi secs que possible.",
      "Rincer abondamment les fibres puis laisser sécher à plat, sans humidifier la colle."
    ],
    "safety": [
      "Ne pas partager le matériel entre personnes en cas d’infection cutanée ou oculaire.",
      "Ce lavage ne constitue pas une stérilisation ; remplacer un accessoire abîmé ou présentant une odeur suspecte.",
      "Ne pas immerger les manches ou tremper la colle ; suivre les recommandations de la marque."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Accessoires beauté",
      "Entretien"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Petit bol",
        "Serviette propre pour séchage à plat",
        "Balance précise"
      ],
      "optional": [
        "Tapis silicone souple dédié aux pinceaux"
      ],
      "container": "Préparation minute ; jeter l’eau de lavage.",
      "note": "Éviter un stockage humide des pinceaux."
    }
  },
  {
    "id": "chaussures_toile",
    "title": "Chaussures en toile : nettoyage localisé",
    "category": "linge",
    "type": "recette",
    "icon": "shirt",
    "level": "Facile",
    "minutes": 12,
    "desc": "Pour les zones textiles lavables, sans tremper la chaussure entière.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "marseille",
        3
      ]
    ],
    "steps": [
      "Dépoussiérer les chaussures sèches.",
      "Dissoudre {{marseille}} de savon de Marseille dans {{eau}} d’eau tiède.",
      "Faire un essai discret puis tamponner délicatement une petite zone avec un chiffon.",
      "Retirer les résidus avec un linge humide et laisser sécher à l’air loin d’une source de chaleur."
    ],
    "safety": [
      "Ne pas employer sur cuir, daim, tissu imperméabilisé ou chaussure non lavable.",
      "Une humidification importante peut décoller les semelles et décolorer les tissus.",
      "Essayer sur une zone cachée et ne pas promettre un détachage complet."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Textile",
      "Chaussures"
    ],
    "sensitivity": "laundry",
    "equipment": {
      "essential": [
        "Bol de préparation",
        "Chiffon doux et brosse souple",
        "Balance pour 3 g de savon"
      ],
      "optional": [
        "Vieux chiffon de protection"
      ],
      "container": "Bol temporaire, pas de conservation.",
      "note": "Ne pas immerger la chaussure ; respecter la notice."
    }
  },
  {
    "id": "lacets_coton",
    "title": "Lacets en coton blanc : lavage à la main",
    "category": "linge",
    "type": "recette",
    "icon": "shirt",
    "level": "Facile",
    "minutes": 10,
    "desc": "Petit bain de lavage pour lacets ordinaires amovibles.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "marseille",
        3
      ]
    ],
    "steps": [
      "Retirer les lacets des chaussures.",
      "Préparer {{eau}} d’eau tiède avec {{marseille}} de savon de Marseille sans parfum dissous.",
      "Laver les lacets coton lavables doucement et sans brossage brutal.",
      "Rincer jusqu’à disparition du savon et laisser sécher complètement."
    ],
    "safety": [
      "Éviter lacets en cuir, matières teintes fragiles ou modèles avec traitement spécifique.",
      "Laver séparément des tissus susceptibles de déteindre.",
      "En cas de peau très sensible, bien rincer avant réutilisation."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Petit linge",
      "Sans parfum"
    ],
    "sensitivity": "laundry",
    "equipment": {
      "essential": [
        "Petit récipient",
        "Doseur et mini-balance",
        "Linge propre pour séchage"
      ],
      "optional": [
        "Brosse souple"
      ],
      "container": "Bain de lavage à jeter après usage.",
      "note": "Laisser sécher à l’air libre, ne pas conserver la solution."
    }
  },
  {
    "id": "sac_coton",
    "title": "Sac réutilisable en coton : lavage manuel",
    "category": "linge",
    "type": "recette",
    "icon": "shirt",
    "level": "Facile",
    "minutes": 15,
    "desc": "Nettoyage occasionnel d’un sac textile explicitement lavable.",
    "base": 2005,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        2000
      ],
      [
        "marseille",
        5
      ]
    ],
    "steps": [
      "Vérifier l’étiquette de lavage et vider complètement le sac.",
      "Dissoudre {{marseille}} de copeaux de savon de Marseille dans {{eau}} d’eau tiède.",
      "Laver délicatement l’intérieur et l’extérieur du sac en coton résistant.",
      "Rincer soigneusement puis sécher entièrement avant de ranger."
    ],
    "safety": [
      "Ne pas utiliser sur sac plastifié, collé, cuir ou avec impression fragile.",
      "Ce lavage ne désinfecte pas ; ne pas mélanger avec désinfectants ou Javel.",
      "Un sac transportant de la viande crue souillée peut nécessiter des mesures d’hygiène adaptées."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "ademe",
      "ademe-sec"
    ],
    "tags": [
      "Réutilisable",
      "Coton"
    ],
    "sensitivity": "laundry",
    "equipment": {
      "essential": [
        "Bassine d’au moins 3 L",
        "Balance pour copeaux",
        "Espace de séchage propre"
      ],
      "optional": [
        "Gants ménagers si nécessaires"
      ],
      "container": "Bassine uniquement, usage immédiat.",
      "note": "Ne pas ranger le sac humide."
    }
  },
  {
    "id": "tapette_inox",
    "title": "Écumoire inox : entretien courant",
    "category": "maison",
    "type": "recette",
    "icon": "bowl",
    "level": "Facile",
    "minutes": 7,
    "desc": "Nettoyage d’un ustensile amovible en inox compatible.",
    "base": 503,
    "yieldUnit": "ml",
    "ingredients": [
      [
        "eau",
        500
      ],
      [
        "marseille",
        3
      ]
    ],
    "steps": [
      "Retirer les résidus alimentaires de l’ustensile refroidi.",
      "Dissoudre {{marseille}} de savon de Marseille dans {{eau}} d’eau tiède.",
      "Laver toutes les surfaces avec une éponge douce adaptée à l’inox.",
      "Rincer abondamment à l’eau potable et laisser sécher."
    ],
    "safety": [
      "Ne pas utiliser sur accessoires électriques ou à poignées en matériaux fragiles.",
      "Une éponge abrasive peut rayer l’inox poli.",
      "Ce mélange ne désinfecte pas ; respecter les exigences d’hygiène alimentaire."
    ],
    "storage": "Usage immédiat ; jeter la solution restante.",
    "source": [
      "anses-hygiene",
      "ademe"
    ],
    "tags": [
      "Cuisine",
      "Inox"
    ],
    "sensitivity": "house",
    "equipment": {
      "essential": [
        "Bol ou bassine",
        "Éponge douce",
        "Doseur et balance"
      ],
      "optional": [
        "Chiffon de séchage"
      ],
      "container": "Préparation à jeter après le lavage.",
      "note": "Ne pas utiliser sur revêtements antiadhésifs endommagés."
    }
  },
  {
    "id": "desinfection",
    "title": "Nettoyer n’est pas désinfecter",
    "category": "maison",
    "type": "guide",
    "icon": "shield",
    "tags": [
      "Désinfection",
      "Hygiène",
      "Microbes"
    ],
    "desc": "Quand un produit ménager maison ne suffit pas.",
    "guide": "Le vinaigre, le bicarbonate et le savon noir servent surtout à nettoyer. Ils ne doivent pas être présentés comme des désinfectants validés. En cas de vomissements, diarrhée, maladie contagieuse, souillure biologique ou recommandation sanitaire particulière, appliquer un protocole adapté et choisir un produit autorisé pour cet usage. Ne jamais mélanger des produits, surtout Javel et vinaigre.",
    "safety": [
      "Ne jamais mélanger de Javel avec du vinaigre, des acides, de l’ammoniaque ou un autre produit.",
      "Ne pas chercher à fabriquer des désinfectants maison à base de mélanges chimiques.",
      "Nettoyer et rincer les surfaces alimentaires ; respecter les notices et recommandations sanitaires."
    ],
    "source": [
      "anses-hygiene",
      "ademe-sec"
    ],
    "sensitivity": "none"
  },
  {
   id:'gel',title:'Gel douche : choisir une base sûre',category:'hygiene',type:'guide',icon:'shower',desc:'Comprendre les bases lavantes sans parfum et leurs limites.',
   guide:'Pour la V1, aucune recette de gel douche aqueux conservé n’est proposée. Les produits contenant de l’eau exigent une maîtrise du pH, des conservateurs et une vérification de la stabilité microbiologique. Choisir une base lavante prête à l’emploi adaptée à sa peau et suivre sa notice, sans dilution ni ajout improvisé.',
   safety:['Peau atopique ou eczéma : demander conseil au professionnel de santé ; privilégier les formules adaptées sans parfum.','Toujours tester prudemment un nouveau produit, sauf allergie connue : dans ce cas, l’éviter.'],source:['dgccrf'],sensitivity:'skin'
  },
  {
   id:'shampoing',tags:['Shampooing','Cheveux'],title:'Shampoing : formulation en étude',category:'hygiene',type:'guide',icon:'shampoo',desc:'Pourquoi une base adaptée vaut mieux qu’un mélange improvisé.',
   guide:'Un shampoing efficace doit nettoyer sans agresser le cuir chevelu et rester microbiologiquement sûr. La V1 propose un guide de choix d’un shampoing sans parfum approprié, plutôt qu’une préparation maison non évaluée. Nous ajouterons des recettes après vérification de formulation et conservation.',
   safety:['En cas de dermatite, de cuir chevelu lésé ou d’allergie, demander conseil avant un nouveau soin.','Ne pas verser de vinaigre pur ni d’huiles essentielles sur le cuir chevelu.'],source:['dgccrf','anses'],sensitivity:'skin'
  },
  {
   id:'deo',title:'Déodorant : précautions',category:'hygiene',type:'guide',icon:'bottle',desc:'Éviter les recettes irritantes au bicarbonate sur les aisselles.',
   guide:'La peau des aisselles est fragile, particulièrement après le rasage. Les recettes riches en bicarbonate et huiles essentielles peuvent être irritantes. Pour cette V1, privilégier un déodorant sans parfum prêt à l’emploi, choisi selon ses sensibilités. Une formule maison sera ajoutée uniquement si elle est suffisamment documentée.',
   safety:['Ne pas appliquer de produit irritant après rasage ou sur peau abîmée.','Un test cutané local n’exclut pas une allergie ultérieure.'],source:['anses','dgccrf'],sensitivity:'skin'
  },
  {
   id:'dentifrice',title:'Dentifrice : garder le fluor',category:'hygiene',type:'guide',icon:'tooth',desc:'Un dentifrice maison ne remplace pas un dentifrice fluoré.',
   guide:'Pour protéger l’émail et prévenir les caries, l’Assurance Maladie recommande un dentifrice fluoré adapté à l’âge. Les mélanges maison au bicarbonate, charbon ou huiles essentielles ne sont pas des substituts démontrés. Nous n’en proposons pas comme dentifrices alternatifs.',
   safety:['Respecter les recommandations de fluor selon l’âge.','Demander conseil au dentiste en cas de risque particulier de caries.'],source:['ameli'],sensitivity:'none'
  },
  {
   id:'solaire',tags:['Crème solaire','UV','SPF'],title:'Protection solaire : pas de recette maison',category:'soins',type:'guide',icon:'sun',desc:'Une protection UV efficace nécessite des tests spécialisés.',
   guide:'Nous ne proposons aucune crème solaire faite maison. Un indice SPF ne peut pas être déterminé par intuition ; utiliser une protection solaire commercialisée et testée, choisie selon sa peau et les conditions d’exposition.',
   safety:['Ne pas utiliser une huile ou un mélange maison comme protection UV.'],source:['dgccrf'],sensitivity:'skin'
  }
 ]
};
