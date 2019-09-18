import State from './state';
import { INPCHANGE, ADDLIST, DELITEM } from './actionTypes';

export default (state = State, action) => {
    if (action.type === INPCHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inpVal = action.value;
        return newState;
    }
    if (action.type === ADDLIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inpVal);
        newState.inpVal = '';
        return newState;
    } if (action.type === DELITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    } else {
        return state;
    }
}