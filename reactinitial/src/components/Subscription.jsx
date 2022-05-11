import React, { useState } from 'react'

function Subscription() {

    const [sent, setSent] = useState(false)
    const [input, setInput] = useState('')
    const [succesSub, setSuccesSub] = useState(true)

    return (
        <>
        {sent ? (succesSub === true) ? <div>Subscribed</div> : null :
            <>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button disabled={ (input.includes('@' && '.') ? false : true)} onClick={ async () => { 
                const response = await fetch('https://demoapi.com/api/series/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: {
                        "e-mail": {input}
                    }
                })
                if(response.ok) {
                    setSent(true)
                    setTimeout(() => setSuccesSub(false), 5000)
                } else {
                    console.log("post method went wrong")
                }
            }}>Subscribe!</button>
            </>
        }
        </>
    )
}

export default Subscription