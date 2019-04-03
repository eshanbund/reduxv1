const initialState = {
    name: 'Eshan from Redux Reducer',
    email: 'Eshan.bund@senecacollege.ca',
    age: 31,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            const { name } = state;
            const newName = name === 'Eshan from Redux Reducer' ? 'John' : 'Eshan from Redux Reducer'; 
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
