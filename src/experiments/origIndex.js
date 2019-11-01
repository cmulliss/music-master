import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../App'

ReactDOM.render(<App />, document.getElementById('root'))

class Animal {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  speak () {
    console.log('I am', this.name, 'and I am ', this.age, 'years old')
  }
}
const animal1 = new Animal('Simba', 3)
animal1.speak()
console.log('animal1:', animal1)

class Lion extends Animal {
  constructor (name, age, furColor, speed) {
    super(name, age)
    this.furColor = furColor
    this.speed = speed
  }
  roar () {
    console.log('I am', this.name, 'and I am ', this.age, 'years old', 'My fur color is', this.furColor, 'and I can run at', this.speed, 'mph')
  }
}
const lion1 = new Lion('Leo', 5, 'golden', 30)
lion1.speak()
lion1.roar()
