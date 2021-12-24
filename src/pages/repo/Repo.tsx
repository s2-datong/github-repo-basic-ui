import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchReadme } from '../../hooks/useFetchReadme'
import remarkGfm from 'remark-gfm'
import BackButton from '../../assets/back-button.svg'
import { MiniLoader } from '../../components/MiniLoader'
import './repo.css'

const Repo: React.FC = () => {

    const {username = '', repo = ''} = useParams()
    const {result, loading} = useFetchReadme(username, repo)
    const navigate = useNavigate()

    return (
        <div className='repo'>
            <button onClick={() => navigate(-1)}>
                <img src={BackButton} width={'50px'}/>
            </button>
            <h3>Repo</h3>
            { 
                loading ? 
                    <MiniLoader /> :
                    <ReactMarkdown children={result} remarkPlugins={[remarkGfm]} />
            }
        </div>
       
        
    )
}

export default Repo