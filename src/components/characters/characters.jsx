import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../redux/actions"
import CardCharacter from "../cardCharacter/cardCharacter"

const Characters = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters)

    useEffect(() => {
        dispatch(getCharacters())

    }, [])

    return(
        <div>
                <h1>TODOS</h1>
                {
                    characters.map((character) => {
                        return(
                            <CardCharacter
                                key = {character?.id}
                                id = {character?.id}
                                name = {character?.name}
                                gender = {character?.gender}
                                image = {character?.image}
                               

                            />
                        )
                    })
                }
        </div>
        
    )
}
export default Characters;