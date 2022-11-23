export default function Chute({habilitado, chute, setChute,chutouNoInput}) {
    return (
        <div>
            <input data-test="guess-input" value={chute} onChange={(e) => setChute(e.target.value)} disabled={habilitado} placeholder="Já sei a palavra!"></input>
            <button onClick={chutouNoInput} className="chutar" data-test="guess-button" disabled={habilitado}>Chutar</button>
        </div>
    )
}