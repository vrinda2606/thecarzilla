import React, {useState} from 'react';
import axios from "axios";

const JobsPopup = ({ onClose }) => {

  // import Aos from 'aos';
  const url = "https://sheetdb.io/api/v1/a3gakp9f8p9dg";

  // Function to send form data to the API
  const sendData = async (formDataDetails) => {
    const formData = new FormData();
    for (const key in formDataDetails) {
        formData.append(key, formDataDetails[key]);
    }
    try {
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Data sent successfully:", response.data);
    } catch (error) {
        console.error("Error sending data:", error);
    }
};

    const [formDataDetails, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        experience: "",
        jobPosition: "",
        currentCTC: "",
        expectedCTC: "",
        resume: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
    //   const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         resume: file,
    //     }));
    // };
    
    
    const handleSubmit = (e) => {
  
      const isFormValid = Object.values(formDataDetails).every((value) => value);
  
      if (isFormValid) {
          console.log("Form Data Submitted: ", formDataDetails);
          sendData(formDataDetails);
          setFormData({
            name: "",
            email: "",
            phone: "",
            dob: "",
            experience: "",
            jobPosition: "",
            currentCTC: "",
            expectedCTC: "",
            resume: "",
        });
          window.alert("Form submitted successfully");
      } else {
          window.alert("Please fill all fields");
      }
  };

  return (
    <div
      className='JApopup'
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'grid',
        placeItems: 'center',
        position: 'fixed',
        top: '0vw',
        left: '0vw',
        zIndex: 9999,
      }}
      onClick={onClose} // Close the popup when clicking outside
    >
      <div
        className='Jobapply_popup'
        style={{
          fontSize : '1vw',
          backgroundColor: 'white',
          padding: '2vw',
          borderRadius: '1vw',
          width: '50vw',
          maxWidth: '32vw',
          position: 'relative',
          height: 'auto'
        }}
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside the popup
      >
        <h4 style={{fontFamily : 'Lexend Deca',fontSize : '1.7vw',lineHeight: '2.9vw'}}>Apply for Job</h4>
        <form className='Jobapply_popup_form' onSubmit={handleSubmit}>
        
        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <div style={{ marginBottom: "1.2vw"}}>
          <input
            id='jobName'
            type="text"
            name="name"
            placeholder= 'Name'
            value={formDataDetails.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw"}}>
          <input
            type="email"
            id='jobEmail'
            name="email"
            value={formDataDetails.email}
            placeholder= 'Email'
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        </div>

        <div style={{ marginBottom: "1.2vw" }}>
          <input
            type="tel"
            id='jobPhone'
            name="phone"
            placeholder='Phone'
            value={formDataDetails.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        
        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <div style={{ marginBottom: "1.2vw",color: 'grey',width: '40%' }}>
          <label>Date of Birth</label>
          <input
            type="date"
            id='jobDob'
            name="dob"
            value={formDataDetails.dob}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw",width:'40%'}}>
          <input
            type="text"
            id='jobExp'
            name="experience"
            placeholder='Total Experience In Years/Months'
            value={formDataDetails.experience}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw",lineHeight: '1.1vw' }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        </div>

        <div style={{ marginBottom: "1.2vw" }}>
          <input
            type="text"
            id='jobPos'
            name="jobPosition"
            placeholder='Job Positions'
            value={formDataDetails.jobPosition}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>

        <div style={{display: 'flex',justifyContent:'space-between'}}>
        <div style={{ marginBottom: "1.2vw" }}>
          <input
            type="text"
            id='jobCtc'
            name="currentCTC"
            placeholder='Current CTC'
            value={formDataDetails.currentCTC}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw" }}>
          <input
            type="text"
            id='jobExpCtc'
            name="expectedCTC"
            placeholder='Expected CTC'
            value={formDataDetails.expectedCTC}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        </div>

        <div style={{ marginBottom: "2.2vw", marginTop: "1vw"}}>
        <input
            type="text"
            id='jobResume'
            name='resume'
            placeholder='Resume Drive Link'
            value={formDataDetails.resume}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#FF3F00",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            width: "5vw",
            height: "2vw",
            fontSize : '1vw'
          }}
        >Submit
        </button>
      </form>

      </div>
    </div>
  );
};

export default JobsPopup;