import React from 'react'
import { SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationScreenProp } from 'react-navigation'
import styled from 'styled-components'

const CharacterDetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${p => p.color};
`
const CharacterDetailBackButton = styled.TouchableHighlight`
  padding: 10px 0 10px 20px;
`

const CharacterDetailContent = styled.View`
  padding: 0 0 0 20px;
`

const CharacterImage = styled.Image`
  width: 200px;
  height: 200px;
`

const CharacterDetailNameContent = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

const CharacterDetailNameTitle = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
`
const CharacterDetailNameText = styled.Text`
  color: #000;
  font-weight: normal;
  font-size: 25px;
  margin-left: 5px;
`
const CharacterDescription = styled.Text`
  color: #000;
  font-weight: normal;
  font-size: 16px;
`
const CharacterStories = styled.FlatList`
  width: 100%;
`

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

export interface CharacterParam {
  id: string
  thumbnail: string
  name: string
  description: string
  stories: string[]
}

export interface NavigationParams {
  character: CharacterParam
  backgroundColor: string
}

export interface CharacterDetailProps {
  navigation: NavigationScreenProp<NavigationParams>
}

const CharacterDetail = (props: CharacterDetailProps) => {
  const character = props.navigation.getParam('character', {})
  const bgColor = props.navigation.getParam('backgroundColor', '#ffffff')

  const { thumbnail, name, description, stories } = character

  return (
    <CharacterDetailContainer color={bgColor}>
      <CharacterDetailBackButton onPress={() => props.navigation.goBack()}>
        <Icon name="md-arrow-round-back" size={30} color="#000" />
      </CharacterDetailBackButton>
      <CharacterDetailContent>
        <CharacterImage source={{ uri: thumbnail }} />
        <CharacterDetailNameContent>
          <CharacterDetailNameTitle>Name:</CharacterDetailNameTitle>
          <CharacterDetailNameText>{name}</CharacterDetailNameText>
        </CharacterDetailNameContent>
        <CharacterDescription>Description:{description}</CharacterDescription>
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
