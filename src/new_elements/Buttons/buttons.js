import React, { Component, useState, useEffect, useCallback}  from 'react';
import './buttons.css';

const ENDPOINT = process.env.REACT_APP_API_URL || "localhost:8060";
const tt = process.env.REACT_APP_API_URL !== undefined ? "https://" : "http://";
function Buttons(props) {

    const fetchRequest = useCallback(() => {
        fetch(tt+ENDPOINT+'/api/button?text='+props.name);
    });

  return (
    <button className="Buttons" onClick={fetchRequest}>{props.name}</button>
  );
}

export default Buttons;