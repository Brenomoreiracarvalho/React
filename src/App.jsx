import "./App.css"
import React from 'react';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParamento'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repetição/ListaAlunos";
import TabelaProdutos from "./components/repetição/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
export default function App() {
    return (
        <div className="App">
            <h1>Fundamento React</h1>
            <div className="Cards">
                <Card titulo="#08 - Condicional" color="#982395">
                   <ParOuImpar numero={21}></ParOuImpar> 
                </Card>
                <Card titulo="#07 - Tabela" color="#FF4C65">
                   <TabelaProdutos></TabelaProdutos> 
                </Card>
                <Card titulo="#06 - Repetição" color="#FF4C65">
                   <ListaAlunos></ListaAlunos> 
                </Card>
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"  />
                        <FamiliaMembro nome="Ana"  />
                        <FamiliaMembro nome="José"  />
                    </Familia>
                </Card>
                <Card titulo="# 04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito legal!" />
                </Card>
                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
            
            
            
            
            


        </div>
    );
}
