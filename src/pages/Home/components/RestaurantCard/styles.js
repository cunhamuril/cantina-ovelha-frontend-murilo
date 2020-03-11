import styled from 'styled-components'

export const Card = styled.div`
  /* Box Model */
  width: 367px;
  height: 100px;
  border-radius: 4px;

  /* Other */
  opacity: 1;
  color: #404040;    
  background-color: #FFF;
  transition: all ease-out 0.2s;
  box-shadow: 0px 2px 4px #00000029;

  &:hover {        
    transform: scale(1.05);
  }
`

export const OpenInfo = styled.div`
  /* Display */
  position: absolute;
  display: inline-flex;
  transform: translateY(-15px) translateX(333px);

  /* Box Model */
  width: 48px;
  height: 48px;
  border-radius: 50px;

  /* Other */
  font-size: 11px;

  small {
    color: #FFF;
    line-height: 10px;
    font-weight: bold;
    text-align: center;
  }
`