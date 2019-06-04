/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type HomeItem_character$ref = any;
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly characters: ReadonlyArray<{
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
    ...HomeItem_character
    id
  }
}

fragment HomeItem_character on Character {
  id
  name
  description
  thumbnail
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
];
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  characters(where: {series: 24229}, orderBy: modified_asc) {\n    ...HomeItem_character\n    id\n  }\n}\n\nfragment HomeItem_character on Character {\n  id\n  name\n  description\n  thumbnail\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '111db430e928e7e1f3295081b0fc9296';
export default node;
