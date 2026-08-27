import { useState } from "react"

// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { PreviousSearches } from "./gifs/PreviousSearches"
import { GifList } from "./gifs/GifList"
import { TestUsseState } from "./shared/components/useState/TestUsseState"
import { TestUseEffect } from "./shared/components/useEfecct/TestUseEffect"
// import { TestUEClean } from "./shared/components/useEfecct/TestUEClean"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interface/gif.interface"


export const GifApp = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({term})
    }

    const handleSearch = async (query: string = '') => {
      query = query.trim().toLowerCase();

      if (query.length === 0) return;

      if (previousTerms.includes(query)) return;

      // const currentTerms = previousTerms.slice(0,6);
      // currentTerms.unshift(query);

      setPreviousTerms( [query, ...previousTerms].splice(0,7) )

      const gifs = await getGifsByQuery(query);

      // console.log({gifs});
      setGifs(gifs);
    }

  return (
    <>
    
    {/* Header */}
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gif perfecto"/>

    {/* Search */}
    <SearchBar type="text" placeholder="Buscar gifs" buttonName="Buscar" 
      onQuery={handleSearch}
    />

    {/* Búsquedas previas */}
    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

    {/* Gifs */}
    <GifList gifs={gifs} />

    {/* prueba useState */}
    <TestUsseState />
    
    {/* prueba useEffect puro */}
    <TestUseEffect />

    {/* prueba useEffect con limpieza */}
    {/* <TestUEClean /> */}

    </>
  )
}
