export const projects = [
  {
    id: 1,
    name: 'Argent Bank',
    url: 'argent-bank',
    mainIllustration: 'project-2-illustration.png',
    illustration2: 'project-2-illustration-1.jpeg',
    illustration3: 'project-2-illustration-2.png',
    illustration4: 'project-2-illustration-3.png',
    illustration5: 'project-2-illustration-4.png',
    description:
      "Le projet consiste à créer une application web React avec un système d'authentification pour les utilisateurs de la banque Argent Bank. L'interface est organisée en composants modulables et réutilisables",
    explication1:
      "La première consiste à créer l'application web complète et responsive avec React, utiliser Redux pour gérer le state de l'application, et permettre à l'utilisateur de visiter la page d'accueil, de se connecter au système (et qu'on se souvienne de lui), de se déconnecter, de visualiser les informations relatives à son propre profil et de modifier son profil en conservant les données dans la base de données. Une API nécessaire a déjà été créée par les ingénieurs back-end de la banque, et toute sa documentation Swagger est aussi disponible.",
    explication2:
      "L'utilisateur a accès à son profil, il peut visualiser ses comptes bancaires et plus tard il pourra voir les transactions qui y sont associés. Il peut aussi modifier ses informations personnelles.",
    explication3:
      "Pendant que l'application est toujours en phase de conception, la banque souhaite avoir des propositions d'API proposées pour les transactions. Il est demandé de fournir un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. Le document doit contenir des informations telles que la méthode HTTP, la route, la description de ce à quoi correspond l'endpoint, les paramètres possibles et les différentes réponses avec les codes de réponse correspondants.",
    github: 'https://github.com/simontessard/ArgentBank-OCR',
    skills: [
      "S'authentifier à une API",
      "Implémenter un gestionnaire d'état dans une application React",
      'Intéragir avec une API',
      'Modéliser une API',
    ],
    categorie: 'Openclassrooms',
    date: 2023,
    previousProject: 'les-petits-plats',
    nextProject: 'sportsee',
  },
  {
    id: 2,
    name: 'SportSee',
    url: 'sportsee',
    mainIllustration: 'project-3-illustration.png',
    illustration2: 'project-3-illustration-1.png',
    illustration3: 'project-3-illustration-2.png',
    illustration4: 'project-3-illustration-3.png',
    description:
      "Le projet consiste à développer un tableau de bord d'analytics avec React. L'objectif est d'afficher différents graphiques représentants les informations sportives de l'utilisateur précisé. Les différentes étapes du projet sont documentées par des User Stories. Le travail effectué a été documenté par un Readme, de la JSDoc et des proptypes.",
    explication1:
      "L'interface a été créée de zéro à partir d'une maquette Figma et de données mockées dans un premier temps, le tout en utilisant la librairie Recharts pour les multiples graphiques qui devaient être intégré (BarChart, RadialChart, LineChart, PieChart)",
    explication2:
      'Un backend utilisant NodeJS était fourni, permettant ainsi de récupérer les données via des calls Fetch une fois le front réalisé. Ces données sont formatées de façon organisée pour pouvoir les modéliser plus facilement et ainsi alimenter les graphiques de manière optimisée.',
    github: 'https://github.com/simontessard/SportSee-OCR',
    skills: [
      "Assurer la qualité des données d'une application",
      "Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript",
      'Interagir avec un service Web',
    ],
    categorie: 'Openclassrooms',
    date: 2023,
    previousProject: 'argent-bank',
    nextProject: 'kasa',
  },
  {
    id: 3,
    name: 'Kasa',
    url: 'kasa',
    mainIllustration: 'project-4-illustration.png',
    illustration2: 'project-4-illustration-2.jpg',
    illustration3: 'project-4-illustration-3.png',
    illustration4: 'project-4-illustration-1.png',
    illustration5: 'project-4-illustration-5.png',
    description:
      "Kasa, un site anciennement codé en ASP.NET avec un code legacy, prévoit une refonte totale vers une stack JavaScript (NodeJS côté Back-end, React côté Front-end). Le designer a fourni de nouvelles maquettes. L'objectif est cette fois de développer le projet en React en suivant les maquettes Figma, d'utiliser un fichier JSON pour les données en l'absence du Back-End. Le designer précise quelques fonctionnalités, comme le carousel d'images et comment se comportent les listes déroulantes.",
    explication1:
      "Cette application responsive s'articule autour de plusieurs pages : une page présentant tous les logements disponibles, une page par logement où on retrouvera sa description, sa note, son propriétaire, sa localisation, des tags et toutes les informations nécessaires et une page « À propos ».",
    explication2:
      "Un des objectif du projet était aussi de créer des composants React à la fois responsives mais aussi réuitilisables facilement sur les différentes pages. Sur la page « Logement » en version desktop on y retrouve un carousel d'images créé de zéro mais aussi des listes déroulantes réutilisées sur la page « À propos ».",
    explication3: 'La page « À propos » en version mobile avec les différentes listes déroulantes.',
    github: 'https://github.com/simontessard/Kasa-OCR',
    skills: [
      'Créer des composants avec React',
      "Développer les routes d'une application web avec React Router",
      'Initialiser une application web avec un framework',
    ],
    categorie: 'Openclassrooms',
    date: 2022,
    previousProject: 'sportsee',
    nextProject: 'les-petits-plats',
  },
  {
    id: 4,
    name: 'Les Petits Plats',
    url: 'les-petits-plats',
    mainIllustration: 'project-5-illustration-1.png',
    illustration2: 'project-5-illustration.png',
    illustration3: 'project-5-illustration-4.png',
    illustration4: 'project-5-illustration-3.png',
    description:
      "C'est un projet de site de recettes de cuisine similaire à celui de Marmiton. L'application affiche des recettes à partir d'un fichier Javascript contenant un tableau JSON. On peut rechercher des recettes grâce au champs de recherche principale en rentrant un mot ou par tags via les boutons « Ingrédients », « Appareils » et « Ustensiles » en sachant que les deux types de recherche peuvent être combinés.",
    explication1:
      "L'objectif principal est d'optimiser la performance de la fonction de recherche pour avoir une recherche rapide et presque instantanée. En effet pendant que l'utilisateur effectue sa recherche, l'interface s'actualise en temps réel pour afficher les recettes correspondantes. Deux versions de cet algorithme de recherche ont été développé : une version avec boucle native et une autre avec une boucle objet. Pour comparer les performances de chacune d'entre elles l'outil JSBench a été utilisé.",
    explication2:
      "Une recherche par tags a aussi été développé. Les tags disponibles sont mis à jour si l'utilisateur a préalablement effectué une recherche principale. Un champs de recherche pour chaque catégorie permets d'efficacement trouver celui que l'on souhaite utiliser.",
    github: 'https://github.com/simontessard/Les-Petits-Plats-OCR',
    skills: [
      'Analyser un problème informatique',
      'Développer un algorithme pour résoudre un problème',
    ],
    categorie: 'Openclassrooms',
    date: 2022,
    previousProject: 'kasa',
    nextProject: 'oh-my-food',
  },
  {
    id: 5,
    name: 'Oh My Food',
    url: 'oh-my-food',
    mainIllustration: 'project-6-illustration.jpg',
    illustration2: 'project-6-illustration-1.jpg',
    illustration3: 'project-6-illustration-3.png',
    illustration4: 'project-6-illustration-2.png',
    illustration5: 'project-6-illustration-4.png',
    description:
      "C'est un site pour un restaurant fictif. L'application affiche les différents menus disponibles sur le site. Une page précisant le menu s'affiche quand l'utilisateur clique dessus. Le site est aussi responsive et contient de nombreuses animations CSS.",
    explication1:
      "L'objectif principal est d'optimiser la performance de la fonction de recherche pour avoir une recherche rapide et presque instantanée. En effet pendant que l'utilisateur effectue sa recherche, l'interface s'actualise en temps réel pour afficher les recettes correspondantes. Deux versions de cet algorithme de recherche ont été développé : une version avec boucle native et une autre avec une boucle objet. Pour comparer les performances de chacune d'entre elles l'outil JSBench a été utilisé.",
    explication2:
      "Une recherche par tags a aussi été développé. Les tags disponibles sont mis à jour si l'utilisateur a préalablement effectué une recherche principale. Un champs de recherche pour chaque catégorie permets d'efficacement trouver celui que l'on souhaite utiliser.",
    explication3:
      'Au clic sur un menu, une page détaillant le menu présente les plats à la carte et permets aussi de connaître ses prix en passant la souris au survol.',
    github: 'https://github.com/simontessard/Les-Petits-Plats-OCR',
    skills: [
      'Mettre en œuvre des effets CSS graphiques avancés',
      'Mettre en place une structure de navigation pour un site web',
      "Assurer la cohérence graphique d'un site web",
      'Utiliser un système de gestion de versions pour le suivi du projet et son hébergement',
    ],
    categorie: 'Openclassrooms',
    date: 2022,
    previousProject: 'les-petits-plats',
    nextProject: 'argent-bank',
  },
]
