import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const MainPage = () => {

  const overBackground = (e) => {
    e.target.style.boxShadow = '10px 10px 10px #03b7db'
    e.target.style.marginTop = '-30px'
  }

  const leaveBackground = (e) => {
      e.target.style.boxShadow = ''
      e.target.style.marginTop = ''
  }

  
  return (
    <div id='containerMain'>
      <div className="video" style={{display: 'flex', justifyContent: 'center', backgroundColor: 'black'}}>
        <video autoPlay loop muted src='https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/header/en-us/brilliant-stars-large.mp4'/>
      </div>
      <div className="dividerBig" style={{width: 'inherit', height: 30 ,backgroundColor: '#fdf4f8'}}></div>
      <main className="bottomMain">
        <div style={{margin: 'auto', width: 600, marginBottom: 15}} className="bannerImg">
          <img style={{width: 600}} src='https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/logos/en-us/swsh09-logo.png' alt="" />
        </div>
        <Link to={'/swsh9'} style={{textDecoration: 'none'}}><button id='expansionBtn' className='btn btn-dark'><em>Go to the expansion page</em></button></Link>
        <div className="vstar" style={{display: 'flex', justifyContent: 'center', marginTop: 275}}>
          <Link to={'/swsh9/swsh9-123'}><img className='arceus' style={{width: 400, borderRadius: 10, marginRight: 100}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_123.jpg" alt="" /></Link>
          <div className="description" style={{width: 600, marginTop: 100}}>
            <img style={{width: 300, marginLeft: 145}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/logos/en-us/vstar-logo.png" alt="" />
            <div className="divider" style={{width: 'inherit', height: 15 ,backgroundColor: '#fdf4f8'}}></div>
            <h5 style={{color: '#fdf4f8', textAlign: 'center', marginTop: 60}}>The shining stars of this Pokémon TCG expansion are undeniably the Pokémon VSTAR. Each one has a VSTAR Power, a special attack or Ability that can drastically alter the course of a battle. But choose your moment wisely, because each player can only use one VSTAR Power during the entire game!</h5>
          </div>
        </div>
        <div className="dividerBig" style={{width: 'inherit', height: 30 ,backgroundColor: 'black', marginTop: 45}}></div>
        <div style={{backgroundColor: '#f6f7f7', height: 1120}} className="trainerGallery">
          <div style={{display: 'flex', justifyContent: 'center'}} className="starDivider">
            <img style={{width: 750, marginTop: 40}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/global/star-divider.png" alt="" />
          </div>
          <div className="trainerInfo">
            <h1 style={{fontSize: 36, color: '#0a1045', fontFamily: 'serif', textAlign: 'center', marginTop: 70, marginBottom: 45, letterSpacing: -2}}><b>TRAINER GALLERY CARDS</b></h1>
            <h5 style={{width: 1200, textAlign: 'center', margin: 'auto', lineHeight: 1.5}}>Celebrate the incredible connection between Trainers and their Pokémon with the Trainer Gallery subset. Among the star Trainers are two of the Pokémon world's favorite rivals—Blue and his electrifying Jolteon, and N and Zekrom. Karen of the Elite Four also puts in an appearance with the mysterious Moonlight Pokémon, Umbreon VMAX.</h5>
            <div className="cardImg" style={{width: 1000, margin: 'auto', marginTop: 70}}>
              <Link to={'/swsh9tg/swsh9tg-TG04'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300, marginRight: 50}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_4.jpg" alt="" /></Link>
              <Link to={'/swsh9tg/swsh9tg-TG05'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300, marginRight: 50}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_5.jpg" alt="" /></Link>
              <Link to={'/swsh9tg/swsh9tg-TG23'}><img onMouseOver={overBackground} onMouseLeave={leaveBackground} style={{borderRadius: 10, width: 300}} src="https://tcg.pokemon.com/assets/img/expansions/brilliant-stars/cards/en-us/SWSH09_EN_TG_23.jpg" alt="" /></Link>
            </div>
            <div className="trainerButton" style={{width: 293, margin: 'auto', marginTop: 45}}>
              <Link to={'/swsh9tg'} style={{textDecoration: 'none'}}><button className='btn btn-dark'><em>Go to the expansion page</em></button></Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainPage