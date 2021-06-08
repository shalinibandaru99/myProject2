import React from 'react'

function Display(props) {
    return (
        <div>
          {props.first}
          {props.last}
          {props.phone}
        </div>
    )
}

export default Display
