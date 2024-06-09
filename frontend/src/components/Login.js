// frontend/src/components/Login.js
import React, { useRef } from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  //  const history = useHistory(); // Initialize useHistory
    const redirectToCreateCampaignRef = useRef(null); // Initialize useRef

    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
        // Handle login success (store token, redirect, etc.)
        redirectToCreateCampaignRef.current.click(); // Trigger the redirect
    };

    const handleLoginFailure = (response) => {
        console.error('Login Failed:', response);
    };

    return (
        <div className="container">
            <div className="form_container">
                <div className="title_container">
                    <h1 className="title">Login to your Account</h1>
                </div>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    className="sign-in_btn"
                />
                {/* Hidden link to trigger navigation */}
                <a
                    href="/create-campaign"
                    ref={redirectToCreateCampaignRef}
                    style={{ display: 'none' }}
                >
                    Navigate to Create Campaign
                </a>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Adjust as needed */
                }
                .form_container {
                    width: fit-content;
                    height: fit-content;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px; /* Increased gap */
                    padding: 50px 40px 40px 40px; /* Increased bottom padding */
                    background-color: skyblue; /* Changed to sky blue */
                    border: 2px solid black; /* Added black border */
                    border-radius: 11px;
                    font-family: "Inter", sans-serif;
                }
                .title_container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                }
                .title {
                    margin: 0;
                    font-size: 1.5rem; /* Increased font size */
                    font-weight: 700;
                    color: #212121; /* Changed text color */
                }
                .sign-in_btn {
                    width: 100%;
                    height: 40px;
                    border: 0;
                    background: #115DFC;
                    border-radius: 7px;
                    outline: none;
                    color: #ffffff;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Login;
