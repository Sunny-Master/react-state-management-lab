// src/App.jsx

import { useState } from "react";
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  function calcTotalStrength(copyTeam) {
    return(copyTeam.reduce((accStrength, fighter) => {
      return(accStrength + fighter.strength)
    }, 0))
  }

  function calcTotalAgility(copyTeam) {
    return(copyTeam.reduce((accAgility, fighter) => {
      return(accAgility + fighter.agility)
    }, 0))
  }

  function handleAddFighter(idx) {
    if (money - zombieFighters.at(idx)['price'] < 0) {
      console.log('Not enough money!!')
      return
    }
    const copyTeam = [...team, zombieFighters.at(idx)]
    const teamStrength = calcTotalStrength(copyTeam)
    const teamAgility = calcTotalAgility(copyTeam)
    setMoney(money - zombieFighters.at(idx)['price'])
    setTeam(copyTeam)
    setTotalStrength(teamStrength)
    setTotalAgility(teamAgility)
  }

  function handleRemoveFighter(idx) {
    const copyTeam = [...team]
    copyTeam.splice(idx, 1)
    const teamStrength = calcTotalStrength(copyTeam)
    const teamAgility = calcTotalAgility(copyTeam)
    setMoney(money + team.at(idx)['price'])
    setTeam(copyTeam)
    setTotalStrength(teamStrength)
    setTotalAgility(teamAgility)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
      {team.length === 0 && <p>Pick some team members!</p>}
      <ul>
        {team.map((fighter, index) => (
          <li key={index}>
            <li><img src={fighter.img} alt={fighter.name} /></li>
            <li>{fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <li>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          </li>
        ))}
      </ul>
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
            <li key={index}>
              <li><img src={zombieFighter.img} alt={zombieFighter.name} /></li>
              <li>{zombieFighter.name}</li>
              <li>Price: {zombieFighter.price}</li>
              <li>Strength: {zombieFighter.strength}</li>
              <li>Agility: {zombieFighter.agility}</li>
              <li>
                <button onClick={() => handleAddFighter(index)}>Add</button>
              </li>
              {(money - zombieFighter.price < 0) && <li>(Not enough money)</li>}
            </li>
        ))}
      </ul>
    </>
  );
}

export default App
