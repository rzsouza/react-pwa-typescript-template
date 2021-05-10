import React from 'react';
import './App.css';
import { List, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

const App = () => (
  <div className="App">
    <List>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText>Hello World!</ListItemText>
    </List>
  </div>
);

export default App;
