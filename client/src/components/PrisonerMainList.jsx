import { useState, useEffect } from "react"
import axios from "axios"

const PrisonerList = () => {

    const [prisonersList, setPrisonersList] = useState([]);

    async function fetchData(){
        try {
            const response = await axios.get("http://localhost:8080/api/prisoners")
            setPrisonersList(response.data)
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    useEffect(() => {
        fetchData() 
    }, []);

    return(
        <>
            <fieldset>
                <legend>List of prisoners</legend>
                <ul style={{ listStyle: 'none' }}>
                    {prisonersList.map(prisoner => (
                        <li key={prisoner._id}>
                            id: {prisoner._id}, name: {prisoner.name}
                        </li>
                    ))}
                </ul>
            </fieldset>
        </>
    )
}

export default PrisonerList