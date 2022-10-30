import React, { Component, useState, useEffect, useCallback}  from 'react';
import './buttons.css';

function Buttons(props) {

    const fetchRequest = useCallback(() => {
        fetch('http://localhost:8060/button?text='+props.name);
    });

  return (
    <button className="Buttons" onClick={fetchRequest}>{props.name}</button>
  );
}

export default Buttons;