import React, { Component } from 'react'

class RegularClass {

}

class ComponentClass extends Component {

}

const regularClassInstance = new RegularClass()
const componentClassInstance = new ComponentClass()

console.log('regularClassInstance', regularClassInstance)
console.log('componentClassInstance', componentClassInstance)

class App extends Component {
  render () {
    return (
      <div>
                App
        <div>
                Hello
        </div>
      </div>
    )
  }
}

export default App
