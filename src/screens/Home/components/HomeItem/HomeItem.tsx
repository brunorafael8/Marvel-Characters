import React from 'react'
import { withNavigation } from 'react-navigation'
import { createFragmentContainer, graphql, QueryRenderer } from 'react-relay'
import styled from 'styled-components'

const getRandomColor = id => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * id)]
  }

  return color
}

const HomeListContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.color};
`
const HomeItemImage = styled.Image`
  width: 50px;
  height: 50px;
`
const HomeItemText = styled.Text``
const HomeItemDescription = styled.Text``
const HomeItemButtonDetail = styled.TouchableHighlight``
const HomeItemButtonDetailView = styled.View``
const HomeItemButtonDetailText = styled.Text``

const HomeItem = props => {
  const { character } = props
  const { id, thumbnail, name, description } = character

  const randomColor = getRandomColor(id.slice(0, 2))

  return (
    <HomeListContainer color={randomColor}>
      <HomeItemImage source={{ uri: thumbnail }} />
      <HomeItemText>{name}</HomeItemText>
      <HomeItemDescription>{description}</HomeItemDescription>
      <HomeItemButtonDetail
        onPress={() => props.navigation.navigate('Character_detail', { character, backgroundColor: randomColor })}
      >
        <HomeItemButtonDetailView>
          <HomeItemButtonDetailText>More information</HomeItemButtonDetailText>
        </HomeItemButtonDetailView>
      </HomeItemButtonDetail>
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
      stories {
        resourceURI
        name
        role
        type
      }
    }
  `,
})

export default withNavigation(HomeItemFragmentContainer)
