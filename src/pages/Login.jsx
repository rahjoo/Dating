import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BASE_URL from "../config";

import HeartIcon from "../components/icons/Heart";

const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const navigate = useNavigate();

  const viewPortHeight = window.Telegram.WebApp.viewportHeight;

  const autoLogin = () => {
    const queryString = window.Telegram.WebApp.initData;

    var newHeader = new Headers();
    newHeader.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      check_value: queryString,
    });

    var requestOptions = {
      method: "POST",
      headers: newHeader,
      body: raw,
      redirect: "follow",
    };

    fetch(BASE_URL + "/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setIsLoggingIn(false);
        if (result.success) {
          localStorage.setItem("userDatingToken", result.token);
          navigate("/home");
        } else {
          navigate("/signup");
        }
        window.Telegram.WebApp.expand();
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    autoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ height: viewPortHeight }}
      className="text-white flex items-center justify-center relative"
    >
      {isLoggingIn && <HeartIcon styles="w-9 h-9 animate-ping text-red-600" />}
    </div>
  );
};

export default LoginPage;
