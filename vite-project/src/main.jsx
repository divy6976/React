import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp() {

return (
    <div>
        <h1>Custom App !</h1>
    </div>
)

}

//is syntax ko parse krke aisi syntax me likhte h


// const ReactElement={
//     type:'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'Click me to visit google'
// }

const AnotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const AnotherUser="divy"
const ReactElement= React.createElement(
    'a',  
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'click me to visit google',
    AnotherUser
)

createRoot(document.getElementById('root')).render(
   AnotherElement
)
