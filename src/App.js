import React from 'react'
import FormStudent from './components/FormStudent'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './apollo/conexion'

function App() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col">
					<ApolloProvider client={client}>
						<FormStudent />
					</ApolloProvider>
				</div>
			</div>
		</div>
	)
}

export default App
