import { useState } from "react"

import GifList from "./gifs/GifsList"
import PreviousSearches from "./gifs/PreviousSearches"
import Header from "./shared/components/Header"
import Searchbar from "./shared/components/Searchbar"
import getGifsByQuery from "./gifs/actions/get-gifs-by-query.actions"
import type { Gif } from "./gifs/interfaces/gif.interface"

const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousSearches, setPreviousSearches] = useState<string[]>([])

  const handleClickedTerms = (term: string) => {
    console.log({ term })
  }

  const handleSearchBar = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return

    if (previousSearches.includes(query)) return

    setPreviousSearches([query, ...previousSearches].slice(0, 5))

    const gifs = await getGifsByQuery(query)

    setGifs(gifs)
  }

  return (
    <>
      {/*Header*/}
      <Header title="Gifhub " description="Diviertete buscando gifs" />

      {/*Barra de busqueda*/}
      <Searchbar placeholder="Encuentra tu GIF" onQuery={handleSearchBar} />

      {/*Busquedas anteriores*/}
      <PreviousSearches prevSearches={previousSearches} onLabelClick={handleClickedTerms} />

      {/**Gifs Images*/}
      <GifList gifs={gifs} />

    </>
  )
}

export default GifsApp
