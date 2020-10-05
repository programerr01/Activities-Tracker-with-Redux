import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
// const reducer = {
//     activities = [{
//         id: 1,
//         name: "gym",
//         duration: "1 hours",
//     }],
//     people: [
//         {
//             id: 1,
//             name: "John Doe",
//         },
//     ],
// }

