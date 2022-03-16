function Items({items, setItems}) {


  const listItems = items?.map(item=> (
    <table key={item.id} style={{width: '100%', textAlign: 'center'}} >
      <tr>
        <th>Name</th>
        <th>Receive Date</th>
        <th>Time Extension</th>
        <th>New Expiration Date</th>
      </tr>
      <tr>
        <td>{item.name}</td>
        <td>{item.receive_date}</td>
        <td>{item.timeframe}</td>
        <td>{item.extended_date}</td>
      </tr>
    </table>

  ))

  console.log(listItems)

  return (
    <div>
      <h1>Items</h1>
      {listItems}
    </div>
  );
}
export default Items;
