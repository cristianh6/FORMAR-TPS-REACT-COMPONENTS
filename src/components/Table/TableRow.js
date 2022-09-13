import React from 'react';

const TableRow = ({movie}) => {
    const {title, length, rating, genres, awards} = movie;
    return (
        <tr>
              <td>{title}</td>
              <td>{length}</td>
              <td>{rating}</td>
              <td>
                <ul>
                    {
                        genres.map((genre,i) => <li key={genre + i}>{genre}</li>)
                    }
                    
                    <li>Ciencia Ficción</li>
                </ul>
              </td>
              <td>{awards}</td>
            </tr>
    );
}

export default TableRow;
