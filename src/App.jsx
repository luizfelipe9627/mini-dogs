import React from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default App;
