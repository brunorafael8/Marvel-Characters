import React, { Component } from 'react'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import styled from 'styled-components'
import environment from '../../RelayEnvironment'
import HomeItem from './components/HomeItem'

const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`
const HomeList = styled.FlatList``

const Home = props => {
  const { characters } = props.query

  renderItem = ({ item }) => {
    return <HomeItem character={item} />
  }

  return (
    <HomeContainer>
      <HomeList data={characters} keyExtractor={item => item.id} renderItem={this.renderItem} />
    </HomeContainer>
  )
}

const query = graphql`
  query HomeQuery {
    characters(where: { series: 24229 }, orderBy: modified_asc) {
      id
      ...HomeItem_character
    }
  }
`

const ErrorText = styled.Text`
  margin: 40px 0 0 0;
`

const HomeRenderer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={({ error, props }) => {
        if (error) {
          console.error(new Error(error))
        }

        if (props) {
          return <Home query={props} />
        } else {
          return <ErrorText>Loading...</ErrorText>
        }
      }}
    />
  )
}
export default HomeRenderer
