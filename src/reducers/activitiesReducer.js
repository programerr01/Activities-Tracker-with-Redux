import uuid from 'uuid/v4';

const initialState = [{
    id: 1,
    name: "gym",
    duration: "2 hours",
}];

const activitiesReducer = function(state = initialState, action ) {
    let newState = state;
    switch(action.type) {
        case 'CREATE_ACTIVITY':
            return [...newState, { id: uuid(), ...action.payload}]
        case 'DELETE':
            newState = newState.filter(e => e.id !== action.payload )
            
            return newState;            
        default:
            return newState;
    }
}

export default activitiesReducer;