import { useState } from "react"
import Chute from "./Chute"
import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import Jogo from "./Jogo"
import Letras from "./Letras"
import palavras from "./palavras"
import GlobalStyle from "./GlobalStyle"
import styled from "styled-components"

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [habilitado, setHabilitado] = useState(true)
  const [erro, setErro] = useState(0)
  const [palavraSorteada, setPalavraSorteada] = useState([])
  const [novaPalavra, setNovaPalavra] = useState([])
  const [clicado, setClicado] = useState(alfabeto)
  const [stringAcento, setStringAcento] = useState("")
  const [chute, setChute] = useState("")
  const [status, setStatus] = useState("")

  function iniciarJogo() {
    setHabilitado(false)
    setClicado([])
    setErro(0)
    setChute("")
    sorteiaPalavra()
    setStatus("")
  }

  function fimDeJogo() {
    setClicado(alfabeto)
    setHabilitado(true)
    setChute("")
    setNovaPalavra(palavraSorteada)
  }

  function sorteiaPalavra() {
    const i = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[i]
    const arrayPalavra = palavra.split("")
    setPalavraSorteada(arrayPalavra)

    let tracinhos = []
    arrayPalavra.forEach((l) => tracinhos.push(" _"))
    setNovaPalavra(tracinhos)

    let palavraSemAcento = palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")
    setStringAcento(palavraSemAcento)
  }

  function tentaALetra(l) {
    setClicado([...clicado, l])
    if (stringAcento.includes(l)) {
      acertouLetra(l)
    } else {
      errouLetra(l)
    }
  }

  function acertouLetra(l) {
    let novaPalavraJogo = [...novaPalavra]
    palavraSorteada.forEach((letra, i) => {
      if (stringAcento[i] === l) {
        novaPalavraJogo[i] = letra
      }
    })
    setNovaPalavra(novaPalavraJogo)
    if (!novaPalavraJogo.includes(" _")) {
      setStatus("win")
      fimDeJogo()
    }
  }

  function errouLetra(l) {
    let novaQtdErros = erro + 1
    setErro(novaQtdErros)

    if (novaQtdErros === 6) {
      setStatus("loose")
      fimDeJogo()
    }
  }

  function chutouNoInput() {
    let palavraString = palavraSorteada.join("")
    if (palavraString === chute) {
      setStatus("win")
    } else {
      setStatus("loose")
      setErro(6)
    }
    fimDeJogo()
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo
          imagens={imagens}
          erro={erro}
          iniciarJogo={iniciarJogo}
          status={status}
          novaPalavra={novaPalavra}
          palavraSorteada={palavraSorteada}
        />

        <Letras
          alfabeto={alfabeto}
          tentaALetra={tentaALetra}
          clicado={clicado}
        />

        <Chute
          habilitado={habilitado}
          chute={chute}
          setChute={setChute}
          chutouNoInput={chutouNoInput}
        />
      </Container>
    </>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`