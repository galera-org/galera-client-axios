
# MediaResponse


## Properties

Name | Type
------------ | -------------
`date_taken` | Date
`description` | string
`filename` | string
`height` | number
`owner_id` | number
`uuid` | string
`width` | number

## Example

```typescript
import type { MediaResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "date_taken": null,
  "description": null,
  "filename": null,
  "height": null,
  "owner_id": null,
  "uuid": null,
  "width": null,
} satisfies MediaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MediaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


