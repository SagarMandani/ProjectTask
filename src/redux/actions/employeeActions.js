import { Alert } from "react-native";
import * as types from './types';

export const getEmployee = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.GET_EMPLOYEE_LOADING, payload: true });
            let response = await fetch('https://reqres.in/api/users', { method: 'GET' });
            let res = await response.json();
            dispatch({ type: types.GET_EMPLOYEE_LOADING, payload: false });
            if (response.status) {
                dispatch({ type: types.GET_EMPLOYEE_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: types.GET_EMPLOYEE_FAIL, payload: 'employee data empty.' });
            }
        } catch (e) {
            dispatch({ type: types.GET_EMPLOYEE_FAIL, payload: 'employee data empty.' });
        }
    }
}
