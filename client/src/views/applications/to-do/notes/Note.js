import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const saveText = "SAVE";
const removeToolTipText = "Remove Note";

const Note = props => {
    const newText = useRef(null);
    const [editing, setEditing] = useState(false);
    const windowSize = useWindowSize();

    let style = {};
    const updatePosition = ({position}) => {
        style = {
            left: (position ? position.xPos : randomBetween(0, windowSize.width - 280) + "px"),
            top: (position ? position.yPos : randomBetween(0, windowSize.height - 280) + "px")
        };
    }

    useEffect(() => {
        updatePosition(props);
    }, [props]);

    const onDragStart = (e) => {
        const { index } = props;
        e.dataTransfer.setData("application/x-note", index);
    }

    // Get random position
    const randomBetween = (min, max) => {
        return (min + Math.ceil(Math.random() * max));
    }

    // Turn on edit moge
    const edit = () => {
        setEditing(true);
    }

    // Save edits
    const save = () => {
        const { index } = props;
        props.onChange(newText.value, index);
        setEditing(false);
    }

    // Remove note
    const remove = () => {
        const { index } = props;
        props.onRemove(index);
    }

    // Render note body
    const renderNoteBody = (content, save) => {
        return (
            <div draggable="true" onDragStart={(e) => onDragStart(e)} onDoubleClick={() => edit()} className="note" style={style}>
                <article>
                    <header className="note__header">
                        <div className="wrapper-tooltip">
                            <span onClick={() => remove()} className="close hairline"></span>
                            <div className="tooltip">{removeToolTipText}</div>
                        </div>
                    </header>
                    <div className="note__content">{content}</div>
                    <footer className="note__footer">
                        <div className="note__fold"></div>
                        {save ? <div className="note__save" onClick={() => save()}>{saveText}</div> : ""}
                    </footer>
                </article>
            </div>
        );
    }

    // Render note preview
    const renderDisplay = () => {
        const { children } = props;
        return renderNoteBody(children);
    }

    // Render note edit mode
    const renderForm = () => {
        const { children } = props;
        const content = (
            <div>
                <textarea ref={newText} defaultValue={children} className="note__textarea"/>
            </div>
        );

        return renderNoteBody(content, true);
    }

    return (editing ? renderForm() : renderDisplay());
}
export default Note;