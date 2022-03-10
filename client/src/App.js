import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/StoreOwner/Dashboard/Dashboard";
import LoginOrSignup from "./screens/StoreOwner/LoginAndSignup/LoginOrSignup";
import AllStores from "./screens/User/AllStores/AllStores";
import Store from "./screens/User/Store/Store";
import UserHome from "./screens/User/UserHome/UserHome";


function App() {
  return (
    <Routes>
      <Route path="/" element={<UserHome/>} />
      <Route path="/all-stores" element={<AllStores/>} />
      <Route path="/store/:storeid" element={<Store/>} />
      {/* store owner */}

      <Route path="/store-owner/:storeid" element={<Dashboard/>} />
      <Route path="/store-owner/login" element={<LoginOrSignup/>} />

    </Routes>
  
  );
}

export default App;
