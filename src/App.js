import React, { useState, useEffect } from 'react';
import InicioBaner from './components/inicioBanner';
import Body from './components/Body';
function App() {
  return (
    <div  class="container mx-auto" >
      <InicioBaner/>
      <Body/>
    </div>
  );
}

export default App;