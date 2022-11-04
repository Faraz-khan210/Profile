import React from 'react'
import Form from './Form'
import SideNav from './SideNav'

function Contain() {
  return (
    <div>
        <div className="row m-0">
            <div className="col-md-3 bg-primary">
                <SideNav/>  
                
            </div>
            <div className="col-md-8">
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contain