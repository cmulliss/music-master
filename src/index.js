import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))

// Link and Router don't cause complete refresh

// children allows us to put <App/> or <Jokes/> within the header tags, now App becomes a child of the header component. Then react provides a way to access the inner jsx through a children key in the props object.

// now get a render property, with a callback to a pair of header tags, and within the header tags we supply jsx.
