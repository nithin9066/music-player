import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import MusicPlayer from './MusicPlayer'
export default function Wrapper({ children }) {
    const queryClient = new QueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
            <MusicPlayer />
            {children}
        </QueryClientProvider>
    )
}
