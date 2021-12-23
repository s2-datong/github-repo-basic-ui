import { Link } from "react-router-dom"

export const RepoCard: React.FC<{name: string, url: string, [key: string]: any}> = ({name, url, ...pros}) => {

    return (
        <div>
            <h4>{name}</h4>
            <Link to={url}> {url} </Link>
        </div>
    )
}