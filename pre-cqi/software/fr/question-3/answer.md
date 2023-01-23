# Pré-CQI - Ingénierie logicielle

## Réponse 3 - Mauvaises odeurs (2 points)
a) 
| Ligne | Erreur |

| 1 | TypeDeTransport devrait s'appeler TransportType  |

| 12 | number, devrait être un unique ID |

| 30 | Le type de transport Biking est hard-codé. Il devrait être passé en paramètre dans le constructeur. |

| 31 | Le HttpClient devrait être passé en paramètre dans le constructeur plutôt qu'instancié ici |

| 35 | Renommer pour findVerticeIdFRomAddress |

| 42 | i++ plutôt que ++i (par convention) |

| 47 | On peut effacer le " ? true : false" | 

| 65 | Attributs déclarés dans le constructeur. Les attributs de la classe devraient être déclarés plus haut, puis initialisés dans le constructeur |

| 74 à 83 et 90 à 103 | Plutôt qu'un switch-case avec les possibilités de transport et 3 fonctions différentes, faire une fonction générique evaluatePathStrategy qui prend en paramètre le type de transport |

| 116 | Pareil qu'à 65 |

| 129 à 133 | Possiblie de simplifier: this.trasportationError = (this.formGroup.valid === false); if(this.transportationError){return;}|

| 139 | Mauvaise pratique de hard-coder "TRANSPORTATION" pour filtrer une erreur. Peut poser problème si le message d'erreur change de format. |

| 152 | serait mieux d'ajouter un getTransportType à polyMapsService pour déléguer le get sur le type de transport |

| 156 | serait mieux d'ajouter un setTransportType à polyMapsService pour déléguer le set sur le type de transport |

|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |

b) 
| Ligne | Erreur |

| 27 | devrait déléguer à this.completeTask plutôt que faire un traitement custom task.isComplete = true |

| 31 | le find devrait être extrait dans une fonction private findTaskByTitle(title: string):Task |

| 33 | l'opérateur !! n'est pas une pratique courante. Est-ce qu'il s'agit d'un bug? Sinon extraire dans une fonction mieux faire comprendre le but de ce check |

| 39 | le sens de la fonction taskExists(task) n'est pas clair. Devrait renommer pour tasksInProject(task) |

| 48 | remplacer le find par la fonction extraite (créée suite à l'erreur de la ligne 31) |

| 62 | il ne devrait pas y avoir de setTasksList public. On s'expose à des taskList incohérentes (ex. plusieurs tasks avec le même titre) |

| 68 | pour simplifier, on peut effacer " ? true : false" |

|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |
|       |        |