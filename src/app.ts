
import express from 'express';
import { Place } from './models';
import { getAutoCompleteDetails } from './controllers';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());


interface Dog {
  id: string
}


app.get<
  {},
  { data: Place[] | null},
  {}
>('/getAutoCompleteDetails', async (req,res) => { 
  const address = req.query.address
  if (typeof address !== 'string') {
    throw new Error('Adress format incompatible')
  }

  const data = await getAutoCompleteDetails(address)
  
  res.send({
    data
  });
  
  return;
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

