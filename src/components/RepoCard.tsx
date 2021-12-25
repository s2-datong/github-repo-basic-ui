import { Button } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import GitIconSvg from '../assets/git-icon.svg'
import "../css/RepoCard.css"

export const RepoCard: React.FC<{name: string, url: string, [key: string]: any}> = ({name, url, ...pros}) => {

    const navigate = useNavigate()
    return (
        <div className="repo-card">
            <img src={GitIconSvg} width={'70px'}/>
            <h4 style={{minWidth: '300px'}}>{name}</h4>
            <Button className="repo-btn" onClick={() => {navigate(url)}}> View Read me </Button>
        </div>
    )
}