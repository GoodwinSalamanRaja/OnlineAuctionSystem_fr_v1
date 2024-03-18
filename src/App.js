import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import HomePage from './HomePage';
import IndexPage from './IndexPage';
import AdminLogin from './AdminLogin';
import AdminIndex from './AdminIndex';
import ManageProduct from './ManageProduct';

function App() {
  return (
    <div>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<IndexPage />} />
           <Route path="/Login" element={<UserLogin />} />
           <Route path="/Register" element={<UserRegister />} />
           <Route path="/Home" element={<HomePage />} />
           <Route path="/AdminLogin" element={<AdminLogin />} />
           <Route path="/AdminIndex" element={<AdminIndex />} />
           <Route path="/ManageProduct/:productId" element={<ManageProduct />} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
