import styled from "styled-components"

const H1Custom = styled.h1`
  margin: 1rem 0;
  font-size: 25px;
  text-align: left;
`
export default function Title({children}) {
  return (
    <H1Custom>
      {children}
    </H1Custom>
  )
}