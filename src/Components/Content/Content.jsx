import React, { useEffect, useState, useTransition } from 'react';
import { APOD_URL, API_KEY } from '../../Constants/Constants';

const Content = ({ date }) => {

    const [result, setResult] = useState({});
    const [isPending, startTransition] = useTransition();

    const fetchAPI = async () => {
        const fetchURL = date ? `${APOD_URL}${API_KEY}&start_date=${date}&end_date=${date}` : `${APOD_URL}${API_KEY}`;
        await fetch(fetchURL)
        .then(response => response.json())
        .then((data) => {
            const res = data.length > 0 ? data[0] : data
            setResult(res)
        })
        .catch((err) => {
            console.error(err)
        })
    };
        
    useEffect(() => {
        startTransition(() => {
            fetchAPI()
         });
    }, [date])
    

    return (
        <>
             {isPending ? <div>...Loading</div> :
                <>
                    <div>Copyright: {result.copyright}</div>
                    <div>Date: {result.date}</div>
                    <p>Explanation: {result.explanation}</p>
                    <div>Title: {result.title}</div>
                    <div><img src={result.url} alt='url from the result'/></div>
                </>
            }
        </>
    )
}

export default Content;