export const getApplications = (req,res) => {
    console.log("get reached");
};

export const postApplications = (req,res) => {
    const result = req.body;
    console.log(result)
};