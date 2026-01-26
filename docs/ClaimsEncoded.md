# ClaimsEncoded

Encoded bearer token # Example decode an encoded bearer token ``` let encoded_token = Claims::new(1).encode().unwrap();  let decoded_token = encoded_token.decode(); ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_claims** | **string** |  | [default to undefined]

## Example

```typescript
import { ClaimsEncoded } from './api';

const instance: ClaimsEncoded = {
    encoded_claims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
