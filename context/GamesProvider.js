import { createContext, useEffect, useState } from "react";
import { clientAxios } from "../axios/clientAxios";

export const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
    const [games, setGames] = useState()

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const { data } = await clientAxios('/games')
                setGames(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchGames()
    }, [])

    return (
        <GamesContext.Provider value={{ games, setGames }} >
            {children}
        </GamesContext.Provider>
    )
}