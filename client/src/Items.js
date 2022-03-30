import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, Paper } from '@mui/material';
import {    CalendarPicker } from '@mui/lab';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
// import { createTheme } from '@mui/material';

// const theme = createTheme({
//   typography: {
//   },
// });


const pastDate = new Date().getFullYear()-3
const futureDate = new Date().getFullYear()+5
const minDate = new Date(pastDate, 1, 1)
const maxDate = new Date(futureDate, 1, 1)


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: 10,
  elevation: 10
}));


function Items({items}) {

  const [date, setDate] = useState(new Date());

  // const listItems = items?.map(item=> (
  //     <tr key={item.id} >
  //       <td>{item.name}</td>
  //       {/* <td>{new Date(item.exp_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td> */}
  //       <td>{item.timeframe}</td>
  //       {/* <td>{new Date(item.extended_date).toLocaleDateString("en-us", {day: "numeric", month: "numeric", year: "2-digit"})}</td> */}
  //       <td>{item.storage_type}</td>
  //     </tr>
  // ))
  
  // const [value, setValue] = useState(new Date());

  const firstItem = items?.filter(item=> item.id === 1 )[0]

  return (
    <div style={{textAlign: "center", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      {/* <table style={{width: '100%', textAlign: 'center'}} >
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
      </table> */}

      {/* <TextField
        id="date"
        label="TextField"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      /> */}
   
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={6}>
         {/* <DatePicker
          label="DatePicker"
          value={value}
          onChange={(newValue) => {
          setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
              <Div style={{fontSize:50}} >{"Potatoes!"}</Div>

        {/* <MobileDatePicker
          label="Expiration Date"
          value={value}
          onChange={(newValue) => {
          setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />  */}
      {/* <Grid container spacing={3}> */}
        <Grid item xs={12} md={6} backgroundColor={"white"} borderRadius={5} >

          <CalendarPicker 
          
          date={date} 
          minDate={minDate}
          maxDate={maxDate}
          onChange={(newDate) => setDate(newDate)} />

        </Grid>
        {/* </Grid> */}

      </Stack>
      </LocalizationProvider>

<br/>
    <Paper elevation={10} sx={{p:2, width:300}} style={{fontSize:25}} >{date.toDateString()}</Paper>
    <br/>
    <Button size='large' variant="outlined" style={{fontSize:25, backgroundColor:"white"}} >{date.toDateString()}</Button>

    <br/>
    <Div style={{fontSize:30}} >{date.toDateString()}</Div>
      {/* <h1>{date}</h1> */}
      <br/>


      {/* <h1>extension type: {firstItem?.ext_type}</h1> */}
      <Div style={{fontSize:25}}>{firstItem?.perishable? "Item is Perishable":""}</Div>
      <br/>
      <Div style={{fontSize:20}}>storage type: {firstItem?.storage_type}</Div>

    </div>
  );
}
export default Items;
