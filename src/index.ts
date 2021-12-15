const dataFileContent = require("../decoupage_territorial_benin.json");

let alreadyParsedData: Department[];

export interface Department {
  idDep: number;
  labelDep: string;
  communes: Commune[];
}

export interface Commune {
  idCom: number;
  labelCom: string;
  arrondissements: Arrondissement[];
}

export interface Arrondissement {
  idArrond: number;
  labelArrond: string;
  quartiers: Quartier[];
}

export interface Quartier {
  idQuart: number;
  labelQuart: string;
}

export function getAllBeninDepartments(): Department[] {
  if (!alreadyParsedData)
    alreadyParsedData = dataFileContent.map(
      (rawDepartment: any): Department => {
        return {
          idDep: rawDepartment["id_dep"],
          labelDep: rawDepartment["lib_dep"],
          communes: rawDepartment["communes"].map((com: any) =>
            getCommuneFromRawData(com)
          )
        };
      }
    );

  return alreadyParsedData;
}

function getCommuneFromRawData(rawData: {
  id_com: number;
  lib_com: string;
  arrondissements: any[];
}): Commune {
  return {
    idCom: rawData["id_com"],
    labelCom: rawData["lib_com"],
    arrondissements: rawData.arrondissements.map(arr =>
      getArrondissementFromRawData(arr)
    )
  };
}

function getArrondissementFromRawData(rawData: {
  id_arrond: number;
  lib_arrond: string;
  quartiers: any[];
}): Arrondissement {
  return {
    idArrond: rawData["id_arrond"],
    labelArrond: rawData["lib_arrond"],
    quartiers: rawData["quartiers"].map((rawQuart): Quartier => {
      return {
        idQuart: rawQuart["id_quart"],
        labelQuart: rawQuart["lib_quart"]
      };
    })
  };
}
