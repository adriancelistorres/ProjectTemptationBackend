import {DataSource} from "typeorm"
import { Asistencia } from "../entities/Asistencia"
import { Usuario } from "../entities/Usuario"
import {Vasistencia} from "../entities/Vasistencia"

import {VhorarioDocente} from "../entities/VhorarioDocente"
import { Vinasistencia } from "../entities/Vinasistencia"
import { Vtardanza } from "../entities/Vtardanza"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "feyalegria",
    // synchronize: true,
    logging: false,
    entities: [VhorarioDocente, Usuario,Vasistencia,Vinasistencia,Vtardanza,Asistencia,],
    subscribers: [],
    migrations: [],
})

