import { INPCHANGE, ADDLIST, DELITEM, INITSTATE } from './actionTypes';
import axios from 'axios';
import noState from '../mock/list.json'

export const getInpChange = (value) => ({
    type: INPCHANGE,
    value
});
export const getInpSubmit = () => ({
    type: ADDLIST
});
export const getDelItem = (index) => ({
    type: DELITEM,
    index
});
export const geInitState = (val) => ({
    type: INITSTATE,
    val
});
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/').then((res) => {
            res = noState;
            dispatch(geInitState(res));
        })
    }
};