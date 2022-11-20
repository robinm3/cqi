# Pré CQI 2023 - Système d'exploitation - 10 pts

## Mise en situation

Le défi de Système d'Exploitation sert a évaluer vos compétences sur les concepts de Systemes d'Exploitation, plus particulièrement, le parallelisme. Vous aurez à accélérer l'execution d'un programme de montage video à l'aide de parallelisme.

## Logiciel Requis
- Linux
- cmake
- pthreads
- tbb-dev
- gcc et g++
- libPng

## Remise
1. Utiliser la commande `make remise`
2. Soumettre le fichier `remise.zip`

## Code fournit
* `source/main.c`
  * Contient le point d'entrée du programme quit traite les arguments en ligne de commande et démarre le pipeline de traitement d'images voulu.
* `source/image.c` `include/image.h`
  * Contiennent les structures et le code permettant la lecture/écriture d'images de format PNG.
* `source/filter.c` `include/filter.h`
  * Contiennet différentes fonctions permettant des filtres (modifications) à des images.
* `source/queue.c` `include/queue.h`
  * Contient une implémentation simple d'une file permettant la lecture/écriture par plusieurs noeuds d'éxécution. Ces structures et fonctions sont fortement recommandé lors de l'implémentation du pipeline utilisant pthreads.
* `source/pipeline-serial.c`
  * Contient une implémentation sérielle de référence du pipeline.
* `source/pipeline-pthread.c` **(À COMPLÉTER)** **(5 POINTS)**
  * Contient l'implémentation parallèle demandée du pipeline à l'aide de pthread
* `source/pipeline-tbb.cpp` **(À COMPLÉTER)** **(5 POINTS)**
  * Contient l'implémentation parallèle demandée du pipeline à l'aide de TBB
* `data/fetch.sh`
  * Contient un script pour télécharger les images de test.
* `data/check.sh`
  * Contient un script pour vérifier si les images produites sont identiques aux images sérielles.

## Spécifications
Le pipeline à implémenter doit contenir les étages suivantes:
1. Lire une image
2. Doubler la taille de l'image
3. Convertir l'espace de couleur de RGB à HSV
4. Décaler graduellement la composante H de 4 à chaque image successive
5. Convertir l'espace de couleur de HSV à RGB
6. Enregistrer l'image


## Compilation
Pour compiler l'application, il est recommandé de créer un dossier `build` à la racine du projet afin de bien séparer les fichiers générés.
```
$ mkdir build && cd build
```
Ensuite, on configure le projet avec `cmake`. Celui-cu peut donc être compilé avec `make`
```
$ cmake ..
$ make
```

Il n'est pas nécessaire de re-exécuter toutes les commandes ci-dessus pour recompiler le binaire, seulement la dernière. Vous pouvez exécuter `./pipeline --help` pour voir les options du programme.


## Commandes
Le `Makefile` généré par `cmake` contient les commandes spéciales ci-dessous.

* `make format`
  * Utilise `clang-format` pour formatter le code source.
* `make remise`
  * Crée une archive **ZIP** contenant les fichiers pour la remise.
* `make run-serial`
  * Exécute le pipeline `sériel` avec les données dans le dossier `data/` et en mesurant le temps écoulé.
* `make run-pthread`
  * Exécute le pipeline utilisant `pthreads` avec les données dans le dossier `data/` et en mesurant le temps écoulé.
* `make run-tbb`
  * Exécute le pipeline utilisant `TBB` avec les données dans le dossier `data/` et en mesurant le temps écoulé.
* `make run-all`
  * Exécute les 3 pipelines ci-dessus


## Tester
```
$ ./data/fetch.sh                     // Télécharger les images
$ mkdir build && cd build && cmake .. // Générer le makefile dans le dossier build
$ make run-all                        // Compiler et executer les 3 algorithmes
$ ../data/check.sh                    // Vérifier si toutes les images créées sont identiques
```

