import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import colors from '../../styles/colors'
import { deviceMinWidth } from '../../styles/devices'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.lightGray2};
  color: #fff;

  border-radius: 0.3em;
  border: 1px solid ${colors.darkLetter};

  width: 100%;

  position: relative;
  display: flex;
  align-items: center;

  transition: all 0.3s ease-in;

  & + div {
    margin-top: 12px;
  }

  ${(props): false | FlattenSimpleInterpolation =>
    props.isFocused &&
    css`
      color: ${colors.white};
    `}

  ${(props): false | FlattenSimpleInterpolation =>
    props.isFilled &&
    css`
      color: ${colors.white};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${colors.darkLetter};
    line-height: 15px;
    padding: 25px 64px 9px 16px;
    transition: all 0.3s ease-out;

    @media ${deviceMinWidth.desktop} {
      line-height: 40px;
    }

    &::placeholder {
      color: transparent;
    }

    &:focus + label {
      font-size: 0.75em;
      margin-top: 8px;
    }

    &:not(:placeholder-shown) + label {
      font-size: 0.75em;
      margin-top: 8px;
    }
  }

  > svg {
    margin-right: 16px;
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 18px;
    padding-left: 16px;
    font-size: 0.8em;
    color: ${colors.lightGray};
    transition: all 0.3s ease-out;
  }
`
