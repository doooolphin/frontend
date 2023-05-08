import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import SignIn from '@pages/SignIn';
import Agreement from '@pages/SignUp/Agreement';
import Authentication from '@pages/SignUp/Authentication';
import NewNamePw from '@pages/SignUp/NewNamePw';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up/agreement" element={<Agreement />}></Route>
      <Route path="/sign-up/authentication" element={<Authentication />}></Route>
      <Route path="/sign-up/newnamepw" element={<NewNamePw />}></Route>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  );
};

export default Router;
