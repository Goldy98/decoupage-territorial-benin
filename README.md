# decoupage-territorial-benin

[Module Node.js](https://www.npmjs.com/package/decoupage-territorial-benin) (non officielle) pour obtenir des informations de base sur les départements, communes, arrondissements et les quartiers du Bénin. Elle utilise le fichier du découpage territorial du Bénin proposé par [leplutonien](https://github.com/leplutonien/decoupage_territorial_benin).

# Installation

```bash
$ npm install decoupage-territorial-benin
```

# Utilisation

```js
const allDepartments = getAllBeninDepartments();
```

# Typage

```ts
interface Department {
  idDep: number;
  labelDep: string;
  communes: Commune[];
}

interface Commune {
  idCom: number;
  labelCom: string;
  arrondissements: Arrondissement[];
}

interface Arrondissement {
  idArrond: number;
  labelArrond: string;
  quartiers: Quartier[];
}

interface Quartier {
  idQuart: number;
  labelQuart: string;
}
```

# Stack Technique

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

# Tu as envie de donner un coup de pouce?

> Bah il y a beaucoup à faire 😁

- Ecrire les tests ( C'est con, mais c'est utile 😛 )
- Améliorer la doc 📚
- Rajouter des nouvelles infos/fonctions si nécéssaire, donc écrire du code 🏄
- Mettre un petit star ⭐️ à ce dépôt.

# Utilisé par :

# License

[MIT License](LICENSE.md)
