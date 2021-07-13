import React from 'react'

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <h1>header</h1>
      </header>
      <div>{children}</div>
    </div>
  )
}

export default BaseLayout
