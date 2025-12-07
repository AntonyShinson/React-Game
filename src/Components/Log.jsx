export default function Log({turns})
{
    return <ol id="log">
    {turns.map((turn=><li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row} ,{turn.square.col}</li>))}
    </ol>
}
#hello i am anntony shinson studying in scms college if enginjeering and technology and i am studying in coputer related fie;d an how withnes can occuur in the cancel in the field and also
