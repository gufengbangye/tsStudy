import React, { Component } from 'react'
import  ReactDOM  from 'react-dom'

const App : (() => JSX.Element) = () => {
    return <div>
        hello,React
    </div>
}
ReactDOM.render(<App></App>,document.getElementById('app'))
