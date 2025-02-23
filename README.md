# Mock Fetch

Test your front-end without connecting to an external API using mock-fetch.

# Installation

Run:

```
npm i @eliasrrosa/mock-fetch@latest
```

# Usage

Instead of calling `fetch()` call `MockFetch.fetch()` with a callback, and return `new MockResponse()`. Optionally set `fetchTimeoutInMs` to control the request time.

```js
import { MockFetch, MockResponse, MockBody } from "@eliasrrosa/mock-fetch";

function fetchBooks() {
  return MockFetch.fetch(() => {
    return new MockResponse({
      body: new MockBody([{ title: "Book 1" }, { title: "Book 2" }]),
      status: 200,
    });
  }, { fetchTimeoutMs: 2000});
}
```

The returned object will have properties that mock the return object of `fetch()`.

```js
const res = await fetchBooks();

console.log(res.status);    //returns 200
console.log(res.body.data); //returns "[{"title":"Book 1"},{"title":"Book 2"}]" 
console.log(res.json());    //returns [{ title: "Book 1" }, { title: "Book 2" }]

```
