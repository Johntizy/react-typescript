import React from 'react'
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const List: React.FC<IProps> = ({ people, setPeople}) => {

    const deleteList = (name:string):void =>{
        const deletePerson = people.filter(person => {
            return person.name !== name;
        })
        console.log(deletePerson);
        setPeople(deletePerson);
    }

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    <button onClick={() => deleteList(person.name)}> Delete </button>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List
