
import GifList from "./gifs/GifsList"
import { useGifs } from "./gifs/hooks/useGifs"
import PreviousSearches from "./gifs/PreviousSearches"
import Header from "./shared/components/Header"
import Searchbar from "./shared/components/Searchbar"


const GifsApp = () => {

  const { gifs, previousSearches, handleClickedTerms, handleSearchBar } = useGifs()

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
