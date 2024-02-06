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
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
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
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </section>
  );
};

const App = () => {
  console.log("Moikka APP komponentista");
  const course = "Half Stack application development";
  const part1 = "Fundimentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

export default App;
