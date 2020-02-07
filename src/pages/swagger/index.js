import React from 'react';
import { SwaggerUI } from 'swagger-ui-react';
// import "swagger-ui-react/swagger-ui.css";
import Layout from '@theme/Layout';

function Agency(props) {
	return (
		<Layout><SwaggerUI url="./agency.json" /></Layout>
	)
}
export default Agency