// Auth.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './auth.css';
function Auth() {

  
      const dispatch =  useDispatch();
      const history = useHistory();

    const googleSuccess = async (credentialResponse) => {
        // Decode the ID token from Google response
        const userObject = jwt_decode(credentialResponse.credential);
        // console.log('Google Sign In Success:', userObject);

           const result = userObject;
           const token = userObject.jti;
        try {
            
    dispatch({type:"AUTH" , data :{result,token}})
    history.push('/Auth');
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log('Google Sign In Error:', error);
    };

    return (
        <GoogleOAuthProvider clientId="122376577854-hggpthcj13dqok4qq41ppc64u13fe5kq.apps.googleusercontent.com">
            <div className='googlelg'>
                    <h1>MemoraVerse</h1>
               <div className="containerg">
                <center><h2>Log In</h2></center>
                
                    {/* https://console.cloud.google.com/apis/credentials?authuser=1&project=ticktick-435819 */}
                    <center>
                    <GoogleLogin
                    onSuccess={googleSuccess}
                    onError={googleFailure}
                    useOneTap
                    />
                    </center>
                    <p>Your Memories, Your Story</p>
                  </div>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Auth;
