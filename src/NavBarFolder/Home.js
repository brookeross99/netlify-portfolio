import React, {useState, useEffect} from 'react';
import './Home.css'
import headshot from './headshot.jpg'
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa';

function Home() {
  // Hobbies state and useEffect
  const [currentHobby, setCurrentHobby] = useState(0)
  const hobbies = ['an avid foodieð', 'a plant mom to 60 plants and growing ð±', 'an adventurist at heart â°ï¸','a rock climber always striving to send a harder project! ðª¨ ', 'a guitarist, pianist, percussionist, oboist, vocalist... you get the point! ðµ','a cat mom ðââ¬','a fan of too many movies and tv shows to list! ð¥']

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHobby((currentHobby + 1) % hobbies.length);
    }, 3500); // change the interval time to suit your needs

    return () => clearInterval(intervalId);
  }, [currentHobby, hobbies.length]);

  // Image moving/click event state
  const [isBouncing, setIsBouncing] = useState(false);
  
  const handleImageClick = () => {
    setIsBouncing(!isBouncing);
  }

  return (
  <section id="home">
    {/* <h1> HOME Section Here </h1> */}
    <h1> Hi there! My name is Brooke</h1>
    <h1> I am a software developer with a background in K-12 Music Education </h1>
    <h2> I am also {hobbies[currentHobby]} </h2>
    <img src={headshot} alt="headshot"  onClick={handleImageClick} className={isBouncing ? "bouncing" : ""}/>
    <div style={{ marginTop: "20px" }}>
      <a href="https://www.linkedin.com/in/brooke-ross-se/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/brookeross99" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://medium.com/@brooke.ross2800" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
    </div>
  </section>
  );
}

export default Home;