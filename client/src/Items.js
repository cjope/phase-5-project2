function Items({items}) {

  const listItems = items?.map(item=> (
      <tr key={item.id} >
        <td>{item.name}</td>
        <td>{new Date(item.exp_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>
        <td>{item.timeframe}</td>
        <td>{new Date(item.extended_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>
        <td>{item.storage_type}</td>
      </tr>
  ))
  


  return (
    <div>
      <h1>Items</h1>
      <table style={{width: '100%', textAlign: 'center'}} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Expiration Date</th>
            <th>Time Extension</th>
            <th>New Expiration Date</th>
            <th>Storage Type</th>
          </tr>
          {listItems}
        </thead>
      </table>
    </div>
  );
}
export default Items;
