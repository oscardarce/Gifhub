import { useEffect, useState } from "react"

interface SearchBarProps {
  placeholder?: string,
  onQuery: (query: string) => void
}

const Searchbar = ({ placeholder = "Buscar", onQuery }: SearchBarProps) => {

  const [query, setQuery] = useState("")

  useEffect(() => {


    /* Obligamos a que se entregue el query 0.7s despues 
    de que el usuario deja de escribir asi así no hay problemas de performance
    ya que no se ejecuta el query cada vez que se realiza un cambio en el input*/
    const timeOutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    /* ClearTimeout(timeOutId) funcion de JS integrada por default*/
    return () => {
      clearTimeout(timeOutId)
    }
  }, [query, setQuery])

  const handleSearchButton = () => {
    onQuery(query)
    setQuery("")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchButton()
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event => setQuery(event.target.value))}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearchButton}>Buscar</button>
    </div>
  )
}

export default Searchbar
