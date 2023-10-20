import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL, CLEAN_CHARACTERS} from "./action-Types" //se agrega CLEAN_CHARACTERS por class component
import axios from "axios"

export const getCharacters = () => {
    return async function(dispatch){
        let response = await axios("https://rickandmortyapi.com/api/character")
        return dispatch({ type: GET_CHARACTERS, payload: response.data.results })
    }

}

export const getcharacterDetail = (id) => {
    return function(dispatch){
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then( response => response.json())
        .then( data => dispatch( { type: CHARACTER_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
}

//agregamos esto con class component
export const cleanCharacters = () => {
    return { type: CLEAN_CHARACTERS }
}