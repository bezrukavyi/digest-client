import React from 'react'
import classnames from 'classnames'

const Input = ({ name, type, ...props }) => {
  const touched = props.touched[name]
  const error = props.errors[name]
  const value = props.values[name]

  return (
    <div className='form-group'>
      <input
        type={type}
        name={name}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={value || ''}
      />

      {error && <div>{error}</div>}
    </div>
  )
}

export default Input
