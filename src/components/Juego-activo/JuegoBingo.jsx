import "./juegobingo.css"
import React, {Component} from 'react'

import CartonBingo from '../carton-bingo/CartonBingo'
import TablaBingo from '../tabla-bingo/TablaBingo'

export default class JuegoBingo extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='title'>Salon de espera</h1>
                <div className="loby">
                    <div className='sideleft'>
                        <CartonBingo/>
                    </div>
                    <div className='sideright'>
                        <TablaBingo/>
                    </div>
                </div>
            </div>
        )
    }
}
