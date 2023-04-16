import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import NotFound from './pages/NotFound';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (    
  <Layout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage/> } />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='*' element ={<NotFound />} />
    </Routes>
  </Layout>
  );
}

export default App;
