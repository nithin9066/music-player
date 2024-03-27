import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getStations } from './api/api'
import StationCard from './components/StationCard'
import InfiniteScroll from 'react-infinite-scroller';
import { useLocation } from 'react-router-dom';
import SearchAppBar from './components/SearchAppBar';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setStations } from './redux/PlayerSlice';

export default function Stations() {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const { currentStationIndex, stations } = useSelector(state => state.player)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search); // Parse query string

    const country = searchParams.get('country');
    const { isSuccess, isError, error, data, isLoading } = useQuery(['stations', limit, offset, name], () => getStations(country, limit, offset, name))
    useEffect(() => {
        if (isSuccess) {
            offset > 0 ? dispatch(setStations([...stations, ...data])) : dispatch(setStations((data)))
        }
    }, [data, limit, offset])
    const loadFunc = () => {
        setOffset(preOffset => preOffset + limit)
        setLimit(prevLimit => prevLimit + 5)
    }
    useEffect(() => {
        if(name != '') {
            dispatch(setStations([]))
            setOffset(0)
            setLimit(10)
        }
    }, [name])

    useEffect(() => {
        if(stations?.length - (currentStationIndex + 3) <= 0) {
            loadFunc();
        }
    }, [currentStationIndex])
    
    
    return (
        <>
            <div>
                <SearchAppBar title={'Stations'} setName={setName} />
            </div>
            <InfiniteScroll
                style={{ marginTop: 100 }}
                pageStart={0}
                loadMore={loadFunc}
                hasMore={isSuccess && data.length > 0}
                loader={<div style={{textAlign:'center'}}><CircularProgress color='secondary' key={0} /></div>}
            >
                {stations?.map((station, key) => <StationCard key={key} index={key} station={station} />)}
            </InfiniteScroll>
            
            {stations.length == 0 ? <div><h1>No Station Found!</h1></div> : ''}
        </>
    )
}
