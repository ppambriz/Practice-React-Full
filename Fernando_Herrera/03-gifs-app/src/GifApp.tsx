// import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { GifList } from "./gifs/GifList";
import { TestUsseState } from "./shared/components/useState/TestUsseState";
import { TestUseEffect } from "./shared/components/useEfecct/TestUseEffect";
// import { TestUEClean } from "./shared/components/useEfecct/TestUEClean"
// import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
// import type { Gif } from "./gifs/interface/gif.interface";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifApp = () => {
  const { gifs, handleTermClicked, handleSearch, previousTerms } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        type="text"
        placeholder="Buscar gifs"
        buttonName="Buscar"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifList gifs={gifs} />

      {/* prueba useState */}
      <TestUsseState />

      {/* prueba useEffect puro */}
      <TestUseEffect />

      {/* prueba useEffect con limpieza */}
      {/* <TestUEClean /> */}
    </>
  );
};
