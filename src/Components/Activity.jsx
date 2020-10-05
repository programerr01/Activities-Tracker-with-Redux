import React from 'react';
import {useDispatch} from 'react-redux';

export default function Activity(props) {
    const dispatch = useDispatch();
    function deleteActivity() {
        dispatch({
            type: 'DELETE',
            payload: props.id,
        })
    }

    return (
        <div className={"activity-wrapper"}>
            <p>Activities: {props.name}, Duration: {props.duration}</p>
            <button onClick={deleteActivity}>Delete</button>
            
        </div>
    )
}