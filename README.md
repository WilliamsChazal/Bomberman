- [x] Génération du terrain en HTML/CSS
- [x] Déplacement du *player* en JS
- [x] Simulation d'un effet de marche quand le player se déplace
- [x] Ecoute de l'événement touche "Space" pour poser la bombe
- [x] Animation de la bombe
- [x] Génération des ennemis (statique)
- [x] Destruction des ennemis
- [ ] Bloquer le déplacement sur les cases occupées par les ennemis

- [x] Génération des éléments de décor
- [ ] Bloquer le déplacement sur les cases occupées par les éléments du décor


- [x] Déplacement des ennemis

- [ ] Ecran de victoire

Facultatif
- [ ] Les ennemis lâchent des bonus en mourrant
- [ ] Coder les bonus
- [x] Un ennemi spécial peut détruire le joueur en le touchant


sur le principe oui, niveau code ca ne prend pas tout a fait cette forme

divise la largeur de gameContainer par doomGuy.width, ca te donne le nombre de "cases"
ensuite tu fais un random entre 0 et "nombre de case"
et la coordonnées finale c'est ta valeur random * doomGuy.width
