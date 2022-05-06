import React, {useState} from 'react'


//     HANDLING VALIDATIONS
const MovieForm = (props) => {
        const [title, setTitle] = useState("");
        const [titleError, setTitleError] = useState("");
        
        const handleTitle = (e) => {
            setTitle(e.target.value);
            if(e.target.value.length < 1) {
                setTitleError("Title is required!");
            } else if(e.target.value.length < 2) {
                setTitleError("Title must be 2 characters or longer!");
            } else {
                setTitleError("")
            }
        }
        
    
        
        return (
        <fieldset>
            <legend>MovieForm.jsx</legend>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={ handleTitle } />
                    {
                        titleError ?
                        <p style={{color:'red'}}>{ titleError }</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create Movie" />
            </form>
        </fieldset>
            
        );
    }
    

export default MovieForm