import mongoose, { mongo } from "mongoose";
const hostelApplicationStructure = mongoose.Schema(
    {   
        studentname:String,
        registration:String
    } );

const hostelApplicationModel = mongoose.model('hostelApplications',hostelApplicationStructure);

export default hostelApplicationModel;