// const Header = (props) => {
//   console.log("Terveiset HEADER komponentista");
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   );
// };

// const Content = (props) => {
//   console.log("Moro CONTENT komponentista");
//   return (
//     <section>
//       <Part part={props.part1} exercises={props.exercises1} />
//       <Part part={props.part2} exercises={props.exercises2} />
//       <Part part={props.part3} exercises={props.exercises3} />
//       {/* <Part {...props} /> */}
//     </section>
//   );
// };

// const Part = (props) => {
//   console.log("Heipsu PART komponentista");
//   return (
//     <section>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </section>
//   );
// };

// const Total = (props) => {
//   console.log("Päivää TOTAL komponentista");
//   return (
//     <section>
//       <p>
//         Number of exercises{" "}
//         {props.exercises1 + props.exercises2 + props.exercises3}
//       </p>
//     </section>
//   );
// };

const App = () => {
  console.log("Moikka APP komponentista");
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundimentals of React",
    exercises: 10,
  };
  console.log(part1);
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
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </>
  );
};

export default App;
