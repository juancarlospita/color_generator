import Values from 'values.js'
import './App.css'
import { useState } from 'react'
import FormColor from './components/FormColor';
import DisplayColors from './components/DisplayColors';
import React from 'react';

function App() {

  const [list, setList] = useState (new Values('#802FDE').all(20));

  console.log(list);
  

  return (
    <> 
    <FormColor setList={setList}/>
    <DisplayColors list={list}/>
    </>
  )
}

export default App
