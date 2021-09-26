import  {useEffect, useState} from 'react';

const useFetch = (url) => {

    const [dati, setDati] = useState([null]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        console.log("Otteniamo i dati dalla web api");

        if (!url) return;
        
        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw Error("Errore Ottenimento Dati da Web Api");
                }

                return res.json();
            })
            .then(data => {
                setDati(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    },[url]);

    const handleDelete = (id) => {
        setDati(dati.filter(dati => dati.isbn !== id));
    }

    return {dati, isLoading, error, handleDelete}

}

export default useFetch;