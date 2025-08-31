import { useRef, useState } from "react"
import getGifsByQuery from "../actions/get-gifs-by-query.actions"
import type { Gif } from "../interfaces/gif.interface"

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousSearches, setPreviousSearches] = useState<string[]>([])

    const gifsCache = useRef<Record<string, Gif[]>>({})

    // const gifsCache: Record<string, Gif[]> = {}


    const handleClickedTerms = async (term: string) => {


        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])
            return;
        }

        const gifs = await getGifsByQuery(term)
        setGifs(gifs)

    }

    const handleSearchBar = async (query: string = "") => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return

        if (previousSearches.includes(query)) return

        setPreviousSearches([query, ...previousSearches].slice(0, 5))

        const gifs = await getGifsByQuery(query)

        setGifs(gifs)

        gifsCache.current[query] = gifs
    }

    return {
        //Values
        gifs,
        previousSearches,

        //Actions
        handleSearchBar,
        handleClickedTerms,
    }
}