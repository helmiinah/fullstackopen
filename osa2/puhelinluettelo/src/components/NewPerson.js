import React from 'react';

const NewPerson = (props) => (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          Name: 
          <input 
            value={props.nameValue}
            onChange={props.onNameChange}
          />
        </div>
        <div>
          Number: 
          <input 
            value={props.numberValue}
            onChange={props.onNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )

  export default NewPerson