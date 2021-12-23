import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchReadme } from '../../hooks/useFetchReadme'
import remarkGfm from 'remark-gfm'
import BackButton from '../../assets/back-button.svg'

const Repo: React.FC = () => {

    const {username = '', repo = ''} = useParams()
    const {result, loading} = useFetchReadme(username, repo)
    const navigate = useNavigate()

    const style = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        overflowY: 'auto'
    };

    return (
        <div style={style as React.CSSProperties}>
            <button onClick={() => navigate(-1)}>
                <img src={BackButton} width={'50px'}/>
            </button>
            <h3>Repo</h3>
            <ReactMarkdown children={result} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default Repo