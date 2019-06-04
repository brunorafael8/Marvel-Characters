import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import environment from './RelayEnvironment'

const App = props => {
  const { characters } = props.query
  return (
    <View style={styles.container}>
      {characters.map(char => (
        <Text key={char.id}>{char.name}</Text>
      ))}
    </View>
  )
}

const query = graphql`
  query AppQuery {
    characters(where: { series: 24229 }, orderBy: modified_asc) {
      id
      name
      description
      thumbnail
    }
  }
`

const AppRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={({ error, props }) => {
        if (error) {
          console.error(new Error(error))
        }

        if (props) {
          return <App query={props} />
        } else {
          return <Text>loading...</Text>
        }
      }}
    />
  )
}
export default AppRenderer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
