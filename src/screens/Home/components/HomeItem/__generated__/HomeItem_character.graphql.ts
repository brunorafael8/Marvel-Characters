/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type HomeItem_character$ref = any;
export type HomeItem_character = {
    readonly id: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly thumbnail: string | null;
    readonly resourceURI: string | null;
    readonly urls: ReadonlyArray<{
        readonly url: string | null;
    }> | null;
    readonly stories: ReadonlyArray<{
        readonly resourceURI: string | null;
        readonly name: string | null;
        readonly role: string | null;
        readonly type: string | null;
    }> | null;
    readonly " $refType": HomeItem_character$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "resourceURI",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "HomeItem_character",
  "type": "Character",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
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
    (v1/*: any*/),
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
        (v1/*: any*/),
        (v0/*: any*/),
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
};
})();
(node as any).hash = 'db2329f671616643c1a0f0892d5e1974';
export default node;
