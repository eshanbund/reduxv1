const initialState = {
    name: 'Eric from Redux Reducer',
    email: 'eric.chen@senecacollege.ca',
    age: 31,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            const { name } = state;
            const newName = name === 'Eric from Redux Reducer' ? 'John' : 'Eric from Redux Reducer'; 
            return {
                ...state,
                name: newName,
            };
        case 'DO_OTHER_THING':
            return state;
        default:
            return state;
    }
}

export default reducer;
