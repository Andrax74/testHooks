import React, {useEffect, useState} from 'react';

import BooksCard from "../src/components/BooksCard";

const Books = () => {

    const [libri, setLibri] = useState([
        { title: 'Grishaverse - Tenebre e ossa    ', body: 'Alina Starkov non ha grandi...', author: 'Leigh Bardugo', id: 1, image: '/static/images/book1.jpg' },
        { title: 'Grishaverse - Assedio e tempesta', body: 'Ricercata per tutto il Mare Vero...', author: 'Leigh Bardugo', id: 2, image: '/static/images/book2.jpg' },
        { title: 'Grishaverse - Rovina e ascesa   ', body: 'L\'Oscuro ha ormai esteso...', author: 'Leigh Bardugo', id: 3, image: '/static/images/book3.jpg' }
    ])

    const[nome, setNome] = useState("");

    useEffect(() => {
        console.log("use Effect attivato!")
        console.log(libri);
    },[nome]);

    const viewAllBooks = libri.map((libro) => (
        <BooksCard
            key = {libro.id}
            body = {libro.body}
            title = {libro.title}
            author = {libro.author}
            image = {libro.image}
            deleteBook = {() => handleDelete(libro.id)}
        />
    ))

    const handleDelete = (id) => {
        const newBooks = libri.filter(libri => libri.id !== id);
        setLibri(newBooks);
    }

    return (
        <div>
            <div className="flex-card">
                <h2>Libri Disponibili</h2>
                {viewAllBooks}
            </div>
            <div>
                <button onClick={() => setNome("Nicola")}>Nome Lettore</button>
                <p>{nome}</p>
            </div>
        </div>
    );

}

export default Books;  