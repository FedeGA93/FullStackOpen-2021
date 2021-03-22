import { Content } from './Components/Content/Content';
import { Headers } from './Components/Headers/Headers';
import {Total} from './Components/Footer/Total'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Headers name={course.name}/>

      <Content parts={course.parts}/>

      <Total parts={course.parts}/>
    </div>
  );
}

export default App;
