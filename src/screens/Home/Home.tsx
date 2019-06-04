import React, { Component } from 'react'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import styled from 'styled-components'
import environment from '../../RelayEnvironment'

const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`
const HomeList = styled.ScrollView``
const CharacterText = styled.Text``
const CharacterImage = styled.Image``

const Home = props => {
  const { characters } = props.query
  return (
    <HomeContainer>
      <HomeList>
        {characters.map(char => (
          <>
            <CharacterText>{char.name}</CharacterText>
            <CharacterImage style={{ width: 50, height: 50 }} source={{ uri: char.thumbnail }} />
          </>
        ))}
      </HomeList>
    </HomeContainer>
  )
}

const query = graphql`
  query HomeQuery {
    characters(where: { series: 24229 }, orderBy: modified_asc) {
      id
      name
      description
      thumbnail
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
