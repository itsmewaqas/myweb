import React, { useState, useEffect } from 'react';

function Home() {

  const [profile, Setprofile] = useState({
    profilepic: require("../assets/img/logo.jpg"),
    name: 'Muhammad Waqas',
    email: 'muhammadwaqas642@gmail.com',
    cell: '+923222946642',
    location: 'Karachi Pakistan',
  });

  useEffect(() => {
  }, [])

  return (
    <section>
      <div className='homeContant' id="homeSec">
        <img src={profile.profilepic} alt='' />
        <h1> {profile.name}</h1>
        <ul>
          <li><a>{profile.email}</a></li>
          <li><a>{profile.cell}</a></li>
          <li><a>{profile.location}</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Home;



