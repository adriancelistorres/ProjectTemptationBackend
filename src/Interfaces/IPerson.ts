import { Long } from "typeorm";

export interface IPerson{
  idperson: number|any|undefined,
  idrol: number|any|undefined,
  name: string|any|undefined,
  lastname: string|any|undefined,
  date_b: Date|any|undefined,
  dni: string|any|undefined,
  gender: string|any|undefined,
  address: string|any|undefined,
  username: string|any|undefined,
  password: string|any|undefined,
  state: number|any|undefined,
  key: string|any|undefined
}