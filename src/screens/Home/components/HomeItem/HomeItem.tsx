import React, { Component } from 'react'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import styled from 'styled-components'
import environment from '../../RelayEnvironment'

const getRandomColor = id => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * id)]
  }

  return color
}

const HomeListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${p => getRandomColor(p.id.slice(0, 2))};
`
const CharacterImage = styled.Image``
const CharacterText = styled.Text``
const CharacterDescription = styled.Text``

const HomeItem = props => {
  const { character } = props

  return (
    <HomeListContainer id={character.id}>
      <CharacterImage style={{ width: 50, height: 50 }} source={{ uri: character.thumbnail }} />
      <CharacterText>{character.name}</CharacterText>
      <CharacterDescription>{character.description}</CharacterDescription>
    </HomeListContainer>
  )
}

const HomeItemFragmentContainer = createFragmentContainer(HomeItem, {
  character: graphql`
    fragment HomeItem_character on Character {
      id
      name
      description
      thumbnail
      resourceURI
      urls {
        url
      }
    }
  `,
})

export default HomeItemFragmentContainer
