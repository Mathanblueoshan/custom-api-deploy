import express from "express";

import { personCreate,personIndex,personUpdate,personDelete,personDetail } from "../controllers/person.controller.js";

const router = express.Router();

// read 
router.get("/",personIndex);
// single read
router.get("/:id",personDetail);

// create 
router.post("/",personCreate);

// update 
router.put("/:id",personUpdate);

// delete 
router.delete("/:id",personDelete);

export default router;