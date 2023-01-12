import axios from 'axios';

const url = "http://localhost/3000";

export const addApplicant = async (applicantData) => {
    console.log(applicantData);
    return await axios.post(`${url}/hostelApplicants`,applicantData);
}
// axios.get();

// axios.post();