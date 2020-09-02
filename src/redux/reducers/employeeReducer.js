
import * as types from '../actions/types';

const INITIAL_STATE = {
    employeeLoading: false,
    employeeData: null,
    employeeErrorMsg: null
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_EMPLOYEE_LOADING:
            return { ...state, employeeLoading: action.payload };
        case types.GET_EMPLOYEE_SUCCESS:
            return { ...state, employeeData: action.payload };
        case types.GET_EMPLOYEE_FAIL:
                return { ...state, employeeErrorMsg: action.payload };
        default:
            return state;
    }
};

