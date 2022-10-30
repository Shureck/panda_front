import React, { Component, useState, useEffect, useCallback}  from 'react';
import './buttons.css';

const ENDPOINT = process.env.HOST_ADR || "localhost:8060";

function Buttons(props) {

    const fetchRequest = useCallback(() => {
        fetch('http://'+ENDPOINT+'/button?text='+props.name);
    });

  return (
    <button className="Buttons" onClick={fetchRequest}>{props.name}</button>
  );
}

export default Buttons;