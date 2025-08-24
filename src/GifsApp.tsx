import { useState } from "react"

import GifList from "./gifs/GifsList"
import PreviousSearches from "./gifs/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import Header from "./shared/components/Header"
import Searchbar from "./shared/components/Searchbar"

const GifsApp = () => {

  const [previousSearches, setPreviousSearches] = useState(["kokun"])

  const handleClickedTerms = (term: string) => {
    console.log({ term })
  }
  const handleSearchBar = (query: string) => {
    console.log({ query })
  }

  return (
    <>
      {/*Header*/}
      <Header title="Gifhub " description="Diviertete buscando gifs" />

      {/*Barra de busqueda*/}
      <Searchbar placeholder="Encuentra tu GIF" onQuery={handleSearchBar}/>

      {/*Busquedas anteriores*/}
      <PreviousSearches prevSearches={previousSearches} onLabelClick={handleClickedTerms} />

      {/**Gifs Images*/}
      <GifList gifs={mockGifs} />

    </>
  )
}

export default GifsApp
