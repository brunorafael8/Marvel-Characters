import React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'

const getRandomColor = id => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * id)]
  }

  return color
}

const CharacterDetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${p => p.color};
`
const CharacterDetailContent = styled.View`
  padding: 20px;
`

const CharacterImage = styled.Image`
  width: 200px;
  height: 200px;
`
const CharacterText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
  margin-top: 10px;
`
const CharacterDescription = styled.Text`
  color: #000;
  font-weight: normal;
  font-size: 16px;
`
const CharacterStories = styled.FlatList``

const CharacterStoriesHeader = styled.View`
  margin: 10px 0 20px 0;
  border-bottom-color: #000;
  border-bottom-width: 5px;
  width: 35%;
`
const CharacterStoriesHeaderText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 22px;
`

const CharacterStoriesItem = styled.Text`
  color: #000;
  font-weight: normal;
  font-size: 16px;
`

const CharacterDetail = props => {
  const character = props.navigation.getParam('character', {})
  const bgColor = props.navigation.getParam('backgroundColor', '#ffffff')

  const { thumbnail, name, description, stories } = character

  return (
    <CharacterDetailContainer color={bgColor}>
      <CharacterDetailContent>
        <CharacterImage source={{ uri: thumbnail }} />
        <CharacterText>{name}</CharacterText>
        <CharacterDescription>{description}</CharacterDescription>
        <CharacterStories
          data={stories}
          ListHeaderComponent={
            <CharacterStoriesHeader>
              <CharacterStoriesHeaderText>Stories</CharacterStoriesHeaderText>
            </CharacterStoriesHeader>
          }
          renderItem={({ item }) => <CharacterStoriesItem>{item.name}</CharacterStoriesItem>}
          keyExtractor={item => item.resourceURI}
        />
      </CharacterDetailContent>
    </CharacterDetailContainer>
  )
}

export default CharacterDetail
