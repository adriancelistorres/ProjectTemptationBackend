import { Router } from "express";
import ProviderController from "../controllers/provider.controller";
import ValidateToken from "../controllers/validate-token.controller";


const providerController = new ProviderController;
const validatetoken =  new ValidateToken;


const router =  Router();
/*
router.post("/addprovider",providerController.addProvider);
router.get("/providers",providerController.getProvider);
router.get("/provider/:idprovider",providerController.getOneProvider);
router.put("/provider/:idprovider",providerController.UpdateProvider);
router.delete("/provider/:idprovider",providerController.deleteProvider);
*/
router.post("/addprovider",validatetoken.Token,providerController.addProvider);
router.get("/providers",validatetoken.Token,providerController.getProvider);
router.get("/provider/:idprovider",validatetoken.Token,providerController.getOneProvider);
router.put("/provider/:idprovider",validatetoken.Token,providerController.UpdateProvider);
router.delete("/provider/:idprovider",validatetoken.Token,providerController.deleteProvider);

export default router;