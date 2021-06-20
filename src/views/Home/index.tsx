import React, { FormEvent } from 'react'
import { Wrapper } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'

const Home: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const getData = async () => {
    const response = await api.get(
      `/summoner/v4/summoners/by-name/FERAVITINHOXDXD?api_key=${process.env.REACT_APP_API_KEY}`
    )
    console.log(response)
  }

  getData()

  return (
    <Wrapper>
      <form className='searchForm' onSubmit={handleSubmit}>
        <Input placeholder='Procure por um invocador'></Input>
        <Button type='submit' className='searchButton'>
          Procurar
        </Button>
      </form>
    </Wrapper>
  )
}

export default Home
