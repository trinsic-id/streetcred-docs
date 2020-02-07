import React from 'react';
import { RedocStandalone } from 'redoc';
import Layout from '@theme/Layout'
function Agency(props){
	return (
    <Layout>
      <RedocStandalone
  specUrl="./agency.json"
  options={{
    nativeScrollbars: true,
    theme: { colors: { primary: { main: '#8313E4' } } },
  }}
/></Layout>
  
)
}

export default Agency;
