import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './Account.css';


function Account() {
    const alert = useSelector(st => st.alerts)

    let user = JSON.parse(localStorage.getItem("user_data"))


//   const [user, getUserData] = useState([])

//   useEffect(() => {
//       getUser = () =>{
//           let data = JSON.parse(localStorage.getItem("user_data"));


//       } 
//   })

  return (
    <>
    {alert.message !== '' ? 
  <div className={alert.messageType === 'SUCCESS' ? 'alert alert-sucess mt' : 'alert alert-danger mt'} role="alert">
    {alert.message}
  </div> :
  <div></div>
  }
    <div className="mt">{user.first_name}</div>
    </>
  );

}

export default Account;
