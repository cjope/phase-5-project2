import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { CardMedia } from "material-ui";
import { Card } from "material-ui/Card";

function Items({items}) {

  const listItems = items?.map(item=> (
      <tr key={item.id} >
        <td>{item.name}</td>
        {/* <td>{new Date(item.receive_date).toLocaleDateString("en-us", {weekday: "short", month: "short", day:"numeric", year: "numeric"})}</td> */}
        {/* <td>{new Date(item.receive_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td> */}
        <td>{new Date(item.exp_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>
        <td>{item.timeframe}</td>
        {/* <td>{new Date(item.extended_date).toLocaleDateString("en-us", {weekday: "short", month: "short", day:"numeric", year: "numeric"})}</td> */}
        <td>{new Date(item.extended_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td>
        {/* <td>{((new Date(item.extended_date))-((new Date())).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td> */}
        <td>{item.storage_type}</td>

      </tr>
  ))

  console.log(items)

  return (
    <div>

      <h1>NEW</h1>
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          Items
        </Typography>
      </Container>

      <Grid></Grid>




      <h1>OLD:</h1>

      <table style={{width: '100%', textAlign: 'center'}} >
        <thead>
      <tr>
        <th>Name</th>
        {/* <th>Receive Date</th> */}
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
