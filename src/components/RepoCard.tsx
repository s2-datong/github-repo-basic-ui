import { Link } from "react-router-dom"

export const RepoCard: React.FC<{name: string, url: string, [key: string]: any}> = ({name, url, ...pros}) => {

    const style = {
        padding: '30px',
        borderRadius: '10px',
        backgroundColor: '#eee',
        margin: '10px'
    };
    return (
        <div style={style}>
            <h4>Repo name: {name}</h4>
            <p>Link: <Link to={url}>{url} </Link> </p>
        </div>
    )
}