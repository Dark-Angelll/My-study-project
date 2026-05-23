import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const WaySecond = () => {
    const [inputState, setInput] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (inputState === 'BEHAPPY') {
            navigate('/activated');
        }
    }, [inputState])
    return (
        <input
        type="text" 
        placeholder="Введите промокод"
        value={inputState} 
        onChange={(event) => setInput(event.target.value)}
        />
    )}

    export default WaySecond;