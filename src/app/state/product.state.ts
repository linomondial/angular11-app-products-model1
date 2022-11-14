export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState <T>{
   dataState?: DataStateEnum,  // le point d'interrogation (dataState?) indique que la presence de la variable n'est pas obligatoire
   data?:T,
   errorMessage?:string
}