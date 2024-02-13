import React from 'react'

interface StatusProps {
    status: 'loading' | 'success' | 'error'
}

const Status = ({status}: StatusProps) => {
    let message;
    if(status === "loading") {
        message = "Loading"
    } else if (status === "success") {
        message = "Data Fetched Succesfull"
    } else {
        message = "Error Fetching data"
    }

return (
    <div>
      <h2>Status of data - {message}</h2>
    </div>
  )
}

export default Status
