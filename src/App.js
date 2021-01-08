import React from 'react';
import ClassProps from './ClassProps';
import FunctionalProps from './FunctionalProps'

class App extends React.Component{
  render() {
    return <div>
      <ClassProps name="The learner 1" place="PlaceX"><p>Child Component</p> </ClassProps>
      <ClassProps name="The learner 2" place="PlaceY"> </ClassProps>
      <ClassProps name="The learner 3" place="PlaceZ"> </ClassProps>
      <FunctionalProps name="Ther learner 4" place="PlaceA"></FunctionalProps>
    </div>
  }
}

export default App;
