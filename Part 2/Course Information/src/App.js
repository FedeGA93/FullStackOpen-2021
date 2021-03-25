import { Content } from "./Components/Content/Content";
import { Headers } from "./Components/Headers/Headers";
import { Total } from "./Components/Footer/Total";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  

  return (
    <div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <Headers name={course.name}  />
            <Content parts={course.parts} />
            <Total exercises={course.parts} />
          </div>
        ))}

      </div>
      ;
    </div>
  );
};

export default App;
