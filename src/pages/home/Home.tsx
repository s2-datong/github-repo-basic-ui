import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Col } from '../../components/Col'
import { UsernameCard } from '../../components/UsernameCard'
import { Repo, Repos} from '../../pages'
import GithubLogo from '../../assets/github-logo2.png'

import './home.css'

const Home: React.FC = () => {

    return (
        <div className="flex-container">
            <Col className='side'>
                <img src={GithubLogo} width={'300px'}/>
                <h2>API Project</h2>
            </Col>
            <Col style={{padding: '10px'}}>
                <Routes>
                    <Route path='/' element={<UsernameCard />} />
                    <Route path=':username' element={<Repos />} />
                    <Route path=':username/:repo' element={<Repo />} />
                </Routes>
            </Col>
        </div>
    )
}

export default Home