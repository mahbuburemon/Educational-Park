import { useEffect, useState } from "react"

const useServices = () => {
    const [value, setVelue] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setVelue(data.slice(0, 4)))
    }, [])
    return [value];
}
export default useServices;