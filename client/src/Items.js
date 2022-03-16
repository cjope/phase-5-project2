function Items({items}) {

  const listItems = items?.map(item=> (
      <tr key={item.id} >
        <td key={item.name} >{item.name}</td>
        {/* <td>{new Date(item.receive_date).toLocaleDateString("en-us", {weekday: "short", month: "short", day:"numeric", year: "numeric"})}</td> */}
        <td key={item.receive_date} >{new Date(item.receive_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>

        <td key={item.timeframe} >{item.timeframe}</td>
        {/* <td>{new Date(item.extended_date).toLocaleDateString("en-us", {weekday: "short", month: "short", day:"numeric", year: "numeric"})}</td> */}
        <td key={item.extended_date} >{new Date(item.extended_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>
        {/* <td>{((new Date(item.extended_date))-((new Date())).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td> */}
      </tr>
  ))

  return (
    <div>
      <h1>Items</h1>

      <table style={{width: '100%', textAlign: 'center'}} >
        <thead>
      <tr>
        <th>Name</th>
        <th>Receive Date</th>
        <th>Time Extension</th>
        <th>New Expiration Date</th>
      </tr>
      {listItems}
      </thead>
    </table>


    </div>
  );
}
export default Items;
