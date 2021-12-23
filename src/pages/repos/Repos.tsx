import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { RepoCard } from '../../components/RepoCard'
import BackButton from '../../assets/back-button.svg'

const Repos: React.FC = () => {

    const { username } = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    const repositories = location.state as any[];

    return (
        <div>
            <button onClick={() => navigate(-1)}>
                <img src={BackButton} width={'50px'}/>
            </button>
            <h3>Repositories for {username} </h3>

            {
                repositories.map((repo: any, index) => <RepoCard name={repo.name} url={`/${username}/${repo.name}`} key={index} /> )
            }
        </div>
    )
}

export default Repos