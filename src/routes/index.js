import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import SignIn from '@pages/SignIn';
import My from '@pages/My';
import Agreement from '@pages/SignUp/Agreement';
import Authentication from '@pages/SignUp/Authentication';
import Home from '@pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/my" element={<My />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up/agreement" element={<Agreement />}></Route>
      <Route path="/sign-up/authentication" element={<Authentication />}></Route>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  );
};

export default Router;
