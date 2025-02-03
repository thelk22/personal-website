import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Full Stack Software Engineer',
                    'Cloud Solution Architect',
                ],
                autoStart: true,
                loop: true,
                delay: 10,
                deleteSpeed: 10,
            }}
        />
    )
}

export default Type
