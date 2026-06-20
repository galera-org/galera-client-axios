
# SystemInfoPublic


## Properties

Name | Type
------------ | -------------
`operatingSystem` | string
`serverName` | string
`serverVersion` | string
`systemArchitecture` | string

## Example

```typescript
import type { SystemInfoPublic } from ''

// TODO: Update the object below with actual values
const example = {
  "operatingSystem": null,
  "serverName": null,
  "serverVersion": null,
  "systemArchitecture": null,
} satisfies SystemInfoPublic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemInfoPublic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


