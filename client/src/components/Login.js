import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Login = () => {
  let { login, isLogged } = useContext(GlobalContext);

  if (isLogged) {
    return <Redirect to='/expense-tracker' />;
  }

  const googleSuccess = (res) => {
    //console.log(res);
    const profile = res?.profileObj;
    const token = res?.tokenId;
    localStorage.setItem('profile', JSON.stringify({ profile, token }));
    login();
  };

  const googleFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId='794373979304-lbabur918bbqdmpdqmj95riklk0r29r5.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy='single_host_origin'
      />
    </div>
  );
};

export default Login;
