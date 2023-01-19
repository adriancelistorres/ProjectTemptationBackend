import { Router } from "express";
import AsistenciaController from "../controllers/asistencia.controller";
import InasistenciaController from "../controllers/inasistencia.controller";
import LoginController from "../controllers/login.controller";
import TardanzaController from "../controllers/tardanza.controller";
import vasistenciacontroller from "../controllers/vasistencia.controller";
import vhorariocontroller from "../controllers/vhorariodocente.controller";
import vinasistenciacontroller from "../controllers/vinasistencia.controller copy";
import vtardanzacontroller from "../controllers/vtardanza.controller";

const _HorarioController = new vhorariocontroller();
const _loginController  = new LoginController();
const _AsistenciaController = new vasistenciacontroller();
const _InasistenciaController = new vinasistenciacontroller();
const _TardanzaController = new vtardanzacontroller();

const _Tardanza= new TardanzaController();
const _Inasistencia= new InasistenciaController();

const _Asistencia= new AsistenciaController();
const _MarcarAsistencia= new AsistenciaController();


const router = Router();

// router.get("/vhorariodocente", _HorarioController.getHorarioDocente);
router.get("/vasistencia", _AsistenciaController.getAsistencia);
router.get("/vinasistencia", _InasistenciaController.getInasistencia);
router.get("/vtardanza", _TardanzaController.getTardanza);
router.post("/login", _loginController.loginUser);

router.get("/tardanza/:id", _Tardanza.TardanzaDocente);
router.get("/inasistencia/:id", _Inasistencia.InasistenciaDocente);
router.get("/asistencia/:id", _Asistencia.AsistenciaDocente);

router.post("/marcarasistencia", _Asistencia.createAsistencia);

router.get("/horariodocente/:id", _HorarioController.getOneHorario);



export default router;
