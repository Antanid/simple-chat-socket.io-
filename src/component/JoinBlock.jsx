import axios from "axios";
import React, { useState } from "react";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(true);

  const onChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };
  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onEnter = async () => {
    if (!roomId || !userName) {
      alert("Вы не заполнили все поля");
    }
    try {
      setLoading(false);
      const obj = {
        roomId,
        userName,
      }
      await axios
        .post("/rooms", obj)
        .then(onLogin(obj));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="join-block">
      <input onChange={onChangeRoomId} placeholder="Room ID" type="text" value={roomId} />
      <input onChange={onChangeName} placeholder="Your name" type="text" value={userName} />
      <button disabled={!isLoading} onClick={onEnter} className="btn btn-success">
        {isLoading ? "Sign in" : "Waiting..."}
      </button>
    </div>
  );
};

export default JoinBlock;
