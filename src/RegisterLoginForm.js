import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectNav} from './actions/navActions';
import {RegisterFunction, LoginFunction} from './APIs/userAPIs';
import { useHistory } from "react-router-dom";
import {register_login} from './actions/isLoggedActions';
import {alertSuccess, alertError } from './actions/alertActions';
import {addToSuite} from './actions/suiteActions';


import './RegisterLoginForm.css'

function RegisterLoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const alert = useSelector(st => st.alerts)

  const login = {
    username: '',
    password: ''
  }

  const register = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    banking: false,
    business: false,
    islamic: false
  }

  const [formView, setFormView] = useState('login')
  const [form, setForm] = useState(login);

  console.log(formView)

  useEffect(() => {
    dispatch(selectNav('LOGINPAGE'))
  }, [])

  const loginSetup = () => {
    setFormView('login');
    setForm(login)
  }

  const registerSetup = () => {
    setFormView('register');
    setForm(register)
  }
  


  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(f => ({
      ...f,
      [name]: value
    }));
  }

  const handleSubmit = async evt => {
    evt.preventDefault();
    let data = {};
    if (formView === 'login') {
      const {username, password} = form
      data = {...data, username, password}

      try {
        let res = await LoginFunction(data);
        dispatch(register_login(res.data));
            dispatch(alertSuccess('You successfully logged in!'))
            dispatch(addToSuite(res.data.user))
            history.push('/account')
        return
      }
   catch(e) {
    dispatch(alertError('Oh no! Username or password incorrect. Please try again.'))

     console.log(e)
     history.push('/register-login')
return
   }  


    } else if (formView === 'register') {
      const {first_name, last_name, email, username, password, banking, business, islamic} = form
      data = {...data, first_name, last_name, email, username, password}
      const suiteArr = [{"banking": banking}, {"business": business}, {"islamic" :islamic}]

      for (let x of suiteArr) {
        let formObj = {...x};
        if (Object.values(formObj)[0] === 'on') {
          formObj[Object.keys(formObj)[0]] = true
          data = {...data, ...formObj}
        } else if (Object.values(formObj)[0] !== 'on') {
          data = {...data, ...formObj}
        }
         
      }
    }
    
    try {
      let res = await RegisterFunction(data);
      dispatch(register_login(res.data));
      dispatch(alertSuccess('You successfully created a new account!'));
      dispatch(addToSuite(res.data.user))

      history.push('/account')
    }
 catch(e) {
  console.log(e)
  dispatch(alertError('Oh no! We could not create your account. Please try again.'))
  history.push('/register-login')
 }    
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
        <div className="col-12">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a onClick={() => loginSetup()} className="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item">
    <a onClick={() => registerSetup('register')} className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
  <div className="card">
  <div className="card-body">
  <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Login
              </button>
            </form>

{alert.message !== '' ? 
<div className={alert.messageType === 'SUCCESS' ? 'alert alert-sucess' : 'alert alert-danger'} role="alert">
  {alert.message}
</div> :
<div></div>
}
            
          
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
  <div className="card">
  <div className="card-body">
  <form onSubmit={handleSubmit}>
  <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  value={form.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  value={form.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={form.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Options (at least 1 required)</label>
                <div class="form-check">
                  <input className="form-check-input" name="banking" type="checkbox" checked={form.banking}
                  onChange={handleChange} id="banking"/>
                    <label className="form-check-label" for="banking">
                    Banking
                    </label>
                    </div>
                    <div class="form-check">
                  <input className="form-check-input" name="business" type="checkbox" checked={form.business}
                  onChange={handleChange} id="business"/>
                    <label className="form-check-label" for="business">
                    Business Management (eBay)
                    </label>
                    </div>
                    <div class="form-check">
                  <input className="form-check-input" name="islamic" type="checkbox" checked={form.islamic}
                  onChange={handleChange} id="islamic"/>
                    <label className="form-check-label" for="islamic">
                    Islamic Tools (Zakat Calculator, Inheritance Calculator)
                    </label>
                    </div>
                
                  
              </div>
              <button
                type="submit"
                className="btn btn-primary float-right"
              >
                Register
              </button>
            </form>

            {alert.message !== '' ? 
<div className={alert.messageType === 'SUCCESS' ? 'alert alert-sucess' : 'alert alert-danger'} role="alert">
  {alert.message}
</div> :
<div></div>
}
  </div>
</div>
    </div>
</div>
        </div>
      </div>
    </div>
 
  );
}

export default RegisterLoginForm;
