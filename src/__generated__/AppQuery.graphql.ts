/* tslint:disable */

import { ConcreteRequest } from 'relay-runtime'
export type AppQueryVariables = {}
export type AppQueryResponse = {
  readonly characters: ReadonlyArray<{
    readonly id: string | null
    readonly name: string | null
    readonly description: string | null
    readonly thumbnail: string | null
  }> | null
}
export type AppQuery = {
  readonly response: AppQueryResponse
  readonly variables: AppQueryVariables
}

/*
query AppQuery {
  characters(where: {series: 24229}, orderBy: modified_asc) {
    id
    name
    description
    thumbnail
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
    {
      kind: 'LinkedField',
      alias: null,
      name: 'characters',
      storageKey: 'characters(orderBy:"modified_asc",where:{"series":24229})',
      args: [
        {
          kind: 'Literal',
          name: 'orderBy',
          value: 'modified_asc',
        },
        {
          kind: 'Literal',
          name: 'where',
          value: {
            series: 24229,
          },
        },
      ],
      concreteType: 'Character',
      plural: true,
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'id',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'name',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'description',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'thumbnail',
          args: null,
          storageKey: null,
        },
      ],
    },
  ]
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'AppQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'AppQuery',
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'AppQuery',
      id: null,
      text:
        'query AppQuery {\n  characters(where: {series: 24229}, orderBy: modified_asc) {\n    id\n    name\n    description\n    thumbnail\n  }\n}\n',
      metadata: {},
    },
  }
})()
;(node as any).hash = '497097fbbe95799308f025d9b0f89e96'
export default node
