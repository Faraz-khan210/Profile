import React from 'react'
import List from './List'
import User from './User'

function SideNav() {
  return (
    <>
    <div className="container">
        <User/>
        <List/>
    </div>
    </>
  )
}

export default SideNav