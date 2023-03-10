import React from 'react'

export default function Login() {
  return (
    <div>
          <table>
            <caption className='title'>Student Data</caption>
            <tr classNAME="head">
                <th>Name</th>
                <th>Roll No</th>
                <th>Percentage</th>
            </tr>
            <tr className="data">
                <td>Nikita</td>
                <td> 01</td>
                <td>85%</td>
            </tr>
            <tr>
              <td>Aparna</td>
              <td>02</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>Sai</td>
              <td>03</td>
              <td>82%</td>
            </tr>
            <tr>
              <td>Vaishnavi</td>
              <td>04</td>
              <td>96%</td>
            </tr>
            <tr>
              <td>Poonam</td>
              <td>05</td>
              <td>87%</td>
            </tr>
          </table>
          
    </div>
  )
}