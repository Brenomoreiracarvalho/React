import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default function TabelaProdutos(props) {
    
    function getLinhas(){
        return produtos.map((produtos, i) => {
            return(
                <tr key={produtos.id} className={i % 2 === 0 ? 'Par' : 'Impar'} >
                    <td> {produtos.id} </td>
                    <td>{produtos.produto} </td>
                    <td>{produtos.preço} </td>
                        
                </tr>
            )
        })
    }
    return (
        <div className='TabelaProdutos'>
            <table border="0.5">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>produto</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
                
            </table>
        </div>
    )
}