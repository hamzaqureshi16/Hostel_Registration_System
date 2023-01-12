import express from 'express';
import hostelApplicationModel from '../models/hostelApplication.js';
import { getApplications, postApplications } from '../controllers/hostelApplication.js';
 const router = express.Router();

router.get("/",getApplications);


router.post("/",async (req,res) => {
    
    const newApplicant = hostelApplicationModel({
        studentname: req.body.StudentName.toString(),
        registration: req.body.Registration.toString()
    });
    try {
        await newApplicant.save();
    } catch (error) {
        console.log('error');
    }

    
    });

export default router;