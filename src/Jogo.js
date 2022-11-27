import styled from "styled-components"

export default function Jogo({imagens, erro, iniciarJogo, novaPalavra, status, palavra}) {
    return (
        <GameContainer>
            <ForcaImg src={imagens[erro]} data-test="game-image" className="forca" alt="forca" />
            <RightContainer>
                <ChooseWordButton data-test="choose-word"
                    onClick={iniciarJogo}
                    className="escolher-palavra">Escolher Palavra</ChooseWordButton>

                <div data-test="word" data-answer={palavra}>
                    <Word status={status}>{novaPalavra}</Word>
                </div>
            </RightContainer>
        </GameContainer>
    )
}

function returnColor(status){
    if(status === "win"){
        return "green"
    } else if (status === "loose"){
        return "red"
    } else {
        return "black"
    }
}

const GameContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
const ChooseWordButton = styled.button`
    width: 180px;
    height: 40px;
    margin: 40px;
    background-color: #d4486f;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    &:hover{
        background-color: #df5c7e;
    }
`
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ForcaImg = styled.img`
    width: 500px;
    height: 500px;
    margin: 20px;
`
const Word = styled.p`
    color: ${props => returnColor(props.status)};
`