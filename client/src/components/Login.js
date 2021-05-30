import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Login = () => {
  let { userLogged, isLogged } = useContext(GlobalContext);

  if (isLogged) {
    return <Redirect to='/expense-tracker' />;
  }

  function responseGoogle(res) {
    userLogged();
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
        cookiePolicy='single_host_origin'
      />
    </div>
  );
};

export default Login;
