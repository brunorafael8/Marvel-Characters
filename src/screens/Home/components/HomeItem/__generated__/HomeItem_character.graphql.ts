/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type HomeItem_character$ref = any;
export type HomeItem_character = {
    readonly id: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly thumbnail: string | null;
    readonly " $refType": HomeItem_character$ref;
};



const node: ReaderFragment = {
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
};
(node as any).hash = '189fe0b298405f81b9d367cd033ded75';
export default node;
