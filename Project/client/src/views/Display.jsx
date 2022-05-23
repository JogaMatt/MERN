import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import Form from '../components/Form'

const Display = () => {
    const {pokeSet} = useParams()
    const [currentSet, setCurrentSet] = useState([])
    const [currentCards, setCurrentCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const api = `https://api.pokemontcg.io/v2/sets/${pokeSet}`
    const cardAPI = `https://api.pokemontcg.io/v2/cards?q=set.id:${pokeSet}&page=${currentPage}&pageSize=15`

    const pageLimit = Math.ceil(currentSet.total / 15)
    

    // GET SET INFO
    useEffect(() => {
        axios.get(api)
            .then(res => {
                setCurrentSet(res.data.data)
                setCurrentPage(1)
            })
            .catch(err => console.log(err))
    }, [api])

    // GET CARDS IN CURRENT SET
    useEffect(() => {
        axios.get(cardAPI)
            .then(res => {
                setCurrentCards(res.data.data)
            })
            .catch(err => console.log(err))
    }, [cardAPI])


    const nextPage = () => {
        if(currentPage < pageLimit){
            setCurrentPage(currentPage => currentPage + 1)
            console.log(cardAPI)
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

  return (
    <div >
        <Form/>
        <div id='pokemonCard' >
            {currentCards.map((card, i) => {
                return <Link key={i} to={`/${pokeSet}/${card.id}`}><img  onMouseOver={overBackground} onMouseLeave={leaveBackground} id='card' src={card.images.small} alt="" /></Link>
                
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

export default Display