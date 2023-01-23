# Pré-CQI 2023 - Design Mobile (10 points)

 *(for english, check README_EN.md in this folder)*

 **NOTE**: Il y a des similarités avec le défi web, mais ce n'est pas 100% identique, portez attention.
 
## Mise en situation

Le Potato Cloud Fest veut savoir si vous êtes la bonne équipe pour bâtir une app qui améliorera l'expérience de ses festivalier.e.s! C'est une plateforme où les clients pourront se créer un compte, consulter les infos sur l'événement, bâtir un horaire de ce à quoi ils veulent assister, etc.

Vous créez donc une version *lite* de l'application pour leur montrer vos *skills* de mobile.

## Logiciel Requis

Il n'y a pas de logiciel requis pour ce défi, mais vous devez développer l'application avec un SDK natif, donc iOS ou Android (pas de React Native ou équivalent).

Vous devez pouvoir faire une démo à la fin (sur un simulateur ou un téléphone).

On vous demande seulement de faire la partie *frontend*, vous pouvez donc *hardcoder* vos données directement dans votre code.

## Remise
1. Vous devrez faire une démo de votre application aux juges (donc leur montrer chaque partie détaillée plus bas)
2. Vous devez remettre des screenshots de votre design
3. Vous devez remettre une copie de votre code source

## Instructions
### **Authentification** (2 points)

La page d'authentification doit minimalement contenir:
- Le logo du festival (à votre discrétion!)
- Input pour le courriel
- Input pour le mot de passe (minimum 10 caractères)
- Liens ou boutons vers (n'ont pas à être fonctionnels)
    - Créer un compte
    - Mot de passe oublié

### **Page d'accueil** (2 points)

La page d'accueil doit contenir:

- Les dates du festival (26-27 janvier 2023)
- Lieu du festival (Montréal)
- Le logo du festival
- Un navbar avec les différentes options de menu:
    - Renseignements personnels
    - Programmation
    - Horaire personnalisé
    - Infos pratiques
    - Nous joindre
- Un décompte jusqu'au début de l'événement (26 janvier 2023)

### **Page des renseignements personnels** (2 points)

Cette page permet aux festivalier.e.s d'entrer leurs renseignements et leurs préférences. Ces infos peuvent ensuite être utilisées pour gérer des urgences, des objets perdus, des concours, etc.

La page des renseignements personnels doit contenir:
- Section permettant la modification des informations confidentielles
    - Nouveau mot de passe
    - Confirmation du nouveau mot de passe
    - Ancien mot de passe
- Section permettant la modification des coordonnées
    - Adresse
    - Adresse (suite)
    - Ville
    - Province
    - Pays
    - Code postal
    - Téléphone
- Section permettant la modification d'un contact d'urgence
    - Nom
    - Prénom
    - Téléphone
    - Lien avec la personne
- Section permettant la modification d'infos de santé  
    - Allergies/intolérances
    - Problèmes de santé connus
    - Médicaments
- Section permettant la modification de ses préférences
    - Fréquence des courriels promo
        - Jamais, 1/mois, 1/semaine, 1/jour 
    - Grandeur de tshirt
- Bouton pour sauvegarder

### **Page de l'horaire personnalisé** (4 points)

Cette page permet aux participant.e.s de consulter l'horaire qu'ils auront bâti à partir de la programmation complète. En d'autres mots, imaginez que l'utilisateur peut consulter la programmation entière et sélectionner des événements pour se créer un aide-mémoire d'où aller, quand. Vous n'avez *pas* à faire la partie de la programmation, juste montrer l'horaire personnalisé.

Les événements qui composeront l'horaire sont donnés dans `schedule.csv`. Vous pouvez *parse* les données comme vous voulez (si ça vous tente de recopier à la main vous pouvez aussi), pas besoin de traduire les lieu et types d'événements.

(*NOTE: La première ligne du CSV représente le nom des colonnes, le reste ce sont les données.*)

La page de l'horaire personnel doit contenir:
- Une grille de l'horaire des dates du festival (26-27 janvier)
- Les événements choisis par l'utilisateur dans la grille
    - Nom
    - Date et heure
    - Lieu
    - Type
- Lorsqu'on tappe sur un événement dans la grille, un popup contenant
    - Nom, date, heure, lieu, type
    - Description brève (vous pouvez l'inventer ou mettre un placeholder, on ne vous notera pas là dessus)