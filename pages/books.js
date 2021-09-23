import React, {useEffect, useState} from 'react';

import BooksCard from "../src/components/BooksCard";
import Loading from "../src/components/Loading";

const Books = () => {

    const [libri, setLibri] = useState([
        { titolo: '', sinossi: '', autore: '', isbn: '', immagine: '' }
    ]);
    /*
    const [libri, setLibri] = useState([
        { title: 'Grishaverse - Tenebre e ossa    ', body: 'Alina Starkov non ha grandi...', author: 'Leigh Bardugo', id: 1, image: '/static/images/book1.jpg' },
        { title: 'Grishaverse - Assedio e tempesta', body: 'Ricercata per tutto il Mare Vero...', author: 'Leigh Bardugo', id: 2, image: '/static/images/book2.jpg' },
        { title: 'Grishaverse - Rovina e ascesa   ', body: 'L\'Oscuro ha ormai esteso...', author: 'Leigh Bardugo', id: 3, image: '/static/images/book3.jpg' }
    ])
    */

    const[nome, setNome] = useState("");
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState("");

    useEffect(() => {
        console.log("Otteniamo i dati dalla web api");
        
        fetch('http://localhost:5051/api/libri')
            .then(res => {

                if (!res.ok) {
                    throw Error("Errore Ottenimento Dati da Web Api");
                }

                return res.json();
            })
            .then(data => {
                setLibri(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    },[]);

    const viewAllBooks = libri.map((libro) => (
        <BooksCard
            key = {libro.isbn}
            body = {libro.sinossi}
            title = {libro.titolo}
            author = {libro.autore}
            image = {"/static/images/" + libro.immagine}
            deleteBook = {() => handleDelete(libro.isbn)}
        />
    ))

    const handleDelete = (id) => {
        const newBooks = libri.filter(libri => libri.isbn !== id);
        setLibri(newBooks);
    }

    return (
        <div>
            <div className="flex-card">
                <h2>Libri Disponibili</h2>
                {isLoading && <Loading />}
                {!isLoading && !error && viewAllBooks}
            </div>
            <div>
                {error && <div className="errmsg alert alert-danger" role="alert">{error}</div>}
            </div>
            <div>
                <button onClick={() => setNome("Nicola")}>Nome Lettore</button>
                <p>{nome}</p>
            </div>
        </div>
    );

}

export default Books;  