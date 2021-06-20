import styled from 'styled-components'
import { deviceMinWidth } from '../../styles/devices'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .searchButton {
    margin-top: 0.2rem;
    width: 100%;
  }

  @media ${deviceMinWidth.tablet} {
    margin: 0 200px;

    .searchForm {
      width: 100%;
    }
  }
`
