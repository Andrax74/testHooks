import { useEffect, useState } from 'react';

import axios from 'axios';

const useAxios = (axiosParams) => {

    const myBaseURL = 'http://localhost:5051/api/libri/';

    axios.defaults.baseURL = myBaseURL;

    const [dati, setDati] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [refresh, setRefresh] = useState(0);

    const fetchData = async (params) => {

        try {
            const result = await axios.request(params);
            setDati(result.data);
        } 
        catch( error ) {
            setError(error);
        } 
        finally {
            setLoading(false);
        }
    }

    const handleDelete = (url) => {

        let myUrl = myBaseURL + url;

        let i = refresh;
        i = i + 1;

        setLoading(true);

        axios.delete(myUrl)
            .then(response => {

                console.log(response);
                setRefresh(i);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);

                setError(error.message);
            })

    }

    useEffect(() => {
        fetchData(axiosParams);
    }, [refresh]); 

    return { dati, loading, error, handleDelete };
}

export default useAxios;