import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import Form from '../components/Form'

const SingleDisplay = () => {

    const {pokemon} = useParams()
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pokemonAPI = `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`
    const pokemonAPIPageLimiter = `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&page=${currentPage}&pageSize=15`
    const pageLimit = Math.ceil(currentPokemon.length / 15)

    useEffect(() => {
        axios.get(pokemonAPI)
            .then(res => {
                setCurrentPokemon(res.data.data)
            })
            .catch(err => console.log(err))
    }, [pokemonAPI])
    console.log(currentPokemon)

    // GET CARDS IN CURRENT SET
    useEffect(() => {
        axios.get(pokemonAPIPageLimiter)
            .then(res => {
                setCurrentCards(res.data.data)
            })
            .catch(err => console.log(err))
    }, [pokemonAPIPageLimiter])


    const nextPage = () => {
        if(currentPage < pageLimit){
            setCurrentPage(currentPage => currentPage + 1)
        }
        else{
            console.log("You're at the last page!")
        }
    }
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage => currentPage - 1)
        }
        else{
            console.log("You're at the first page!")
        }
    }

    const overBackground = (e) => {
        e.target.style.boxShadow = '10px 10px 10px #03b7db'
    }

    const leaveBackground = (e) => {
        e.target.style.border = ''
        e.target.style.boxShadow = ''

    }

    // console.log(currentPokemon)
  return (
    <div>
        <Form/>
        <div id='pokemonCard' >
            {currentCards.map((card, i) => {
                return <Link key={i} to={`/${card.set.id}/` + card.id}><img onMouseOver={overBackground} onMouseLeave={leaveBackground}  id='card' src={card.images.small} alt="" /></Link>
                
            })}
        </div>
        
        <div id="buttons">
            <button className='btn btn-warning' onClick={prevPage}>Prev Page</button>
            <h4 className='pages'>{currentPage} of {pageLimit}</h4>
            <button className='btn btn-primary' onClick={nextPage}>Next Page</button>
        </div>
    </div>
  )
}

export default SingleDisplay