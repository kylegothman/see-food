import React from 'react' 
import { SimpleTable } from './SimpleTable';


export function ResultList({ imgResults }) {
    return (
      <>
        {imgResults.slice(0, 8).map((imgResult, i) => {
          return (
            <SimpleTable
              key={imgResults[i].id}
              name={imgResults[i].name}
              value={imgResults[i].value}
            />
          );
        })}
      </>
    );
  }

