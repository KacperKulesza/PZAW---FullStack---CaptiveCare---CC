import React, { useState, useEffect } from "react";
import axios from "axios";

const PrisonerDatabase = () => {
    const [newPrisoner, setNewPrisoner] = useState({ name: "", punishment: "" });
    const [updatePrisoner, setUpdatePrisoner] = useState({ name: "", punishment: "" });
    const [selectedValue, setSelectedValue] = useState('');
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

    const deletePrisoner = async (prisonerId) => {
        const confirmation = window.confirm("Do you want to delete a prisoner?")
        if(!confirmation) return
        try {
            const response = await axios.delete(`http://localhost:8080/api/prisoners/${prisonerId}`)
            if(response.status !== 200 && response.status !== 201) throw new Error("Error response is not ok")
            fetchData()
        } catch(err) {
            console.log(`There was a problem with deleting the prisoner: ${err.message}`)
        }
    }

    const addPrisonerHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/prisoners", newPrisoner);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(`Network response was not ok ${response.status}`);
            }
            const data = response.data;
            console.log(`Prisoner added: ${data}`);
            setNewPrisoner({ name: "", punishment: "" });
            fetchData() 
        } catch (err) {
            console.error(`Some problems with your axios operation: ${err.message}`);
        }
    }

    const updatePrisonerHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:8080/api/prisoners/${selectedValue}`, updatePrisoner);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(`Network response was not ok ${response.status}`);
            }
            const data = response.data;
            console.log(`Prisoner updated: ${data}`);
            setUpdatePrisoner({ name: "", punishment: "" });
            fetchData();
        } catch (err) {
            console.error(`Some problems with your axios operation: ${err.message}`);
        }
    }

    return (
        <>
            
            <form onSubmit={addPrisonerHandler}>
                <fieldset>
                    <legend>Add Prisoner</legend>
                    <input
                        type="text"
                        placeholder="Enter a prisoner name..."
                        value={newPrisoner.name}
                        onChange={(e) => setNewPrisoner({ ...newPrisoner, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Enter a punishment..."
                        value={newPrisoner.punishment}
                        onChange={(e) => setNewPrisoner({ ...newPrisoner, punishment: e.target.value })}
                    />
                    <button type="submit">Add prisoner</button>
                </fieldset>
            </form>

            <fieldset>
                <legend>Delete prisoner</legend>
            <ul style={{ listStyle: 'none' }}>
                {prisonersList.map(prisoner => (
                    <li key={prisoner._id} onClick={() => deletePrisoner(prisoner._id)}>
                        name: {prisoner.name}, punishment: {prisoner.punishment}
                    </li>
                ))}
            </ul>
            </fieldset>

            <fieldset>
                <legend>Update prisoner</legend>
            <form onSubmit={updatePrisonerHandler}>
                <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                    <option value="">Select a prisoner to update</option>
                    {prisonersList.map(prisoner => (
                        <option key={prisoner._id} value={prisoner._id}>
                            {prisoner.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Enter a prisoner name..."
                   
                    value={updatePrisoner.name}
                    onChange={(e) => setUpdatePrisoner({ ...updatePrisoner, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Enter a punishment..."
                    value={updatePrisoner.punishment}
                    onChange={(e) => setUpdatePrisoner({ ...updatePrisoner, punishment: e.target.value })}
                />
                <button type="submit">Update prisoner</button>
            </form>
            </fieldset>
        </>
    );
}

export default PrisonerDatabase;
