import React, {useState} from 'react';
import SingleNote from './SingleNote';

function Notes() {
    const [notes, setNotes]=useState([]);
    const [curNote, setCurNote]=useState('');

    // const [car, setCar]=useState({
    //     mode: 'Innova',
    //     year: 2019,
    //     color: 'white'
    // })
    // setCar({...car, color: 'red'});
    function updateCurNote(event){
        setCurNote(event.target.value)
    }
    function addNote(event) {
        const newNotesArray=[...notes, curNote]
        setNotes(newNotesArray);
    }
    const ulStyle={
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px'
    }
  return (
    <>
    <input onChange={updateCurNote} type="text" />
    <button onClick={addNote}>Submit</button>
    <ul style={ulStyle} >
        {notes.map((note, i) => {
            return <li key={i}>
                <SingleNote note={note}/>
                </li>;
        })}</ul>
    </>
  )
}

export default Notes;