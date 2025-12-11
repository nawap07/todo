import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassGenerator = () => {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)

    const passwordRef = useRef();
    const handleCopy = useCallback(() => {
        passwordRef.current.select();
        navigator.clipboard.writeText(password)
    }, [password])

    const genetatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurtuvwxyz";
        if (number) str += "1234567890";
        if (character) str += "~!@#$%^&*()_+{}[]?><"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, setPassword, character, number]);

    useEffect(() => {
        genetatePassword();
    }, [genetatePassword, length, number, character])
    return (
        <div>
            <input type="text" value={password} ref={passwordRef} readOnly />
            <button onClick={handleCopy}>Copy</button>
            <p>{length} Length</p>
            <input type="range" min={8} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <input type="checkbox" onChange={() => setNumber(prev => !prev)} />Number
            <input type="checkbox" onChange={() => setCharacter(prev => !prev)} />Charactor
        </div>
    )
}

export default PassGenerator