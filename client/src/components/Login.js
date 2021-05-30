import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = () => {
  function responseGoogle(res) {
    console.log(res);
    console.log(res.profileObj);
  }
  return (
    <div>
      <GoogleLogin
        clientId='794373979304-lbabur918bbqdmpdqmj95riklk0r29r5.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
