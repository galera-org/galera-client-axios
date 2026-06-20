
# AlbumResponse


## Properties

Name | Type
------------ | -------------
`created_at` | Date
`description` | string
`link` | string
`name` | string
`owner_id` | number
`thumbnail_link` | string

## Example

```typescript
import type { AlbumResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "created_at": null,
  "description": null,
  "link": null,
  "name": null,
  "owner_id": null,
  "thumbnail_link": null,
} satisfies AlbumResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlbumResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


