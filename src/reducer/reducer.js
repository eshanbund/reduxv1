const initialState = {
    name: 'Eshan from Redux Reducer',
    email: 'eshan@intnet.mu',
    age: 31,
    phone:'464 3417',
    image:'logo.svg',

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

            case 'CHANGE_PHONE':
            const { phone } = state;
            const newPhone = phone === '464 3417' ? '647 8642744' : '464 3417'; 
            return {
                ...state,
                phone: newPhone,
            };

        case 'CHANGE_EMAIL':
            const { email } = state;
            const newemail = email === 'eshan@intnet.mu' ? 'eshan@gmail.mu' : 'eshan@intnet.mu'; 
            return {
                ...state,
                email: newemail,
            };
            case 'CHANGE_IMAGE':
            const { image } = state;
            const newimage = image === 'logo.svg' ? 'eshan@gmail.mu' : 'eshan@intnet.mu'; 
            return {
                ...state,
                image: newimage,
            };



        default:
            return state;
    }
}

export default reducer;
