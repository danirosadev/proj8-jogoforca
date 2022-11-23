export default function Letras({alfabeto, tentaALetra, clicado}) {
    return (
        <div>
            {alfabeto.map((a) =>
                <button data-test="letter"
                    key={a}
                    onClick={() => tentaALetra(a)}
                    disabled={clicado.includes(a)}
                    className="letra">
                    {a}
                </button>)}
        </div>
    )
}