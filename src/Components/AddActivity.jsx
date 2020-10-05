import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: "",
    });

    function handleChange(e) {
        e.persist()
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
        
    }

    function addActivity(){
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                ...data
            }
        })
    }

    return (
        <div className={"add"}>
            <div className="input-section">
                <p>Activity:</p>
                <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder="Activity Name..." />
            </div>
            <div className="input-section">
                <p>Duration:</p>
                <input onChange={(e) => handleChange(e)} type="text" name="duration" placeholder="Duration of activity" />
            </div>
            <button onClick={addActivity}> Add Activity</button>
        </div>
    )
};

export default AddActivity;