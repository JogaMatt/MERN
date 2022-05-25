import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MyCards = () => {
  const [myCards, setMyCards] = useState([])
  const pageSize = 15
  const [currentPage, setCurrentPage] = useState(1)
  const myCardsAPI = 'http://localhost:8000/api/myCards'

  const pageLimit = Math.ceil(myCards.length / pageSize)
  const nextPage = () => {
      if(currentPage < pageLimit){
          setCurrentPage(currentPage + 1)
      }
      else{
          console.log("You're at the last page!")
      }
  }
  const prevPage = () => {
      if(currentPage > 1){
          setCurrentPage(currentPage - 1)
      }
      else{
          console.log("You're at the first page!")
      }
  }



  useEffect(() => {
    axios.get(myCardsAPI)
      .then(res => setMyCards(res.data))
      .catch(err => console.log(err))
  }, [myCardsAPI])

  const overBackground = (e) => {
    e.target.style.boxShadow = '10px 10px 10px #03b7db'
    e.target.style.marginTop = '-3px'
  }

  const leaveBackground = (e) => {
      e.target.style.boxShadow = ''
      e.target.style.marginTop = ''
  }

  console.log(myCards)
  return (
    <div id='container'>
        <div id="pokemonCard">
          {
            myCards
            ?
            myCards.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((card, i) => {
              return <Link key={i} to={`/${card.pokeSet}/${card.cardId}`}><img  onMouseOver={overBackground} onMouseLeave={leaveBackground} id='card' src={card.image} alt="" /></Link>
            })
            :
            console.log("Loading...")
          }
          <div id="buttons">
            <button className='btn btn-warning' onClick={prevPage}>Prev Page</button>
            <h4 className='pages'>{currentPage} of {pageLimit}</h4>
            <button className='btn btn-primary' onClick={nextPage}>Next Page</button>
          </div>
        </div>
    </div>
  )
}

export default MyCards