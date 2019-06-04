import React, { Component } from 'react'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import styled from 'styled-components'
import environment from '../../RelayEnvironment'

const CharacterText = styled.Text``
const CharacterImage = styled.Image``

const HomeItem = props => {
  const { character } = props

  return (
    <>
      <CharacterText>{character.name}</CharacterText>
      <CharacterImage style={{ width: 50, height: 50 }} source={{ uri: character.thumbnail }} />
    </>
  )
}

const HomeItemFragmentContainer = createFragmentContainer(HomeItem, {
  character: graphql`
    fragment HomeItem_character on Character {
      id
      name
      description
      thumbnail
    }
  `,
})

export default HomeItemFragmentContainer
