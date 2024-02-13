import React from 'react'

interface OscarProps {
children: React.ReactNode
}
const Oscar = ({children}: OscarProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Oscar
