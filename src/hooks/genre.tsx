import React, { createContext, useCallback, useContext, useState } from "react";

const GenreContext = createContext<GenreContextData>({} as GenreContextData);

interface GenreContextData {
    genreId: number;
    setGenre(id: number): void;
    getGenre(): number;
}

export const GenreProvider: React.FC = () => {
    
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const setGenre = useCallback((id: number) => {
        setSelectedGenreId(id);
        console.log('teste');
    },[setSelectedGenreId]);

    const getGenre = useCallback((): number => {
        return selectedGenreId
    },[]);

    return(<GenreContext.Provider value={{genreId:selectedGenreId, setGenre, getGenre}}/>);
}

export function useGenre(): GenreContextData {
    const context = useContext(GenreContext);

    return context;
}