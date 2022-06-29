import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { signup } from "../../../actions/user.action";
import Input from "../../Input";

const SignUpForm = (props) => {

  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // for password show hide
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };



  const userSignup = () => {
    const user = { fullName, email, password };
    if (
      fullName === "" ||
      email === "" ||
      password === ""
    )
    {
      return;
    }
    dispatch(signup(user));
  }
  if(user.authenticate){
    return <Redirect to={"/"} />
  }
  // if(user.loading){
  //   return (
  //     <NotFound />
  //   )
  // }

  return (
    <>
      <form className="user-data-form " onSubmit={userSignup}>
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>FullName</label>
              <Input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
              />

              
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Email</label>
              <Input
                placeholder="Enter Your Email"
                name="email"
                value={email}
                type="text"
                onChange={(e)=>setEmail(e.target.value)}
              />

            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-50">
              <label>Password</label>
              <Input
                placeholder="Enter Password"
                name="password"
                value={password}
                type={passwordShown ? "text" : "password"}
                
                
                onChange={(e)=>setPassword(e.target.value)}
              />
              
              {/* End error msg */}
              <span
                className="placeholder_icon"
                onClick={togglePasswordVisiblity}
              >
                <span
                  className={
                    passwordShown ? "passVicon eye-slash" : "passVicon"
                  }
                >
                  <img src="images/icon/view.svg" alt="" />
                </span>
              </span>
              {/* End placeholder icon */}
            </div>
          </div>
          <div className="col-12">
            <div className="agreement-checkbox d-flex justify-content-between align-items-center sm-mt-10">
              <div className="position-relative">
                <input
                  name="acceptTerms"
                  type="checkbox"
                  
                  id="acceptTerms"
                 
                />

                <label htmlFor="acceptTerms">
                En cliquant sur "S'INSCRIRE", j'accepte les conditions générales 
                et la politique de confidentialité.
                </label>
                
              </div>
            </div>
            {/* /.agreement-checkbox */}
          </div>
          <div className="col-12">
            <button onClick={userSignup}
             className="theme-btn-one mt-30 mb-50"
              >
              Sign Up
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
