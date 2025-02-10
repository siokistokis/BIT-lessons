import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './CodeVerification.css';

function CodeVerification() {
    const [countryCode, setCountryCode]=useState('+1');
    const [phoneNumber, setPhoneNumber]=useState('');
    const [otp, setOtp]= useState('');
    const [otpSent, setOtpSent]= useState(false);
    const navigate = useNavigate();

    //simulate sending otp
    const handleSendOtp= () => {
        if (phoneNumber) {
            setOtpSent(true);
            alert(`OTP Sent to ${countryCode} ${phoneNumber}`);

        }
    }; 
    //simulate otp varification
    const handleVerifyOtp=() => {
        if (otp==='123456') {
            alert('Phone number verfyed');
            navigate('/Public');
        } else {
            alert('ivalid Otp');

        };

        return(
            <div className="code-container">
                <h2>Verify Your Phone Numbert</h2>

                {!otpSent ? (
                    <div className="phone-input">
                        <label>Country Code:</label>
                        <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                        <option value="+1">🇺🇸 +1 (USA)</option>
                        <option value="+44">🇬🇧 +44 (UK)</option>
                        <option value="+91">🇮🇳 +91 (India)</option>
                        <option value="+254">🇰🇪 +254 (Kenya)</option>
                        <option value="+61">🇦🇺 +61 (Australia)</option>
                        <option value="+370">🇦🇺 +370 (Lithuania)</option>
                        </select>
                        
                        <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        />

                        <button className="send-otp-button" onClick={handleSendOtp}>Send OTP</button>
                    </div>
                  ) : (
                    <div className="otp-input">
                        <p>Enter the OTP sent to {countryCode} {phoneNumber}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength="6"
            required
          />
          <button onClick={handleVerifyOtp} className="verify-otp-button">Verify & Sign In</button>
                    </div> 
                )}
            </div>
        );
    }

}  

export default CodeVerification;