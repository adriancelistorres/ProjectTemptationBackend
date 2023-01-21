import { Long } from "typeorm";

export interface IPerson{
  idrol: number,
  name: string,
  lastname: string,
  date_b: Date,
  dni: string,
  gender: string,
  address: string,
  username: string,
  password: string,
  state: number,
  key: string,
}