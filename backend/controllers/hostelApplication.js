import hostelApplicationModel from '../models/hostelApplication.js'


export const getApplications = async (req,res) => {
    
    try {
        const applicantData = await hostelApplicationModel.find();
        res.json(applicantData);
        
    } catch (error) {
        console.log('error');
    }
};

export const deleteApplicant =   (req,res) => {
    const reg = req.body.registration.toString();


      hostelApplicationModel.deleteOne({registration:reg},function(err){
        if(err){
            console.log(err);
        }
        else{
          res.json('deleted');
        }
    })

    

}

export const postApplications = async (req,res) => {
  
    
    const newApplicant = new hostelApplicationModel(
        {studentname:req.body.StudentName.toString(),
        registration:req.body.registration.toString()}
    )


  
    try {
        const applicantData = await hostelApplicationModel.findOne({registration:req.body.registration.toString()}).then(async result =>{
            if(result === null){
                try {
                    await newApplicant.save();
                    res.json(newApplicant);
                    
                } catch (error) {
                    res.json("the data wasn't saved");
                }
            }
            else{
                res.json("The registration number already exists")
                
            }
        });
        
    } catch (error) {
        console.log('error');
    }
    
    

   
    
};

