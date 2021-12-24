import React, { useEffect, useState }  from 'react'
import { useFetchRepos } from '../hooks/useFetchRepos'
import { useRepository } from '../hooks/useRepository'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '@chakra-ui/react'
import FidgetSpinner from '../assets/Fidget-spinner.gif'

export const UsernameCard: React.FC = () => {
    const [username, setInputUsername] = useState('')
    const handleChange = (event: any) => setInputUsername(event.target.value)
    const { repositories, setRepositories } = useRepository()
    const {loading, fetchRepo} = useFetchRepos(username, setRepositories)
    const navigate = useNavigate()
    


    const fetchRepositories = () => {
        fetchRepo(username)
    }

    useEffect(() => {
        if(repositories.length > 0){
            navigate( `/${username}`, {state: repositories})
        }
    }, [repositories])

    return (
        <div className='username-card'>
            <h3>Please enter your Github username </h3>
            <Input value={username} onChange={handleChange} placeholder='Github Username' />
            <Button onClick={fetchRepositories}>
                {loading && <img src={FidgetSpinner} width={'30px'}/> }
                {!loading && <span>Get Repositories</span> }
            </Button>
        </div>
    )
}