
# AuthConfig


## Properties

Name | Type
------------ | -------------
`oidc` | [Array&lt;OidcProviderPublic&gt;](OidcProviderPublic.md)
`policy` | [AuthPolicyPublic](AuthPolicyPublic.md)

## Example

```typescript
import type { AuthConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "oidc": null,
  "policy": null,
} satisfies AuthConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


