import { useState } from "react"
import axios from "axios"

const PrisonerDatabase = () => {

    const [newPrisoner, setNewPrisoner] = useState({name:""})

    async function submitHandler(e){

        e.preventDefault()
        const formData = new FormData()
        formData.append("name", newPrisoner.name)

        console.log("FormData value")
        for(let [key, values] of formData.entries()){
            console.log(`${key}: ${values}`)
        }
    }
    return(
        <>
            <h5>Add a new user</h5>
            <form onSubmit={submitHandler}>
                <input  type="text" 
                        placeholder="Enter a prisoner name..." 
                        value={newPrisoner.name}
                        onChange={ e => setNewPrisoner({...newPrisoner, name: e.target.value})}/>
      
                <button type="submit">Add prisoner</button>
            </form>
        </>
    )
}

export default PrisonerDatabase