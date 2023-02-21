import { Router } from "express";
import ClaimController from "../controllers/claim.controller";
import ValidateToken from "../controllers/validate-token.controller";

const claimController = new ClaimController;
const validatetoken = new ValidateToken;
const router =  Router();

router.post("/claim", validatetoken.Token, claimController.addClaim);
router.get("/claims", validatetoken.Token, claimController.getClaim);
router.get("/claim/:idclaims", validatetoken.Token, claimController.getOneClaim);
router.put("/claim/:idclaims", validatetoken.Token, claimController.updateClaim);
router.delete("/claim/:idclaims", validatetoken.Token, claimController.deleteClaim);

export default router;

