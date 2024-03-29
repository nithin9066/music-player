import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNextStation, setPrevStation } from '../redux/PlayerSlice';
const audio = new Audio();

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)
    const currentStation = useSelector(state => state.player.stations[state.player.currentStationIndex])
    const currentIndex = useSelector(state => state.player.currentStationIndex)
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        if (currentStation?.url) {
            audio.src = currentStation.url;
            setIsLoading(true)
            audio.play().then(() => {
                setIsPlaying(true)
            }).catch(error => {
                console.error('Error loading audio:', error);
            }).finally(() => setIsLoading(false))
        }
        return () => {
            audio.pause();
            audio.src = '';
            setIsPlaying(false)
        }
    }, [currentStation?.url])

    const PlayOrPause = () => {
        if (!isPlaying) {
            setIsLoading(true)
            audio.play().then(() => {
                setIsPlaying(true)
            }).finally(() => setIsLoading(false))
        } else {
            audio.pause()
            setIsPlaying(false)
        }
    }

    return (
        currentStation ?
            <div style={{ position: 'relative' }}>
                <Card style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', zIndex: 99 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography component="div" variant="body1">
                                {currentStation.name}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {currentStation.language}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous" disabled={currentIndex == 0 ? true : false} onClick={() => dispatch(setPrevStation())}>
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton aria-label="play/pause" onClick={PlayOrPause}>
                                {
                                    isLoading ? <CircularProgress /> : isPlaying ? <PauseCircleIcon sx={{ height: 38, width: 38 }} /> : <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                }
                            </IconButton>
                            <IconButton aria-label="next" onClick={() => dispatch(setNextStation())}>
                                <SkipNextIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Card>
            </div> : ''
    );
}
