import React from 'react';
import Button from '@material-ui/core/Button';
import CustomizedTables from './components/CustomizedTables'

function App() {
  return (
    <div className="App">
      <CustomizedTables />
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
