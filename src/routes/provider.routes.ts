import { Router } from "express";
import ProviderController from "../controllers/provider.controller";


const providerController = new ProviderController;

const router =  Router();

router.post("/provider",providerController.addProvider);
router.get("/providers",providerController.getProvider);
router.get("/provider/:idprovider",providerController.getOneProvider);
router.put("/provider/:idprovider",providerController.UpdateProvider);
router.delete("/provider/:idprovider",providerController.deleteProvider);

export default router;