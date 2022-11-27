import styled from "styled-components"

export default function Chute({habilitado, chute, setChute,chutouNoInput}) {
    return (
        <div>
            <GuessInput data-test="guess-input" value={chute} onChange={(e) => setChute(e.target.value)} disabled={habilitado} placeholder="Já sei a palavra!"></GuessInput>
            <GuessButton onClick={chutouNoInput} className="chutar" data-test="guess-button" disabled={habilitado}>Chutar</GuessButton>
        </div>
    )
}

const GuessInput = styled.input`
    width: 100px;
    height: 20px;
    border: none;
    margin: 5px;
`
const GuessButton = styled.button`
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background-color: #d4486f;
    color: #ffffff;
    margin: 5px;
    &:hover{
        background-color: #df5c7e;
    }
    &:disabled{
        background-color: #ef97a3;
        color: #d4486f;
    }
`