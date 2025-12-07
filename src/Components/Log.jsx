export default function Log({turns})
{
    return <ol id="log">
    {turns.map((turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row} ,{turn.square.col}</li>))}
    </ol>
}
#hello in tngf jjyf jyfjyf kloi gjf ytdytf fyty tddjyfyf tdyfy y yffhyt y
