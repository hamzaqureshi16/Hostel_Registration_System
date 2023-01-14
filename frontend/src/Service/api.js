import axios from 'axios';

const url = "http://localhost:3000";

export const addApplicant = async (applicantData) => {
   
    return await axios.post(`${url}/hostelApplicants`,applicantData);
}

export const getApplicant = async () =>{
    return await axios.get(`${url}/viewApplicants`);
}

export const deleteApplicant = async (registration) =>{
    return await axios.delete(`${url}/deleteApplicant`,{data:{registration:registration}});
    
     
   
}
// axios.get();

// axios.post();