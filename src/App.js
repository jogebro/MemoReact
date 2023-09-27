import React, {Component, useMemo, useState} from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 1em;
`

const Label = styled.span`
  font-weight: bold;
`

const concat = (first, second) => `${first} . . . ${second}`

const WithoutMemo = ({first, second}) => {
  const str = concat(first, second);
  return(
    <div>
      {str}
    </div>
  )
}

const UseMemo = ({first, second}) => {
  const str = useMemo(()=>concat(first, second),[first, second])
  return(
    <div>
      {str}
    </div>
  )
}

const UseFirstOnlyMemo = ({first, second}) => {
  const str = useMemo(()=> concat(first, second),[first])
  return(
    <div>
      {str}
    </div>
  )
}

const UseSecondOnlyMemo = ({first, second}) => {
  const str = useMemo(()=> concat(first, second),[second])
  return(
    <div>
      {str}
    </div>
  )
}

const UseNoRevokeyMemo = ({first, second}) => {
  const str = useMemo(()=> concat(first, second),[])
  return(
    <div>
      {str}
    </div>
  )
}


const Inputs = () => {
  const [first, setFirst] = useState('first');
  const [second, setSecond] = useState('second');
  return(
    <div>
      <Box>
        <div>
          First:
          <input
          onChange={(e)=>setFirst(e.target.value)}
          value={first}
          ></input>
        </div>
        <div>
          Second:
          <input
          onChange={(e)=>setSecond(e.target.value)}
          value={second}
          ></input>
        </div>
      </Box>
      <Box>
        <Label>
          Ejercicio Memo:
        </Label>
        <WithoutMemo first={first} second={second}></WithoutMemo>
      </Box>
      <Box>
        <Label>
          UseMemo(...,[first,second])
        </Label>
        <UseMemo first={first} second={second}></UseMemo>
      </Box>
      <Box>
        <Label>
          UseFirstOnlyMemo(...,[first])
        </Label>
        <UseFirstOnlyMemo first={first} second={second}></UseFirstOnlyMemo>
      </Box>
      <Box>
        <Label>
          UseSecondOnlyMemo(...,[second])
        </Label>
        <UseSecondOnlyMemo first={first} second={second}></UseSecondOnlyMemo>
      </Box>
      <Box>
        <Label>
          UseNoRevokeyMemo(...,[ ])
        </Label>
        <UseNoRevokeyMemo first={first} second={second}></UseNoRevokeyMemo>
      </Box>
    </div>
  )
}

class App extends Component {
  render(){
    return(
      <div>
        <Inputs/>
      </div>
    )
  }
}

export default App;