import "./App.css";
import { useState, useEffect } from "react";
import { HomePage, AboutPage, PostsPage, PostPage, Auth } from "./page";
import { Layout } from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, []);
  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {user && (
            <Route
              index
              path=""
              element={<HomePage logout={() => setUser(false)} />}
            />
          )}
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          {!user && (
            <Route
              path="auth"
              element={<Auth authenticate={() => setUser(true)} />}
            />
          )}
          {user && <Route path="posts/:id" element={<PostPage />} />}
          <Route path="*" element={<Navigate to={user ? "/" : "/auth"} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
