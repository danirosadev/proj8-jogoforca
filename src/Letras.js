import styled from "styled-components"

export default function Letras({alfabeto, tentaALetra, clicado}) {
    return (
        <div>
            {alfabeto.map((a) =>
                <LetterButton data-test="letter"
                    key={a}
                    onClick={() => tentaALetra(a)}
                    disabled={clicado.includes(a)}
                    className="letra">
                    {a}
                </LetterButton>)}
        </div>
    )
}

const LetterButton = styled.button`
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: #d4486f;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    transition-duration: 0.4s;
    font-size: 20px;
    &:hover{
        filter: brightness(1.2);
    }
    &:disabled{
        background-color: #ef97a3;
        color: #d4486f;
    }
`