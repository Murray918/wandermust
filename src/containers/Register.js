import React {Component} from 'react'
'use strict'

export default class Register extends Component {
  constructor(props){
    super(props)



    this.state = {
      username : '',
      password : ''
    }

  }
  render (){
  return (
    <div>
      <form type = "submit">
        <input type = 'text' placeholder = 'User Name'></input>
        <input type = 'password' placeholder = 'Password '></input>
        <button type ='submit' onClick = ""></button>
      </form>
    </div>

  )
}
}
