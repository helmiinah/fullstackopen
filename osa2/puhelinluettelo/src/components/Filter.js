import React from 'react';

const Filter = (props) => (
    <div>
      Filter results:
      <input 
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )

  export default Filter