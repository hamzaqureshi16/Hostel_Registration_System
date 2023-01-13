import hostelApplicationModel from '../models/hostelApplication.js'
export const getApplications = (req,res) => {
    console.log("get reached");
};

export const postApplications = async (req,res) => {
    console.log('this i post');
    const newApplicant = new hostelApplicationModel(
        {studentname:req.body.StudentName.toString(),
        registration:req.body.registration.toString()}
    )
    console.log(req.body.StudentName.toString());
    console.log(req.body.registration.toString());
};

try {
    await newApplicant.save();
    res.json(newApplicant);
} catch (error) {
    console.log('not saed');
}