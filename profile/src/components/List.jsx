import React from 'react'

function List() {
  return (
    <>
     <div className="container">
        <ul className='list-unstyled text-white  mt-3'>
            <li><a className='list-item'>Dashboard</a></li>
            <li><a className='list-item'>My Properties</a></li>
            <li><a className='list-item'>Email Preferences</a></li>
            <li><a className='list-item'>Saved Properties</a></li>
            <li><a className='list-item'>Search History</a></li>
            <li><a className='list-item'>Subscription Bills</a></li>
            <li><a className='list-item'>Requested Callbacks</a></li>
        </ul>
     </div>
    </>
  )
}

export default List