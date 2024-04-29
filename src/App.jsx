import ActionAreaCard from './components/ActionAreaCard'
import { Grid } from '@mui/material'
import { getCountries } from './api/api'
import { useQuery } from 'react-query'
import randomColor from 'randomcolor'
import { Link } from 'react-router-dom'
import SearchAppBar from './components/SearchAppBar'
import { useEffect, useState } from 'react'


function App() {
  const { isSuccess, data, isError, isLoading, error } = useQuery("countries", getCountries, {
    refetchOnMount: false
  });
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState(data);

  
  useEffect(() => {
    if(query) {
      setCountries(data.filter((item) => ((item.name).toLocaleLowerCase()).includes(query.toLocaleLowerCase())))
    } else {
      setCountries(data)
    }
  }, [data, query])
  

  return (
    <>
      <SearchAppBar title={"Radio App"} placeholder={"search country..."} setQuery={setQuery} />
      <Grid container marginTop={13} marginBottom={20}>
        { isSuccess ?
          countries?.map((country, key) => {
            if(country.name) {
              const color = randomColor({
                luminosity: 'dark'
              })
              return (
  
                <Grid xs={6} padding={.5} key={key}>
                  <Link to={`/stations?country=${country.name}`} style={{ textDecoration: 'none' }}>
                    <ActionAreaCard country={country} color={color} />
                  </Link>
                </Grid>
              )
            }
          }) : ''
        }
      </Grid>
    </>
  )
}

export default App
