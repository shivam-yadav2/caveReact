import { useState } from "react";

import Profile from "./Profile/Profile";
// import Filter from "./Filter/Filter";
import Listing from "./Listing/Listing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          {/* <Route path="/filter" element={<Filter />} /> */}
          <Route path="/listing" element={<Listing />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
