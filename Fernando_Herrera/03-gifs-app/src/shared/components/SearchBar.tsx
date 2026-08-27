import { useEffect, useState } from "react";

interface Props {
    type: string;
    placeholder?: string;
    buttonName: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ type, placeholder, buttonName, onQuery}: Props) => {
  
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 7000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  }


  return (
    <div>
        <div className="search-container">
        <input
          type={ type }
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}

          onKeyDown={ (event) =>{
            if (event.key === 'Enter'){
              handleSearch();
            };
          }}
        />
        <button onClick={ handleSearch } >{buttonName}</button>
    </div>
    </div>
  )
}

// text
// "Buscar gifs"