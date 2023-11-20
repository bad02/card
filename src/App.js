import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      });
  }, []);

  if (!userData.name) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="profile-card">
        <img src={userData.picture.large} alt="Profile Image" />
        <h2>{userData.name.title} {userData.name.first} {userData.name.last}</h2>
        <p>Email: {userData.email}</p>
        <p>Gender: {userData.gender}</p>
        <p>Phone Number: {userData.phone}</p>
      </div>
    </div>
  );
}

export default App;
