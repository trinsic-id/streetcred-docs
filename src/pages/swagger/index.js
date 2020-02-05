import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";
import Layout from '@theme/Layout';

function Swagger(props) {
	return (
		<Layout><SwaggerUI url="./swagger.json"/></Layout>
	)
}
export default Swagger