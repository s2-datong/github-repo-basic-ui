import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { RepoCard } from '../../components/RepoCard'

const Repos: React.FC = () => {

    const { username } = useParams()
    const location = useLocation()

    const repositories = location.state as any[];

    return (
        <div>
            <h3>Repositories for {username} </h3>

            {
                repositories.map((repo: any, index) => <RepoCard name={repo.name} url={`/${username}/${repo.name}`} key={index} /> )
            }
        </div>
    )
}

export default Repos