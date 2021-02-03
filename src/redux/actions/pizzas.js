import axios from 'axios';
import { Categories } from '../../components';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: false
});

export const fetchPizzas = (sortBy, Category) => (dispatch) => { 
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?categpry=${
        Category !== null ? `categpry=${Category}` : '' 
    }&_sort=${sortBy}&_order=desc`).then(({ data }) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) =>  ({
    type: 'SET_PIZZAS',
    payload: items,
});


