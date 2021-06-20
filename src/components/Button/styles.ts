import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.button`
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: 0.75em 4em;
  border-radius: 0.3em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
  }
`
