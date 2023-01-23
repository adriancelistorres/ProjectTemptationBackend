export interface ICategory{
    idcat: number,
    name_cat: string,
    state: number,
}


export interface ICategoryUpdate{
    name_cat: string,
    state: number,
}

export interface ICategoryGet{
    idcat: number | undefined,
    name_cat: string | undefined,
    state: number| undefined,
}

