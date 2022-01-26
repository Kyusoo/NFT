import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from '@mui/material';

import storage from './storage/data.json'

const App = () => {

    return (
        <Container maxWidth="sm">
            <h1>Kyusoo's NFT Storage</h1>
            <img style={{ width: '600px' }} src={`storage/${storage[0].collection}/${storage[0].filename}`} />
        </Container>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))