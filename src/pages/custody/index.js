import React from 'react';
import { RedocStandalone } from 'redoc';

function Redoc(props){
	return (
    
  <RedocStandalone
  specUrl="./custody.json"
  options={{
    nativeScrollbars: true,
    theme: { colors: { primary: { main: '#7300D3' } } },
  }}
/>
)
}

export default Redoc;
