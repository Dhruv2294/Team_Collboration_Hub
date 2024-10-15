import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(); 
        navigate('/dashboard'); 
    };

    const handleGoToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="login"style={{marginLeft:"40%",marginTop:"10%"}}>

           <center>
           <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
           
            <button onClick={handleGoToDashboard} style={{ marginTop: '10px' }}>
                Back To Dashboard
            </button>
           </center>
        </div>
    );
};

export default Login;
