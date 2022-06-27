import {useEffect, useState} from 'react';
import Movies from '../components/Movies';

import {useQuery} from "react-query";
import axios from "axios";

export default function Home() {
    const [movieData, setMovieData] = useState([]);

    const reqMovies = () => {
        axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=9b3c0beaa11b2e25a89860c9a931a958")
            .then((res) => {
                console.log("===== useQuery =====");
                console.log(res.data.results);
                console.log("====================");
                setMovieData(res.data.results);
            });
    }

    const {isLoading, error, data} = useQuery('movies', () => reqMovies(), {
        refetchInterval: 5000,
        enabled: true,
        select: (data) => {
            console.log("select success :: ", data);
        }
    });

    useEffect(() => {
        console.log("##### isLoading :: ", isLoading);
        console.log("##### movie")
    }, [isLoading]);

    if (isLoading) return <h1>loading...</h1>;
    if (error) return <h1>error...</h1>;
    return (
        <>
            <Movies movieProp={movieData}/>
        </>
    );
}
