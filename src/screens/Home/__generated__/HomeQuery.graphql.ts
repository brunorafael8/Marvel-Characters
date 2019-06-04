/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type HomeItem_character$ref = any;
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly characters: ReadonlyArray<{
        readonly id: string | null;
        readonly " $fragmentRefs": HomeItem_character$ref;
    }> | null;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  characters(where: {series: 24229}, orderBy: modified_asc) {
    id
    ...HomeItem_character
  }
}

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "modified_asc"
  },
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "series": 24229
    }
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "resourceURI",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": "characters(orderBy:\"modified_asc\",where:{\"series\":24229})",
        "args": (v0/*: any*/),
        "concreteType": "Character",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "HomeItem_character",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "characters",
        "storageKey": "characters(orderBy:\"modified_asc\",where:{\"series\":24229})",
        "args": (v0/*: any*/),
        "concreteType": "Character",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "thumbnail",
            "args": null,
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "urls",
            "storageKey": null,
            "args": null,
            "concreteType": "MarvelUrl",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "url",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "stories",
            "storageKey": null,
            "args": null,
            "concreteType": "Summary",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "role",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  characters(where: {series: 24229}, orderBy: modified_asc) {\n    id\n    ...HomeItem_character\n  }\n}\n\nfragment HomeItem_character on Character {\n  id\n  name\n  description\n  thumbnail\n  resourceURI\n  urls {\n    url\n  }\n  stories {\n    resourceURI\n    name\n    role\n    type\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8f3533c6b9ac41b3dc80d65f723c06bf';
export default node;
