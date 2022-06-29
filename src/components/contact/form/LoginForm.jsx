import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../actions";
import Input from '../../Input';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  //const[error, setError] = useState('');

  const auth = useSelector(state => state.auth);
  
  const dispatch = useDispatch();


  const userLogin = (e)=> {

    e.preventDefault();
    
    const user = {
      email, password
    }
    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={'/'} />
  }
  // for password show hide
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // for validation

  // get functions to build form with useForm() hook

  

  return (
    <>
      <form onSubmit={userLogin} className="user-data-form ">
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-80 sm-mb-70">
              <label>Email</label>
              <div className="materialInput">
              <Input 
                placeholder="Enter Your Email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required              />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <Input className="materialInput"
                placeholder="Enter Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />
                <div className="invalid-feedback">
                </div>
              
              <span
                className="placeholder_icon"
                onClick={togglePasswordVisiblity}
              >
                <span
                  className={
                    passwordShown ? "passVicon eye-slash" : "passVicon"
                  }
                >
                  <img src="images/icon/view.svg" alt="ico" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Keep me logged in</label>
              </div>
            </div>
            {/*  /.agreement-checkbox */}
          </div>
          <div className="col-12">
            <button className="theme-btn-one mt-50 mb-50" onClick={userLogin}>Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
