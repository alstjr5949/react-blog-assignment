import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";

function App() {
  const [blogData, setBlogData] = useState({});
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const data = await (await fetch("data.json")).json();
    setBlogData(data);
    setUserData(data.users[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home blogData={blogData} userData={userData} />}
      />
      <Route path="/blog/:id" element={<BlogDetail blogData={blogData} />} />
    </Routes>
  );
}

export default App;
