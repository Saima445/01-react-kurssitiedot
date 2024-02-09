const Header = (props) => {
  console.log("Terveiset HEADER komponentista");
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("Moro CONTENT komponentista");
  return (
    <section>
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />
      {/* <Part {...props} /> */}
    </section>
  );
};

const Part = (props) => {
  console.log("Heipsu PART komponentista");
  return (
    <section>
      <p>
        {props.part} {props.exercises}
      </p>
    </section>
  );
};

const Total = (props) => {
  console.log("Päivää TOTAL komponentista");
  return (
    <section>
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </section>
  );
};

const App = () => {
  console.log("Moikka APP komponentista");
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        part1E={part1.exercises}
        part2E={part2.exercises}
        part3E={part3.exercises}
      />
    </>
  );
};

export default App;

{
  /* <h1>{course}</h1>
<p>
  {parts[0].name} {parts[0].exercises}
</p>
<p>
  {parts[1].name} {parts[1].exercises}
</p>
<p>
  {parts[2].name} {parts[2].exercises}
</p> */
}

// const parts = [
//   {
//     name: "Fundimentals of React",
//     exercises: 10,
//   },
//   {
//     name: "Using props to pass data",
//     exercises: 7,
//   },
//   {
//     name: "State of a component",
//     exercises: 14,
//   },
// ];
