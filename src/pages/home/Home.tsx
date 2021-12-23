import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Col } from '../../components/Col'
import { UsernameCard } from '../../components/UsernameCard'
import { Repo, Repos} from '../../pages'

import './home.css'

const Home: React.FC = () => {

    const style = {
        backgroundColor: '#632dc2',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="flex-container">
            <Col style={style}>
                <h3>Hello</h3>
            </Col>
            <Col>
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