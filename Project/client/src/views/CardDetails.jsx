import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


const CardDetails = () => {
    const {pokeSet, cardId} = useParams()
    const [card, setCard] = useState('')
    const [myCard, setMyCard] = useState([])
    const [image, setImage] = useState('')
    const oneCardApi = `https://api.pokemontcg.io/v2/cards?q=id:${cardId}`
    const saveCardAPI = 'http://localhost:8000/api/myCards'
    const myCardAPI = `http://localhost:8000/api/myCards/${cardId}`
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(oneCardApi)
            .then(res => {
                setCard(res.data.data[0])
                setImage(res.data.data[0].images.large)
            })
        axios.get(myCardAPI)
            .then(res => 
              setMyCard(res.data))
    }, [oneCardApi, myCardAPI])
    
    console.log(image)

    const saveCard = (e) => {
      e.preventDefault();
      axios.post(saveCardAPI, {
        pokeSet, cardId, image
        })
          .then(res => 
            navigate('/myCards'))
          .catch(err => console.log(err))
    }
    
    var name;

    (card)
    ?
    name = card.name.split(" ")[0]
    :
    console.log('Loading...')

    if(card.name === "Galarian Mr. Mime"){
      name = "Mr-Mime"
    } else if(card.name === "Galarian Mr. Rime"){
      name = "Mr-Rime"
    } else if(name === "Farfetch'd"){
      name = name.replace("'", "")
    } else if(card.name === "Galarian Sirfetch'd" || card.name === "Galarian Farfetch'd"){
      name = card.name.split(" ")[1].replace("'", "")
    } else if(name === 'Mr.'){
      name = card.name.replace(".", "").replace(" ", "-")
    } else if(name === "Lt."){
      name = card.name.split(" ")[2]
    } else if(name === "Blaine's" || name === "Light" || name === "Brock's" || name === "Giovanni's" || name === "Koga's" || name === "Erika's" || name === "Misty's" || name === "Rocket's" || name === "Dark" || name === "Sabrina's" || name === "_____’s" || name === "_____'s" || name === "Shining" || name === "Rocket’s" || name === "Flying" || name === "Surfing" || name === "Galarian"){
      name = card.name.split(" ")[1]
    } else if(name === "M"){
      name = card.name.split(" ")[1].slice(0, -3)
    } else if(name === "Shadow" || name === "Ice" || name === "Team"){
      name = card.name.split(" ")[2]
    } else if(card.name === "Tapu Fini" || card.name === "Tapu Koko" || card.name === "Tapu Bulu" || card.name === "Tapu Lele"){
      name = card.name.replace(" ", "-")
    } else if(name === "Tapu"){
      name = card.name.slice(0, -3).replace(" ", "-")
    } else if(name === "Rapid"){
      name = "Urshifu-rapid-strike"
    } else if(name === "Single"){
      name = "Urshifu-single-strike"
    }

    let lowerName;
    (name)
    ?
    lowerName = name.toLowerCase()
    :
    console.log("Generating lowercase name...")
    
  return (
    <div id='mainPage'>
      <div id='container'>
          
          {
            (card)
            ?
            <div id="cardBox">
              <div className="leftSide">
                <img id='bigCard' src={card.images.small} alt="" /> 
                {
                  card.supertype === 'Pokémon'
                  ?
                  <Link style={{textDecoration: 'none'}} to={`/pokedex/${lowerName}`}><button className='btn btn-info' style={{color: 'white', fontFamily: 'sans-serif'}}>Find {name} in the Pokedex</button></Link>
                  :
                  null
                }
                {
                  myCard && cardId
                  ?
                    myCard.cardId === cardId 
                    ?
                    <button className='btn btn-secondary' style={{fontSize: 24, width: 240, margin: 15, cursor: 'default'}}><b>You have this card!</b></button>
                    :
                    <form onSubmit={saveCard}>
                      <input type="hidden" value={pokeSet}/>
                      <input type="hidden" value={cardId}/>
                      <input type="hidden" value={image}/>
                      <button className='btn btn-success' style={{width: 275,color: 'white', fontFamily: 'sans-serif', marginLeft: 0, marginTop: 15, letterSpacing: -0.5}}>Add {card.name} to your Collection!</button>
                    </form>
                  :
                  <form onSubmit={saveCard}>
                    <input type="hidden" value={pokeSet}/>
                    <input type="hidden" value={cardId}/>
                    <input type="hidden" value={image}/>
                    <button className='btn btn-success' style={{width: 275,color: 'white', fontFamily: 'sans-serif', marginLeft: 0, marginTop: 15, letterSpacing: -0.5}}>Add {card.name} to your Collection!</button>
                  </form>
                }
              </div>
              <div className="rightSide">
                <div className="nameBox">
                  <div className="topBox">
                    <h2 style={{letterSpacing: -2}}>{card.name}</h2>
                  </div>
                  <div className="bottomBox">
                    <div className="upper">
                      <h5><b>{card.supertype} - {card.subtypes[0]}</b></h5>
                      {
                        (card.hp)
                        ?
                        <div className="hp">
                          <h4><b>HP</b></h4>
                          <h3><b>{card.hp}</b></h3>
                          {
                            card.types
                            ?
                            card.types.map((type, i) => {
                              return <div key={i} className={`icon-${type}`} alt="" />
                            })
                            :
                            null
                          }
                        </div> : null
                      }
                      
                    </div>
                    <div className="lower">
                      {
                        (card.evolvesFrom)
                        ?
                        <h5 >Evolves From: <Link style={{textDecoration: 'none'}} to={`/card/` + card.evolvesFrom.replace(/\s/g, '*')}><b>{card.evolvesFrom}</b></Link></h5>
                        :
                        null
                      }
                    </div>
                  </div>
                </div>
                <div className="cardInfo">
                  {
                    (card.rules && card.abilities)
                    ?
                    <>
                      <p><em>{card.rules[0]}</em></p>
                      <h6><b><em><u>{card.abilities[0].type} - {card.abilities[0].name}</u></em></b></h6>
                      <p><em>{card.abilities[0].text}</em></p>
                      <br/>
                    </>
                    : 
                      (card.abilities)
                      ?
                      <>
                        <h6><b><em><u>{card.abilities[0].type} - {card.abilities[0].name}</u></em></b></h6>
                        <p><em>{card.abilities[0].text}</em></p>
                        <br/>
                      </>
                      : 
                        (card.rules)
                        ?
                        <>
                          <p><em>{card.rules[0]}</em></p>
                        </>
                        :
                        null
                  }
                  {
                    card.attacks
                    ?
                    card.attacks.map((attack, i) => {
                      return <div key={i} className="attacks">
                          <div className="upper">
                            <div className="attackCost">
                              {
                                attack.cost.map((type, i) => {
                                  return <div style={{marginLeft: 6}} key={i} className={`icon-${type}`}></div>
                                })
                              }
                              <h5 style={{marginLeft: 15}}><b>{attack.name}</b></h5>
                            </div>
                            <h5>{attack.damage}</h5>
                          </div>
                          <p><em>{attack.text}</em></p>
                          <br/>
                        </div>
                    })
                    :
                    null
                  }
                </div>
                <div className="bottomInfo">
                {
                    (card.supertype === 'Pokémon') 
                    ?
                    <div className='info'>
                      <div className="flexMe">
                        <div className="weaknessInfo">
                          <h5>Weakness</h5>
                          {
                            card.weaknesses
                            ?
                            <div className='bottomIcons'>
                              <div className={`icon-${card.weaknesses[0].type}`}/>
                              <h4>{card.weaknesses[0].value}</h4>
                            </div>
                            :
                            null
                          }
                          
                        </div>
                        <div className="weaknessInfo">
                          <h5>Resistance</h5>
                          {
                            card.resistances
                            ?
                            <div className='bottomIcons'>
                              <div className={`icon-${card.resistances[0].type}`}/>
                              <h4>{card.resistances[0].value}</h4>
                            </div>
                            :
                            null
                          }
                        </div>
                        <div className="weaknessInfo">
                          <h5>Retreat Cost</h5>
                          {
                            card.retreatCost
                            ?
                            <div className='bottomIcons'>
                              {
                                card.retreatCost.map((retreat, i) => {
                                  return <div key={i} className={`icon-${retreat}`}/>
                                })
                              }
                            </div>
                            :
                            null
                            }
                        </div>
                      </div>
                      <div className="setInfo">
                        <div className="infoLeft">
                          <h5><b><Link style={{textDecoration: 'none'}} to={`/${pokeSet}`}>{card.set.name}</Link></b></h5>
                          <h5>{card.number}/{card.set.total} <em>{card.rarity}</em></h5>
                        </div>
                        <div className="infoRight">
                            <img id='setImg' src={card.set.images.symbol} alt="" />
                        </div>
                      </div>
                    </div>
                    :
                    null
                  }
                    
                </div>
              </div>
            </div>
            :
            null
          }
      </div>
    </div>
  )
}

export default CardDetails