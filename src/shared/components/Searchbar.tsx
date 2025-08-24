import { useState } from "react"

interface SearchBarProps {
  placeholder?: string,
  onQuery: (query: string) => void
}

const Searchbar = ({ placeholder = "Buscar", onQuery }: SearchBarProps) => {

  const [query, setQuery] = useState("")

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
