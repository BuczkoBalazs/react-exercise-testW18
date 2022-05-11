import React, { useEffect, useState } from 'react'

function Subscription() {

    const [sent, setSent] = useState(false)
    const [input, setInput] = useState('')
    const [succesSub, setSuccesSub] = useState(true)

    return (
        <div>
            <title>Subscribe to our newsletter</title>
        {sent ? (succesSub === true) ? <div>Subscribed</div> : <></> :
            <>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button disabled={ (input.includes('@' && '.') ? false : true)} onClick={ () => { 
                fetch('https://demoapi.com/api/series/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: {
                        "e-mail": {input}
                    }
                })
                .then(res => res.json());
                setSent(true)
                setTimeout(() => setSuccesSub(false), 5000)
            }}>Subscribe!</button>
            </>
        }
           </div>
    )
}

export default Subscription