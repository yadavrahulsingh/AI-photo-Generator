import React from 'react'

function SingleHistory({data}) {
  return (
    <div>
        <div className="flex rounded-md bg-slate-200  px-2 py-2 " >
            {data}
        </div>
    </div>
  )
}

export default SingleHistory