import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.css';

function SignIn() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Redirect user to the code page
    const handleRedirectToCodePage = () => {
    navigate('/code');

  };

  // Handle email sign-in submission
    const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      handleRedirectToCodePage();
    }
  };

    return (
        <div className="signin-container">
            <form onSubmit={handleSubmit}>
                <h2>WELCOME</h2>
                <p id="paragraph">Login to continue</p>
                <button type="button" className="google-signin" onClick={handleRedirectToCodePage}>Continue with Google</button>
                <button type="button" className="apple-signin" onClick={handleRedirectToCodePage}>Continue with Apple</button>
                <hr className="divider"/>
                <input type="email" placeholder="Enter your e-mail" value={email} onChange={(e)=> setEmail(e.target.value)} required/> 
                <button type="submit" className="signin-button">Continue</button>

                <Link to="/" className="back-link">Back to home</Link>

            </form>
        </div>
    )
}
export default SignIn;