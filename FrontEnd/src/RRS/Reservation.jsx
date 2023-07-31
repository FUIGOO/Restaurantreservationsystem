import React, { Component } from "react";
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      email: '',
      NOM: '',
      dat: ''
    };
  }

  handleuName = (eve) => {
    this.setState({ Username: eve.target.value });
  };

  handleEmail = (eve) => {
    this.setState({ email: eve.target.value });
  };

  handleNom = (eve) => {
    this.setState({ NOM: eve.target.value });
  };

  handleGender = (eve) => {
    this.setState({ dat: eve.target.value });
  };

  handleSubmit = (eve) => {
    eve.preventDefault();

    console.log('Username: ', this.state.Username);
    console.log('Email: ', this.state.email);
    console.log('NOM: ', this.state.NOM);
    console.log('dat: ', this.state.dat);

    // Display alert message
    alert("Successfully Reserved");

    this.setState({ Username: '', email: '', NOM: '', dat: '' });
  };

  render() {
    const { Username, email, NOM, dat } = this.state;

    return (
      <div style={{ backgroundImage: "url(/images/pp.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
        <form className='form1' onSubmit={this.handleSubmit}>
          <h2 className="hea1">Reservation Form</h2>
          <div className='uName'>
            <label className='user'>Username: </label>
            <input className='in' type='text' placeholder='Enter Your Username' onChange={this.handleuName} value={Username} required></input>
          </div>
          <div className='email'>
            <label className='id'>Email Id: </label>
            <input className='in1' type='email' placeholder='Enter Your Email' onChange={this.handleEmail} value={email} required></input>
          </div>
          <div className='dob'>
          <div className="dat">
            <label className="dat"> Availability: <br />
              <select value={dat} onChange={this.handleGender}>
                <option value="10/07">10/11/2023</option>
                <option value="10/07">11/11/2023</option>
                <option value="11/07">15/11/2023</option>
                <input type='date' className='date1'></input>
              </select>
            </label>
          </div>
            
          </div>
          <div className='dob'>
          <div className="dat">
            <label className="dat">Time: <br />
              <select value={dat} onChange={this.handleGender}>
                <option value="10/07">12:00 PM</option>
                <option value="10/07">6:00 PM</option>
                <option value="11/07">8:00 PM</option>
                <input type='date' className='date1'></input>
              </select>
            </label>
          </div>
            <label className='date'>No Of Members</label>
            <input className='in2' type='number' onChange={this.handleNom} value={NOM} required></input>
          </div>
          <div>
            <button className="btn" type="submit">Reserve</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register;


// import React, { useState } from "react";
// import axios from "axios";
// import './Register.css';

// const Register = () => {
//   const [Username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [NOM, setNOM] = useState('');
//   const [dat, setDat] = useState('');

//   const handleuName = (eve) => {
//     setUsername(eve.target.value);
//   };

//   const handleEmail = (eve) => {
//     setEmail(eve.target.value);
//   };

//   const handleNom = (eve) => {
//     setNOM(eve.target.value);
//   };

//   const handleGender = (eve) => {
//     setDat(eve.target.value);
//   };

//   const handleSubmit = (eve) => {
//     eve.preventDefault();

//     const reservationData = {
//       Username: Username,
//       email: email,
//       NOM: NOM,
//       dat: dat
//     };

//     // Send the reservation data to the server using axios
//     axios.post('http://localhost:8080/add', reservationData)
//       .then(response => {
//         // Handle the success response, if needed
//         console.log("Reservation successful!");
//         // Display alert message
//         alert("Successfully Reserved");
//         // Clear the form fields
//         setUsername('');
//         setEmail('');
//         setNOM('');
//         setDat('');
//       })
//       .catch(error => {
//         // Handle the error response, if needed
//         console.error("Error occurred during reservation:", error);
//         alert("Reservation failed. Please try again later.");
//       });
//   };

//   return (
//     <div style={{ backgroundImage: "url(/images/pp.jpg)", minHeight: "150vh", width: "100%", backgroundRepeat: "none", backgroundSize: "cover", position: "fixed" }}>
//     //         <form className='form1' onSubmit={this.handleSubmit}>
//     //           <h2 className="hea1">Reservation Form</h2>
//     //           <div className='uName'>
//     //             <label className='user'>Username: </label>
//     //             <input className='in' type='text' placeholder='Enter Your Username' onChange={this.handleuName} value={Username} required></input>
//     //           </div>
//     //           <div className='email'>
//     //             <label className='id'>Email Id: </label>
//     //             <input className='in1' type='email' placeholder='Enter Your Email' onChange={this.handleEmail} value={email} required></input>
//     //           </div>
//     //           <div className='dob'>
//     //           <div className="dat">
//     //             <label className="dat"> Availability: <br />
//     //               <select value={dat} onChange={this.handleGender}>
//     //                 <option value="10/07">10/11/2023</option>
//     //                 <option value="10/07">11/11/2023</option>
//     //                 <option value="11/07">15/11/2023</option>
//     //                 <input type='date' className='date1'></input>
//     //               </select>
//     //             </label>
//     //           </div>
                
//     //           </div>
//     //           <div className='dob'>
//     //           <div className="dat">
//     //             <label className="dat">Time: <br />
//     //               <select value={dat} onChange={this.handleGender}>
//     //                 <option value="10/07">12:00 PM</option>
//     //                 <option value="10/07">6:00 PM</option>
//     //                 <option value="11/07">8:00 PM</option>
//     //                 <input type='date' className='date1'></input>
//                    </select>
//                 </label>
//              </div>
//               <label className='date'>No Of Members</label>
//                <input className='in2' type='number' onChange={this.handleNom} value={NOM} required></input>
//               </div>
//               <div>
//                  <button className="btn" type="submit">Reserve</button>
//               </div>
//            </form>
//          </div>
  
//   );
// };

// export default Register;

