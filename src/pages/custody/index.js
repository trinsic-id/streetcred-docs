import React from 'react';
import { RedocStandalone } from 'redoc';
import Layout from '@theme/Layout'; 

function Custody(props){
	return (
  <Layout>
		<RedocStandalone
		specUrl="./custody.json"
		options={{
			nativeScrollbars: true,
			theme: { colors: { primary: { main: '#8313E4' } } },
		}}
/></Layout>
)
}

export default Custody;
