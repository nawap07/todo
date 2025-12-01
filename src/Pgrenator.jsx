import React, { useCallback, useEffect, useRef, useState } from 'react'

const Pgrenator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [number, setNumber] = useState(false)
    const [charcater, setCheracter] = useState(false)

    const passwordRef = useRef();

    const handleCopyPassword = useCallback(() => {
        passwordRef.current.select();
        navigator.clipboard.writeText(password)
    }, [password])

    const hanldePasswordGenerate = useCallback(() => {
        let pass = '';
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (number) str += "0123456789"
        if (charcater) str += "!@#$%^&*()+<>?\/|"

        for (let i = 1; i <= length; i++) {
            let charct = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(charct);
        }
        setPassword(pass);
    }, [number, setPassword, length, charcater])

    useEffect(() => {
        hanldePasswordGenerate()
    }, [hanldePasswordGenerate, length, number, charcater])
    return (
        <div>
            <input type="text" readOnly value={password} onChange={(e) => setPassword(e.target.value)} ref={passwordRef} />
            <button onClick={handleCopyPassword}>Copy</button>
            <br />
            <p> Total Length : {length}</p>
            <input type="range" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            numbers
            <input type="checkbox" onChange={() => setNumber(prev => !prev)} />
            Character
            <input type="checkbox" onChange={() => setCheracter(prev => !prev)} />
        </div>
    )
}

export default Pgrenator