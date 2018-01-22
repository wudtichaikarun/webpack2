import React from 'react'

function getMessage() {
  return 'Romantic'
}

export default() => (
  <div>
    <h1>{getMessage()}</h1>
    <div>Hello</div>
  </div>
)