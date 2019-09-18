import { INPCHANGE, ADDLIST, DELITEM } from './actionTypes';

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