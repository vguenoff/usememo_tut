import { useState, useEffect, useMemo, useCallback } from 'react'

const getArray = () => {
    for (let i = 0; i < 1000000000; i++) {
        //do something expensive
    }
    return ['Dave', 'Gray']
}

function App() {
    const [userNumber, setUserNumber] = useState('')
    const [randomInput, setRandomInput] = useState('')

    // 1, 2, 3, 5, 8
    // useCallback memoizes the function
    const fib = useCallback(n => (n > 1 ? fib(n - 1) + fib(n - 2) : n), [])

    // useMemo memoizes the output of a function
    const fibNumber = useMemo(() => fib(userNumber), [fib, userNumber])

    useEffect(() => {
        console.log(`new number ${fibNumber}`)
    }, [fibNumber])

    return (
        <main className="App">
            <label>Fibonacci Sequence:</label>
            <input
                type="number"
                value={userNumber}
                placeholder="Position"
                onChange={e => setUserNumber(e.target.value)}
            />
            <p>Number: {fibNumber || '--'}</p>
            <br />
            <br />
            <label>Random Input:</label>
            <input
                type="text"
                value={randomInput}
                placeholder="Random Input"
                onChange={e => setRandomInput(e.target.value)}
            />
            <p>{randomInput}</p>
        </main>
    )
}

export default App
