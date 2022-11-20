# Pré-CQI - Ingénierie logicielle

## Réponse 4 - Analyse quantitative de processus (3 points)

a) De se graphique nous pouvons voir que les méthodologies agile n'ont pas été utilisé, en tout cas pas à l'état pur, car sinon à chaque semaine nous devrions avoir un peut d'exigences, un peu d'analyse, un peu d'implémenation et un peu de test. Cependant, on ne peut pas dire que la méthodologie waterfall à l'état pur à été utilisé, car sinon chaque activité aurait été tout seul dans la semaine. Les premières semaines aurait été consacré aux exigences, les secondes à l'analyse et ainsi de suite. Il s'agit donc Agile-Waterfall hybrid qui combine les deux. Dans chaque itération qui semble durée un mois dans ce cas-ci on aura un peu de chaque activité, mais au cours du dévelopement on aura de moins en moins d'exigence et d'analyse à faire.

b)
En regardant la figure, on peut voir que la conception de l'applicaiton a certainement pris du retard au début. En effet, plus le projet avance plus les développeurs, on du mettre des heures supplémentaires pour livrer le projet jusqu'à dépasser de 20h par développeur le temps par semaine. De plus, on voit clairement que les tests on pris le bar assez rapidement dans le dévellopement. L'équipe de maintenance sera donc pris avec un projet pas tester qui a été fait par des développeurs fatigués et à bout de souffle. Il sera très difficile d'introduire des changements tout en s'assurant qu'on ne brise pas une autre feature, car il n'y aura pas de test pour nous dire qu'on a altéré le foncionnement. De plus, la code base ne sera surrement pas documenter et cela métonnerait que le code soit assez clean pour qu'on comprennne rapidement ce qu'il fait. Il ne serait pas non plus étonnant de voir des raccourcis qui rende l'ajout de feature dangereux. Finalement, avec autant de pression que ça pour remettre le projet, il serait étonnant que l'équipe est mis en place un infrastructure-as-code ou un pipeline-as-code rendant les modifications par l'équipe de maintenance facile.

(@Christophe tu t'es tu inspiré de TNG pour ça)

c) 
La première étape serait de faire de la documentation. Je parle bien sur de documentation C4 qui permettrait de faire un état des lieux du logiciel. Puis, il serait pertinent de libéré du temps afin de rajouter des tests unitaires et d'intégration au projet afin de faciliter la maintenance du projet. Le plus difficile sera de convaincre les personnes ressources pour avoir l'argent nécessaire pour faire les changements, mais cela sera rentable au long terme.
