import * as actionTypes from '../actions/actionsTypes';
const initialState = {
    status:""
};

const reducer = ( state = initialState, action ) => {
        switch(action.type){
            case actionTypes.DATA_STATUS:
                return {
                    ...state,
                    status:action.status
                }
            default :
                return state;
        }
       

}

export default reducer