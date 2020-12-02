const INITIAL_STATE = {message : '', messageType : ''}

export default function alert(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SUCCESS':
            return {...state, message: action.message, messageType: action.type}

        case 'ERROR':
            return {...state, message: action.message, messageType: action.type}
    
        default:
            return state;
    }
}