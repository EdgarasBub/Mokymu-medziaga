import { Modal,Button } from "react-bootstrap";
import { useEffect,useState } from "react";

const API_URL = 'https://www.omdbapi.com'
const API_KEY = 'apikey=a2526df0'


const Details = ({id, handleClose,isLoading}) => {
    const [movie,setMovie] = useState();

    useEffect(() => {
        const getData = () => {

            setTimeout(() =>{
                const ulr = `${API_URL}/?${API_KEY}&i=${id}`;

                fetch(ulr)
                    .then(response => response.json())
                    .then(data => setMovie(data))
                    .finally(() => isLoading(false));
            },1000)

        }

        getData();


    },[id])


    return (
     <>
        {
            movie && (
                <Modal show={movie} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{movie?.Title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={movie?.Poster} />
                            <p><strong> Type: </strong>{movie?.Type}</p>
                            <p> <strong>Year:</strong> {movie?.Year}</p>
                            <p> <strong>Rated:</strong> {movie?.Rated}</p>
                            <p> <strong>Released:</strong> {movie?.Released}</p>
                            <p> <strong>Runtime:</strong> {movie?.Runtime}</p>
                            <p> <strong>Genre:</strong> {movie?.Genre}</p>
                            <p><strong>Director:</strong> {movie?.Director}</p>
                            <p> <strong>Actors:</strong> {movie?.Actors}</p>
                            <p> <strong>Awards:</strong> {movie?.Awards}</p>
                            <p> <strong>Plot:</strong> {movie?.Plot}</p>
                            </Modal.Body>                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                </Modal>
            )
        }
     </>
          
     
    )
}

export default Details;