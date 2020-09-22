import React from 'react';

const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name} />
        <Content parts={props.course.parts} />
        <Total total={props.total} />
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h2>
          {props.name}
        </h2>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part =>
          <Part key={part.id} part={part.name} exercises={part.exercises} />
        )}
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <b>total of {props.total} exercises</b>
      </div>
    )
  }

  export default Course