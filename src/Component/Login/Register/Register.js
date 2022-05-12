import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Loading/Loading";

const Register = () => {
    const [name, setName] = useState("");
    const [agree, setAgree] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    

 

  const navigateLogin = () => {
    navigate("/login");
  };

  if(user){
    navigate(from, {replace: true});
}
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if(loading || updating){
    return<Loading></Loading>
}


  const handleRegister = async (event) => {
    event.preventDefault();
    
   
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name});
          alert('Updated profile');
          
    
  };

  return (
    <div>
      <h2 className="text-primary text-center mt-5 mb-5">Please Register</h2>
      <div className="container w-50 mx-auto">
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicText">
            
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              required
            />
           
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
           
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
         

          <Form.Group  className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={` ${agree ? 'text-success' : 'text-danger'}`} label="Accept Alex stone terms and Condition" />
           
          </Form.Group>
          <Button
          disabled={!agree}
            className="w-50 mx-auto btn btn-primary d-block"
            variant="primary"
            type="submit"
            onClick={() => createUserWithEmailAndPassword(email, password)}
          >
            Register
          </Button>
        </Form>
        {errorElement}
        <p>
          Already Registered?{" "}
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;