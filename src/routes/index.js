import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import SignIn from '@pages/SignIn';
import SignUpAgreement from '@pages/SignUp/SignUp.agreement';
import SignUpAuthentication from '@pages/SignUp/SignUp.authentication';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up-agreement" element={<SignUpAgreement />}></Route>
      <Route path="/sign-up-authentication" element={<SignUpAuthentication />}></Route>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  );
};

export default Router;
