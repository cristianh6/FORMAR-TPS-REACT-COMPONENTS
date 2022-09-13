import React from 'react';
import ContentRowMovies from './ContentRowTop/ContentRowMovies';
import GenresInDb from './ContentRowTop/GenresInDb';
import LastMovieInDb from './ContentRowTop/LastMovieInDb';

let genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción",	"Comedia", "Documental", "Drama", "Fantasia", "Infantiles", "Musical"];

function ContentRowTop(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>			

					<ContentRowMovies titulo='' cifra='' borde='' ícono=''/>

					<div className="row">
						
						<LastMovieInDb movie='Mandalorian'/>
						<GenresInDb genres = {genres}/>

					</div>
				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;