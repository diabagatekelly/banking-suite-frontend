const INITIAL_STATE = []

export default function suite(userAction = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD':
            return [...userAction, ...action.suite]

    
        default:
            return userAction;
    }
}