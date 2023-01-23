# Pré-CQI - Ingénierie logicielle

## Réponse 2 - Git (1 points)

a)
On peut vérifier les changements apporter par un commit en la comparant avec le commit d'avant ou en utilisant la commande git log --raw.

b) 
Il est possible de commit ses changments localement sans la push sur l'origine. Cela permet d'enregistrer ses changements sur son poste sans affecté la branche qui est partagé aux autres. 
git add .
git commit -m 'un message'

c) 
git clone https://cqi.git.com/repository.git
Noté que cette url utilise l'authentification HTML ce qui veut dire qu'il faudrat se connecter à chaque fois pour faire des changements sur le répertoire.

d)
La méthode la plus rapide pour ce faire est: 
git checkout -b feature/action

On peut aussi faire:
git branch feature/action
git checkout feature/action

e) 
Il faut tout d'abord stager les changements avec git add . (rajoute tout les changement unstage), puis faire un commit avec git commit -m 'nom du commit', puis faire git push.

f) 
Beaucoup de choix s'offre à nous:
On peut faire git merge refactor/pre-cqi qui va prendre tout les commits de la branche et les squash dans un commit (les mettres dans un commit) pour ensuite faire le commit sur notre branch actuelle ou on peut faire git rebase refactor/pre-cqi qui va prendre les commit un par un de refactor/pre-cqi et les faires sur notre branch.