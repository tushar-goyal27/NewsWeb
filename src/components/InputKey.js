import React, { useState } from 'react'

function InputKey(props) {
    const [formkey, setKey] = useState('')
    return (
        <nav className="navbar navbar-light bg-light pt-3">
            <a className="navbar-brand mb-2" style={{ "fontFamily": "Merriweather, serif"}} href="http://localhost:3000">News App</a>
            <form className="form-inline" onSubmit={(e) => props.getnewsdata(e, formkey)}>
                <label className="mb-2 mx-2">Keyword</label>
                <input value={formkey} className="form-control  mb-2 mr-sm-2 mr-2" placeholder="Enter keyword" onChange={(e) => setKey(e.target.value)} />
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </nav>
    )
}

export default InputKey
