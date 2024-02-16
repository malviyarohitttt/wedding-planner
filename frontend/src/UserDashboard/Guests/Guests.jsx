import React from 'react'
import User from '../User/User'

function Guests() {
  return <>
   <User/>
   <div className="container">
   <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Guest Name</th>
                    <th>Guest Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Rohit Malviya</td>
                    <td>9669264151</td>
                </tr>
            </tbody>
        </table>
   </div>
  </>
}

export default Guests
