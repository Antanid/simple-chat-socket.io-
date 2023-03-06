import React from 'react';
import socket from '../socket';

const JoinBlock = () => {
  return (
    <div className="join-block">
    <input
    placeholder="Room ID"
    type='text'
    value=''
    />
     <input
    placeholder="Your name"
    type='text'
    value=''
    />
    <button className="btn btn-success">
      Sign in
    </button>
  </div>
  )
}

export default JoinBlock