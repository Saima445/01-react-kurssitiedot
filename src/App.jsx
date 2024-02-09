const Header = (props) => {
  console.log(`Header propsi: ${props.course.name}`);
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log(
    `Contentin propsit: ${props.parts[0].name} ${props.parts[0].exercises} ${props.parts[1].name} ${props.parts[1].exercises} ${props.parts[2].name} ${props.parts[2].exercises}`
  );
  return (
    <section>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </section>
  );
};

const Part = (props) => {
  let output = `${props.part} ${props.exercises}`;
  return (
    <section>
      <p>{output}</p>
    </section>
  );
};

const Total = (props) => {
  console.log(
    `Totalin propsit: ${props.parts[0].exercises} ${props.parts[1].exercises} ${props.parts[2].exercises}`
  );
  const sum =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return (
    <section>
      <p>Number of exercises {sum}</p>
    </section>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundimentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;

{
  /* <Part {...props} /> */
}
