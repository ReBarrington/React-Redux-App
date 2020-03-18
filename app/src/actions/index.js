// ACTION FILE!!
import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(res => {
        console.log(res.data, ' is res.data.breeds.url in axios call')
        dispatch({ type: UPDATE_DATA, payload: res.data })
    })
    .catch(err => console.log('error fetching data from api. err: ', err));
};

