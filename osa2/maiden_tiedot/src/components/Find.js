import React from 'react'

const Find = (props) => (
    <div>
      Find countries:
      <input 
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )

export default Find