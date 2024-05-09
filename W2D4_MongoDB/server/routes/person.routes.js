import { Router } from "express";
import { createPerson, getAllPeople } from "../controllers/person.controllers.js";
const router = Router();


router.route("/users")
    .get(getAllPeople)
    .post(createPerson);

export default router;