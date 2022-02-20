import React, {useEffect, useState} from 'react'

const Clock = () => {
    const [time, setTime] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <>
            <p>{time}</p>
        </>
    )
}

export default Clock
