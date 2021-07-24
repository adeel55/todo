import React, { useState, useEffect } from 'react';
import Note from "./Note";

const newNoteText = "New note :-)";
const newNoteButtonText = "ADD NEW NOTE";

const initialNotes = [
    {
        note: "Industry's standard dummy text ever since the 1500s",
        position: false
    },
    {
        note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        position: false
    },
    {
        note: "The point of using Lorem Ipsum is that it has a more-or-less",
        position: false
    },
    {
        note: "A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.",
        position: false
    },
    {
        note: "There are many variations of passages of Lorem Ipsum",
        position: false
    }
];

const Board = () => {
    const [notes, setNotes] = useState([]);
    const [uniqueId, setUniqueId] = useState(0);

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notesStorage")) || [];
        if (notes.length > 0) {
            notes.map(single => {
                add(single.note, single.position);
                return false;
            });
        } else {
            initialNotes.map(single => {
                add(single.note, single.position);
                return false;
            });
        }

    }, []);

    const saveToStorage = (notes) => {
        setNotes({notes});
        localStorage.setItem("notesStorage", JSON.stringify(notes));
    }

    const add = (text, position) => {
        setUniqueId(prevState => prevState + 1);
        const { notesNew } = notes;
        notesNew.push({
            id: uniqueId,
            note: text,
            position
        });

        saveToStorage(notesNew);
    }

    const update = (newText, i) => {
        const { notesNew } = notes;
        notesNew[i].note = newText;
        saveToStorage(notesNew);
    }

    const updatePosition = (position, i) => {
        const { notesNew } = notes;
        notesNew[i].position = position;
        saveToStorage(notesNew);
    }

    const remove = (i) => {
        const { notesNew } = notes;
        notesNew.splice(i, 1);
        saveToStorage(notesNew);
    }

    const renderNotes = (note, i) => {
        return (
            <Note key={note.id}
                  index={i}
                  position={note.position}
                  onChange={update()}
                  onDrag={updatePosition()}
                  onRemove={remove(i)} >
                {note.note}
            </Note>
        );
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e) => {
        let noteId = e.dataTransfer.getData("application/x-note");
        let position = {xPos: e.clientX, yPos: e.clientY};
        updatePosition(position, noteId);
    }

    return (
        <React.Fragment>
            <div className="board" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)}>
                <header className="main-header">
                    <div className="main-header__text fadein" onClick={this.add.bind(this, newNoteText, false)}>
                        {newNoteButtonText}
                    </div>
                </header>
                {notes.map(this.renderNotes.bind(this))}
            </div>
        </React.Fragment>
    )
}

export default Board;