import { Link } from "react-router-dom"
import "../css/RepoCard.css"

export const RepoCard: React.FC<{name: string, url: string, [key: string]: any}> = ({name, url, ...pros}) => {

    return (
        <div className="repo-card">
            <h4>Repo name: {name}</h4>
            <p>Link: <Link to={url}>{url} </Link> </p>
        </div>
    )
}