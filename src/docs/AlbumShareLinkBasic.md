
# AlbumShareLinkBasic


## Properties

Name | Type
------------ | -------------
`album_uuid` | string
`is_expired` | boolean
`is_password_protected` | boolean

## Example

```typescript
import type { AlbumShareLinkBasic } from ''

// TODO: Update the object below with actual values
const example = {
  "album_uuid": null,
  "is_expired": null,
  "is_password_protected": null,
} satisfies AlbumShareLinkBasic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlbumShareLinkBasic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


