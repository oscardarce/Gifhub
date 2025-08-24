interface PreviousSearchesProps {
  prevSearches: string[];
  onLabelClick: (term: string) => void;
}

const PreviousSearches = ({ prevSearches, onLabelClick }: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas anteriores</h2>
      <ul className="previous-searches-list">
        {prevSearches.map((term) => (
          <li key={term} onClick={() => onLabelClick(term)}>{term}</li>
        ))}
      </ul>
    </div>
  )
}

export default PreviousSearches
