// interface Props {
//     title?: string;
//     busquedas: string;
//     onLabelClicked?: (term: string) => void;
// }

import type { FC } from "react";

// const props: Props [] = [
//     {busquedas: 'Gok'},
//     {busquedas: 'Saitam'},
//     {busquedas: 'Elde Rin'}
// ]

interface Props {
    searches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<Props> = ({ searches, onLabelClicked }) => {
  return (
    <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {/* <li>Gok</li>
                <li>Saitam</li>
                <li>Elde Rin</li> */}
                
                {searches.map((term) => (
                    <li key={term} onClick={() => onLabelClicked(term)}>
                        {term}
                    </li>                        
                    ))}
            </ul>
        </div>
  )
}
//Busquedas previas