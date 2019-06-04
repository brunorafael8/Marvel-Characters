import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const network = Network.create((operation, variables) =>
  fetch('https://api.marvelql.com/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json()),
)
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store,
})

export default environment
