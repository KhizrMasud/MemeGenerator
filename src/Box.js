import React from 'react'

export default function Box(props) {

    const isOn = {
        backgroundColor: props.onProp ? "#222222" : "#cccccc"
    }

    return (
        <div
        style = {isOn}
        className='box'
        onClick={props.toggle}
        ></div>
    )
}