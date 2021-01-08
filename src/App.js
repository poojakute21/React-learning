import React from 'react';
import FC from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>Hello! Welcome to React Learning</h1>
      <h1>This vide is about Component</h1>
      <FC />
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}
export default App;
