import React from 'react';
export default function Aleatorio(props) {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p><strong>Valor min: </strong> {props.min}</p>
            <p><strong>Valor max: </strong> {props.max}</p>
            <p><strong>Valor escolhido: </strong> {aleatorio}</p>
        </div>
    )
}