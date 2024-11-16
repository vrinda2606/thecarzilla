import React, {useState} from 'react';

const JobsPopup = ({ onClose }) => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        experience: "",
        jobPosition: "",
        currentCTC: "",
        expectedCTC: "",
        resume: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFileChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          resume: e.target.files[0],
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        window.alert("Form submitted successfully");
        // Add your submission logic here
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
            type="text"
            name="name"
            placeholder= 'Name'
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw"}}>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            name="phone"
            placeholder='Phone'
            value={formData.phone}
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
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw",width:'40%'}}>
          <input
            type="text"
            name="experience"
            placeholder='Total Experience In Years/Months'
            value={formData.experience}
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
            name="jobPosition"
            placeholder='Job Positions'
            value={formData.jobPosition}
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
            name="currentCTC"
            placeholder='Current CTC'
            value={formData.currentCTC}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        <div style={{ marginBottom: "1.2vw" }}>
          <input
            type="text"
            name="expectedCTC"
            placeholder='Expected CTC'
            value={formData.expectedCTC}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5vw", marginTop: "0.34vw" }}
          />
          <hr style={{width : '100%',height: '0.09vw',backgroundColor : '#596780'}}/>
        </div>
        </div>

        <div style={{ marginBottom: "2.2vw", marginTop: "1vw",border: '0.1vw solid black'}}>
          <input
            type="file"
            onChange={handleFileChange}
            required
            style={{ display: "block" }}
          />
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