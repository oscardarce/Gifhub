import { useState } from "react"

import GifList from "./gifs/GifsList"
import PreviousSearches from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import Header from "./shared/components/Header"
import Searchbar from "./shared/components/Searchbar"

const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState(["Kokun"])

  const handleClickedTerms = (term: string) => {
    console.log({ term })
  }

  const handleSearchBar = (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return

    if (previousSearches.includes(query)) return

    setPreviousSearches([query, ...previousSearches].slice(0, 5))

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
      <GifList gifs={mockGifs} />

    </>
  )
}

export default GifsApp
