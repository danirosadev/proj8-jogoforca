export default function Jogo({imagens, erro, iniciarJogo, cor, novaPalavra}) {
    return (
        <div className="principal">
            <img src={imagens[erro]} data-test="game-image" className="forca" alt="forca" />
            <div className="right">
                <button data-test="choose-word"
                    onClick={iniciarJogo}
                    className="escolher-palavra">Escolher Palavra</button>

                <div data-test="word"
                    className={cor}>
                    {novaPalavra}
                </div>
            </div>
        </div>
    )
}