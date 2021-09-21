const BooksCard = ({ body, title, author, image, deleteBook }) => {

    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div class="card-body">
                <h5 className="card-title cardtitle">{ title }</h5>
                <h6 className="card-subtitle mb-2 text-muted cardtitle">{ author }</h6>
                <p className="card-text">{ body }</p>
                <a onClick={deleteBook} className="btn btn-primary">Elimina</a>    
            </div>
        </div>
    )

}

export default BooksCard;
