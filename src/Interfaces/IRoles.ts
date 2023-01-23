
//PARA EL GET GENERAL
export interface IRoles{
  idrol: number,
  namerol: string,
  state: number,
}

//PARA EL GET ONE BY ID
export interface IRolesUn{
    idrol: number|undefined,
    namerol: string|undefined,
    state: number|undefined,
  }


  export interface IRolesUpdate{
    namerol: string,
    state: number,
  }