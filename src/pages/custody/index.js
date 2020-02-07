import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
import Layout from '@theme/Layout';

function Custody(props) {
	return (
		<Layout><SwaggerUI url="./custody.json"/></Layout>
	)
}
export default Custody