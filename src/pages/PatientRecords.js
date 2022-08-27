import {React,useState} from 'react'
import '../styles/patientRecords.css'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {patients} from "../data";
import '../styles/patient.css';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function PatientRecords() {
    
    const [query,setQuery] = useState("");
    // const searchKeys = ["patient_fname","patient_fname","patient_id","patient_gender","patient_occupation"]


    // const search = (data)=>{
    //     return data.filter((patient)=>
    //     searchKeys.some((key)=>
    //     patient[key].toLowerCase().includes(query))
    //     );
    // }
    var today = new Date();
    var thisYear = today.getFullYear();
        
  return (
    <div className='container'>
        <div className="search">
            <TextField
                className='search_input'
                id="outlined-helperText"
                label="Search Patient"
                onClick={(e)=>setQuery(e.target.value)} 
                onChange={(e)=>setQuery(e.target.value)} 
            />                
            <Button startIcon={<SearchIcon/>}>Search</Button>
        </div>

        <div className='record-list'>
            <ul>
                { 
                    {/* search(patients) */}
                    .map((patient)=>(

                    <li key ={patient.patient_id} className="patients_list">
                        <div className='patient'>
                <div className='image-container'>
                    <img src={patient.patient_profile_image} alt={patient.patient_fname}/>
                </div>
                <div className='patient-bottom'>
                    <h4>ID: {patient.patient_id}</h4>
                    <h4>Names: {patient.patient_fname} {patient.patient_lname}</h4>
                    <h4>Age:{thisYear-patient.patient_dob.substring(0,4)} years old</h4>
                    <h4>Gender: {patient.patient_gender}</h4>
                    <h4>Occupation: {patient.patient_occupation}</h4>
                </div>
                
                <div className='btn-container'>
                    <Button endIcon={<ReadMoreIcon/>} className='viewMoreBtn'>View</Button>
                </div>
            </div>
                    </li> 
                    ))
                }
        </ul>
     
            
        </div>
    </div>
  )
}

export default PatientRecords