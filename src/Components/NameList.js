import React from 'react'
import Person from './Person'
function NameList() {

    const names = ['Vishu', 'Anjali', 'Shaana', 'Vishu']
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name} </h2>)
    return <div>{nameList}</div>

    // const persons = [
    //     {
    //         id : 1,
    //         name : 'Vishu',
    //         age : 18,
    //         skill : 'Skeching'
    //     },
    //     {
    //         id : 2,
    //         name : 'Anjali',
    //         age : 20,
    //         skill : 'Mathematics'
    //     },
    //     {
    //         id : 3,
    //         name : 'Shaana',
    //         age : 19,
    //         skill : 'React'
    //     }
    // ]
    // const personList = persons.map(person => <Person key = {person.id} person = {person} />)
    // return <div>{personList}</div>

    // (<h2>
    // I am {person.name}. I am {person.age} years old. I know {person.skill}.
    // </h2>)
    // return <div>{personList}</div>

    // const names = ['Vishu', 'Anjali', 'Shaana']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>

    // return (
    //     <div>
    //     {
    //         names.map(name =>  <h2>{name}</h2>)
    //     }

    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //     </div>
    // )
}

export default NameList
