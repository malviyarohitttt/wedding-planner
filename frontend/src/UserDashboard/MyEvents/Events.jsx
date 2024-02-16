import React from 'react'
import User from '../User/User'

function Events() {
  return <>
    <User/>
    <div className="container">
        <div className='mt-2'>
            <button className='btn btn-secondary'>Add New Event</button>
        </div>
        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Dj Night</td>
                    <td>Indore</td>
                    <td>15-03-24</td>
                    <td>16-03-24</td>
                </tr>
            </tbody>
        </table>
    </div>
  </>
}


export default Events
