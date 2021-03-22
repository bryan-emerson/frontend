import React from 'react'


function Characters(props) {
  console.log(props.characters)
  let characters = props.characters.map((character)=>{
    return(
      <div className='user-card'>
        {character.name}
        <br/>
        <button onClick= {()=> props.getUserToEdit(character.uid)}>EDIT</button>
        <button onClick= {()=> props.getUserToEdit(character.uid)}>DELETE</button>
      </div>
    )
    })
  return(
    <div>
      stuff
      {characters}
    </div>
  )
}

export default Characters