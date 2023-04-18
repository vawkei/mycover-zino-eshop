import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (     
  <Layout>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage/> } />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element ={<NotFound />} />
      <Route path='login' element={<LoginPage />} />
    </Routes>
  </Layout>
  );
}

export default App;
