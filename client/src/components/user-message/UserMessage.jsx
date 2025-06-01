import { useEffect } from "react";
import "./userMessage.css";

function userMessage({ userMessage, setUserMessage }) {
  useEffect(() => {
    setTimeout(() => {
      setUserMessage("");
    }, 2000);
  }, [userMessage]);
  return <span className="user-message">{userMessage}</span>;
}

export default userMessage;
