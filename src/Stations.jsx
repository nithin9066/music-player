import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getStations } from './api/api'
import StationCard from './components/StationCard'
import InfiniteScroll from 'react-infinite-scroller';
import { useLocation } from 'react-router-dom';
import SearchAppBar from './components/SearchAppBar';

export default function Stations() {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [stations, setStations] = useState([]);
    const [name, setName] = useState('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search); // Parse query string

    const country = searchParams.get('country');
    const { isSuccess, isError, error, data, isLoading } = useQuery(['stations', limit, offset, name], () => getStations(country, limit, offset, name))
    useEffect(() => {
        if (isSuccess) {
            offset > 0 ? setStations(preStation => [...preStation, ...data]) : setStations(data)
        }
    }, [data, limit, offset])
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
    useEffect(() => {
        setStations([])
        setOffset(0)
        setLimit(10)
    }, [name])

    return (
        <>
            <div>
                <SearchAppBar title={'Stations'} setQuery={setName} />
            </div>
            {isSuccess ?
                <>
                    <InfiniteScroll
                        style={{ marginTop: 100, marginBottom: 150 }}
                        pageStart={0}
                        loadMore={loadFunc}
                        hasMore={isSuccess && data.length > 0}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        {stations?.map((station, key) => station.name ? <StationCard key={station.changeuuid} station={station} /> : '')}
                    </InfiniteScroll>

                    {stations.length == 0 ? <div style={{ height: '100dvh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0 }}><h1>No Station Found!</h1></div> : ''}
                </>
                : ''}
        </>
    )
}
