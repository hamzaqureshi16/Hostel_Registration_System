import express from 'express';
//import hostelApplicationModel from '../models/hostelApplication.js';
import {  deleteApplicant,getApplications, postApplications } from '../controllers/hostelApplication.js';
 const router = express.Router();

router.get("/",getApplications);


router.post("/",postApplications);

router.delete('/',deleteApplicant)

//router.post('/deleteApplicant',deleteApplications);

export default router;