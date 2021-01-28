const initState = {
    items: [],
    isLoaded: false 
};

const pizzas = (state = initState, action) => {

    if (action.type === 'SET_PIZZAS' ) {
        return {
            ...state,
            items: action.payload,
        };
    }
    return state;
};

export default pizzas;