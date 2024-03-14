import ActionAreaCard from './components/ActionAreaCard'
import { Grid } from '@mui/material'
import ButtonAppBar from './components/ButtonAppBar'
import { getCountries } from './api/api'
import { useQuery } from 'react-query'
import randomColor from 'randomcolor'
import { Link } from 'react-router-dom'


function App() {
  const { isSuccess, data, isError, isLoading, error } = useQuery("countries", getCountries, {
    refetchOnMount: false
  });

  return (
    <>
      <ButtonAppBar />
      <Grid container marginTop={8} marginBottom={20}>
        { isSuccess ?
          data.map((country, key) => {
            const color = randomColor({
              luminosity: 'dark'
            })
            return (

              <Grid xs={6} padding={.5} key={key}>
                <Link to={`/stations?country=${country.name}`}>
                  <ActionAreaCard country={country} color={color} />
                </Link>
              </Grid>
            )
          }) : ''
        }
      </Grid>
    </>
  )
}

export default App
