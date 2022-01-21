import React from 'react'
import memesData from './memesData.js'

export default function Middle () {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        imgUrl: ''
    })   
     const [memeData, setMemeData] = React.useState(memesData)
    


    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevMeme => {
            return {...prevMeme,
                    imgUrl: memesArray[randomNumber].url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme (prevMeme => ({
            ...prevMeme,
            [name]: value

        }))
        
    }




    return (
        <div className= 'middle'>
            <form className="form">
                <input  type='text'      
                        className='form--input' 
                        placeholder="top text" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                ></input>
                <input  type='text'      
                        className='form--input' 
                        placeholder="bottom text"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                ></input>
                <button type="button"   className = 'form--button' onClick={getMemeImage}>Get a new meme image</button>
               
            </form>
            <div className='meme'>
            <img className='middle--image' src={meme.imgUrl}></img>
            <h2 className='meme--top'>{meme.topText}</h2>
            <h2 className='meme--bottom'>{meme.bottomText}</h2>
            </div>
        </div>

    )
}