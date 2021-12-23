import { useState } from "react"

export const useRepository = () => {
    const [repositories, setRepositories] = useState([])
    return { repositories, setRepositories }
}