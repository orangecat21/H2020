/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    gender
    humanName
    humanHead {
      id
      src
      posX
      posY
      z
    }
    humanShirt {
      id
      src
      posX
      posY
      z
    }
    humanJackets {
      id
      src
      posX
      posY
      z
    }
    humanPants {
      id
      src
      posX
      posY
      z
    }
    humanShoes {
      id
      src
      icon
      posX
      posY
      z
    }
    humanAccessories {
      id
      src
      posX
      posY
      z
    }
    hardSkillPoints
    softSkillsPoints
    hardSkillName
    Initiative
    Creativity
    Adaptability
    Reflection
    Multitasking
    ListeningSkills
    Teamwork
    CriticalThinking
    TimeManagement
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      gender
      humanName
      humanHead {
        id
        src
        posX
        posY
        z
      }
      humanShirt {
        id
        src
        posX
        posY
        z
      }
      humanJackets {
        id
        src
        posX
        posY
        z
      }
      humanPants {
        id
        src
        posX
        posY
        z
      }
      humanShoes {
        id
        src
        icon
        posX
        posY
        z
      }
      humanAccessories {
        id
        src
        posX
        posY
        z
      }
      hardSkillPoints
      softSkillsPoints
      hardSkillName
      Initiative
      Creativity
      Adaptability
      Reflection
      Multitasking
      ListeningSkills
      Teamwork
      CriticalThinking
      TimeManagement
    }
    nextToken
  }
}
`;
