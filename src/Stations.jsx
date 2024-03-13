import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getStations } from './api/api'
import StationCard from './components/StationCard'
import InfiniteScroll from 'react-infinite-scroller';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Stations() {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [stations, setStations] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search); // Parse query string

    const country = searchParams.get('country');
    const { isSuccess, isError, error, data, isLoading } = useQuery(['stations', limit, offset], () => getStations(country, limit, offset))
    useEffect(() => {
        if (isSuccess) {
            offset > 0 ? setStations(preStation => [...preStation, ...data]) : setStations(data)
        }
    }, [data])
    const loadFunc = () => {
        setOffset(preOffset => preOffset + limit)
        setLimit(prevLimit => prevLimit + 5)
    }
    const abortController = new AbortController();
    useEffect(() => {
        return () => {
            // Cleanup function to abort fetching when unmounting
            abortController.abort();
        };
    }, []);
    return (
        <>
            <div>
                <Link to={'/'}><ArrowBackIcon /></Link>
                <Typography variant='h4'>Stations</Typography>
            </div>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={isSuccess && data.length > 0}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {stations.map((station, key) => <StationCard key={key} station={station} />)}
            </InfiniteScroll>
        </>
    )
}
