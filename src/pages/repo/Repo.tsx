import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useFetchReadme } from '../../hooks/useFetchReadme'
import remarkGfm from 'remark-gfm'

const Repo: React.FC = () => {

    const {username = '', repo = ''} = useParams()
    const {result, loading} = useFetchReadme(username, repo)

    const style = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        overflowY: 'auto'
    };

    return (
        <div style={style as React.CSSProperties}>
            <h3>Repo</h3>
            <p>{`${loading}`}</p>
            <ReactMarkdown children={result} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default Repo