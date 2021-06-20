import React, { FormEvent } from 'react'
import { Wrapper } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const index = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('oi', event)
  }

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

export default index
