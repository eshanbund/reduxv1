const initialState = {
    name: 'Eshan from Redux Reducer',
    email: 'eshan@intnet.mu',
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

        case 'CHANGE_EMAIL':
            const { email } = state;
            const newemail = email === 'eshan@intnet.mu' ? 'eshan@gmail.mu' : 'eshan@intnet.mu'; 
            return {
                ...state,
                email: newemail,
            };
        default:
            return state;
    }
}

export default reducer;
