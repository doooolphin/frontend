import { Routes, Route } from 'react-router-dom';
import Main from '@pages/Main';
import SignIn from '@pages/SignIn';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="*" element={<Main />}></Route>
    </Routes>
  );
};

export default Router;
