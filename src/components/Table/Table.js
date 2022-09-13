import React from "react";
import TableRow from "./TableRow";

const Table = () => {

  const data = [
    {
      title : 'Billy Elliot',
      length : 123,
      rating : 5,
      genres : ['Drama', 'Comedia'],
      awards : 2
    },
    {
      title : 'Alicia en el país de las maravillas',
      length : 142,
      rating : 4.8,
      genres : ['Drama', 'Acción', 'Comedia'],
      awards : 3
    }
  ]
  return (
    <div className="container-fluid mb-4">
      <div className="card shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Duración</th>
              <th scope="col">Rating</th>
              <th scope="col">Género</th>
              <th scope="col">Premios</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((movie, i) => 
              <TableRow

              movie = {movie}
              key = {movie.title + i }

              /> 
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
