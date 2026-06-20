# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**routesAlbumAddMedia**](DefaultApi.md#routesalbumaddmedia) | **POST** /album/media | Adds media to an album |
| [**routesCreateAlbum**](DefaultApi.md#routescreatealbum) | **POST** /album | Creates a new album |
| [**routesCreateAlbumShareLink**](DefaultApi.md#routescreatealbumsharelink) | **POST** /album/{album_uuid}/share/link | Creates a new album share link. |
| [**routesCreateUser**](DefaultApi.md#routescreateuser) | **POST** /user | Creates a new user |
| [**routesDeleteAlbum**](DefaultApi.md#routesdeletealbum) | **DELETE** /album/{album_uuid} | Deletes an album |
| [**routesDeleteAlbumShareLink**](DefaultApi.md#routesdeletealbumsharelink) | **DELETE** /album/share/link/{album_share_link_uuid} | Deletes an album share link. |
| [**routesGetAlbumList**](DefaultApi.md#routesgetalbumlist) | **GET** /album | Retrieves a list of albums of an authenticated user |
| [**routesGetAlbumShareLink**](DefaultApi.md#routesgetalbumsharelink) | **GET** /album/share/link/{album_share_link_uuid} | Gets basic information about album share link. |
| [**routesGetAlbumShareLinks**](DefaultApi.md#routesgetalbumsharelinks) | **GET** /album/{album_uuid}/share/link | Gets a list of album share links. |
| [**routesGetAlbumStructure**](DefaultApi.md#routesgetalbumstructure) | **GET** /album/{album_uuid}/media | Gets a list of media in an album |
| [**routesGetMediaByUuid**](DefaultApi.md#routesgetmediabyuuid) | **GET** /media/{media_uuid} | Returns a media |
| [**routesGetMediaLikedList**](DefaultApi.md#routesgetmedialikedlist) | **GET** /media/liked | Returns a list of liked media. |
| [**routesGetServerConfig**](DefaultApi.md#routesgetserverconfig) | **GET** /public/config | Returns server configuration |
| [**routesHealth**](DefaultApi.md#routeshealth) | **GET** /health |  |
| [**routesLogin**](DefaultApi.md#routeslogin) | **POST** /auth/login | You must provide either a username or an email together with a password. |
| [**routesLogout**](DefaultApi.md#routeslogout) | **POST** /auth/logout | Invalidates the session. |
| [**routesMediaDeleteDescription**](DefaultApi.md#routesmediadeletedescription) | **DELETE** /media/{media_uuid}/description | Deletes description of a media |
| [**routesMediaLike**](DefaultApi.md#routesmedialike) | **POST** /media/{media_uuid}/like | Likes the media. |
| [**routesMediaStructure**](DefaultApi.md#routesmediastructure) | **GET** /media | Gets a list of all media |
| [**routesMediaUnlike**](DefaultApi.md#routesmediaunlike) | **DELETE** /media/{media_uuid}/like | Unlikes the media. |
| [**routesMediaUpdateDescription**](DefaultApi.md#routesmediaupdatedescription) | **PUT** /media/{media_uuid}/description | Updates description of a media |
| [**routesOidcCallback**](DefaultApi.md#routesoidccallback) | **GET** /auth/oidc/{provider}/callback |  |
| [**routesOidcLogin**](DefaultApi.md#routesoidclogin) | **GET** /auth/oidc/{provider}/login |  |
| [**routesRefreshToken**](DefaultApi.md#routesrefreshtoken) | **POST** /auth/refresh | Issues a new access token when a valid refresh token is attached |
| [**routesScanMedia**](DefaultApi.md#routesscanmedia) | **GET** /scan_media | Searches for new media |
| [**routesSystemInfoPublic**](DefaultApi.md#routessysteminfopublic) | **GET** /system/info/public | Returns the public system information. |
| [**routesUpdateAlbum**](DefaultApi.md#routesupdatealbum) | **PUT** /album/{album_uuid} | Updates already existing album |
| [**routesUpdateAlbumShareLink**](DefaultApi.md#routesupdatealbumsharelink) | **PUT** /album/share/link/{album_share_link_uuid} | Updates already existing album share link. |



## routesAlbumAddMedia

> routesAlbumAddMedia(albumAddMedia)

Adds media to an album

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesAlbumAddMediaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // Array<AlbumAddMedia>
    albumAddMedia: ...,
  } satisfies RoutesAlbumAddMediaRequest;

  try {
    const data = await api.routesAlbumAddMedia(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumAddMedia** | `Array<AlbumAddMedia>` |  | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Media added to album |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesCreateAlbum

> AlbumResponse routesCreateAlbum(albumInsertData)

Creates a new album

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesCreateAlbumRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // AlbumInsertData
    albumInsertData: ...,
  } satisfies RoutesCreateAlbumRequest;

  try {
    const data = await api.routesCreateAlbum(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumInsertData** | [AlbumInsertData](AlbumInsertData.md) |  | |

### Return type

[**AlbumResponse**](AlbumResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album created (or null on failure) |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesCreateAlbumShareLink

> SharedAlbumLinkResponse routesCreateAlbumShareLink(albumUuid, albumShareLinkInsert)

Creates a new album share link.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesCreateAlbumShareLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album UUID
    albumUuid: albumUuid_example,
    // AlbumShareLinkInsert
    albumShareLinkInsert: ...,
  } satisfies RoutesCreateAlbumShareLinkRequest;

  try {
    const data = await api.routesCreateAlbumShareLink(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | `string` | Album UUID | [Defaults to `undefined`] |
| **albumShareLinkInsert** | [AlbumShareLinkInsert](AlbumShareLinkInsert.md) |  | |

### Return type

[**SharedAlbumLinkResponse**](SharedAlbumLinkResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Share link created |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Album not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesCreateUser

> routesCreateUser(userInsert)

Creates a new user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesCreateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // UserInsert
    userInsert: ...,
  } satisfies RoutesCreateUserRequest;

  try {
    const data = await api.routesCreateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userInsert** | [UserInsert](UserInsert.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User created |  -  |
| **400** | Invalid JSON or wrong shape |  -  |
| **409** | User already exists |  -  |
| **422** | Invalid user data |  -  |
| **500** | Internal server error |  -  |
| **503** | Either local auth or signups are disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesDeleteAlbum

> routesDeleteAlbum(albumUuid)

Deletes an album

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesDeleteAlbumRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album UUID
    albumUuid: albumUuid_example,
  } satisfies RoutesDeleteAlbumRequest;

  try {
    const data = await api.routesDeleteAlbum(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | `string` | Album UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Album not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesDeleteAlbumShareLink

> routesDeleteAlbumShareLink(albumShareLinkUuid)

Deletes an album share link.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesDeleteAlbumShareLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album Share Link UUID
    albumShareLinkUuid: albumShareLinkUuid_example,
  } satisfies RoutesDeleteAlbumShareLinkRequest;

  try {
    const data = await api.routesDeleteAlbumShareLink(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkUuid** | `string` | Album Share Link UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album share link deleted |  -  |
| **204** | Nothing deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetAlbumList

> Array&lt;AlbumResponse&gt; routesGetAlbumList()

Retrieves a list of albums of an authenticated user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetAlbumListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.routesGetAlbumList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;AlbumResponse&gt;**](AlbumResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album list |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetAlbumShareLink

> AlbumShareLinkBasic routesGetAlbumShareLink(albumShareLinkUuid)

Gets basic information about album share link.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetAlbumShareLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album Share Link UUID
    albumShareLinkUuid: albumShareLinkUuid_example,
  } satisfies RoutesGetAlbumShareLinkRequest;

  try {
    const data = await api.routesGetAlbumShareLink(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkUuid** | `string` | Album Share Link UUID | [Defaults to `undefined`] |

### Return type

[**AlbumShareLinkBasic**](AlbumShareLinkBasic.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Share link info |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetAlbumShareLinks

> Array&lt;SharedAlbumLinkResponse&gt; routesGetAlbumShareLinks(albumUuid)

Gets a list of album share links.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetAlbumShareLinksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album UUID
    albumUuid: albumUuid_example,
  } satisfies RoutesGetAlbumShareLinksRequest;

  try {
    const data = await api.routesGetAlbumShareLinks(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | `string` | Album UUID | [Defaults to `undefined`] |

### Return type

[**Array&lt;SharedAlbumLinkResponse&gt;**](SharedAlbumLinkResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album share links |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Album not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetAlbumStructure

> Array&lt;MediaResponse&gt; routesGetAlbumStructure(albumUuid)

Gets a list of media in an album

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetAlbumStructureRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure HTTP basic authorization: BasicSharedAlbumLinkAuth
    username: "YOUR USERNAME",
    password: "YOUR PASSWORD",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album UUID
    albumUuid: albumUuid_example,
  } satisfies RoutesGetAlbumStructureRequest;

  try {
    const data = await api.routesGetAlbumStructure(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | `string` | Album UUID | [Defaults to `undefined`] |

### Return type

[**Array&lt;MediaResponse&gt;**](MediaResponse.md)

### Authorization

[BasicSharedAlbumLinkAuth](../README.md#BasicSharedAlbumLinkAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album media |  -  |
| **401** | Unauthorized |  -  |
| **404** | Album not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetMediaByUuid

> Blob routesGetMediaByUuid(mediaUuid)

Returns a media

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetMediaByUuidRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Media UUID
    mediaUuid: mediaUuid_example,
  } satisfies RoutesGetMediaByUuidRequest;

  try {
    const data = await api.routesGetMediaByUuid(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | `string` | Media UUID | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/octet-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Binary media stream |  -  |
| **401** | Unauthorized |  -  |
| **404** | Media not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetMediaLikedList

> Array&lt;MediaResponse&gt; routesGetMediaLikedList()

Returns a list of liked media.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetMediaLikedListRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.routesGetMediaLikedList();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;MediaResponse&gt;**](MediaResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Liked media |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesGetServerConfig

> ServerConfigResponse routesGetServerConfig()

Returns server configuration

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesGetServerConfigRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.routesGetServerConfig();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ServerConfigResponse**](ServerConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server config |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesHealth

> routesHealth()



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesHealthRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.routesHealth();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Health check passed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesLogin

> LoginResponse routesLogin(userLogin)

You must provide either a username or an email together with a password.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesLoginRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // UserLogin
    userLogin: ...,
  } satisfies RoutesLoginRequest;

  try {
    const data = await api.routesLogin(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userLogin** | [UserLogin](UserLogin.md) |  | |

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Login successful |  -  |
| **400** | Invalid JSON or wrong shape |  -  |
| **409** | Invalid credentials or user conflict |  -  |
| **500** | Internal server error |  -  |
| **503** | Local auth is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesLogout

> routesLogout()

Invalidates the session.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesLogoutRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.routesLogout();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Logout succesful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesMediaDeleteDescription

> routesMediaDeleteDescription(mediaUuid)

Deletes description of a media

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesMediaDeleteDescriptionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Media UUID
    mediaUuid: mediaUuid_example,
  } satisfies RoutesMediaDeleteDescriptionRequest;

  try {
    const data = await api.routesMediaDeleteDescription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | `string` | Media UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Description deleted |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Media not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesMediaLike

> routesMediaLike(mediaUuid)

Likes the media.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesMediaLikeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Media UUID
    mediaUuid: mediaUuid_example,
  } satisfies RoutesMediaLikeRequest;

  try {
    const data = await api.routesMediaLike(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | `string` | Media UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Liked a media |  -  |
| **401** | Unauthorized |  -  |
| **404** | Media not found |  -  |
| **409** | Already liked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesMediaStructure

> Array&lt;MediaResponse&gt; routesMediaStructure()

Gets a list of all media

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesMediaStructureRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.routesMediaStructure();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;MediaResponse&gt;**](MediaResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of media |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesMediaUnlike

> routesMediaUnlike(mediaUuid)

Unlikes the media.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesMediaUnlikeRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Media UUID
    mediaUuid: mediaUuid_example,
  } satisfies RoutesMediaUnlikeRequest;

  try {
    const data = await api.routesMediaUnlike(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | `string` | Media UUID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unliked a media |  -  |
| **204** | No changes made |  -  |
| **404** | Media not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesMediaUpdateDescription

> routesMediaUpdateDescription(mediaUuid, mediaDescription)

Updates description of a media

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesMediaUpdateDescriptionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Media UUID
    mediaUuid: mediaUuid_example,
    // MediaDescription
    mediaDescription: ...,
  } satisfies RoutesMediaUpdateDescriptionRequest;

  try {
    const data = await api.routesMediaUpdateDescription(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | `string` | Media UUID | [Defaults to `undefined`] |
| **mediaDescription** | [MediaDescription](MediaDescription.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Description updated |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Media not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesOidcCallback

> LoginResponse routesOidcCallback(provider, code, state)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesOidcCallbackRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string | OIDC provider key
    provider: provider_example,
    // string | Authorization code
    code: code_example,
    // string | CSRF state
    state: state_example,
  } satisfies RoutesOidcCallbackRequest;

  try {
    const data = await api.routesOidcCallback(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **provider** | `string` | OIDC provider key | [Defaults to `undefined`] |
| **code** | `string` | Authorization code | [Defaults to `undefined`] |
| **state** | `string` | CSRF state | [Defaults to `undefined`] |

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Login successful |  -  |
| **400** | Bad request |  -  |
| **401** | Authentication failed |  -  |
| **404** | Provider not found |  -  |
| **500** | Internal server error |  -  |
| **503** | OIDC is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesOidcLogin

> routesOidcLogin(provider)



### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesOidcLoginRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string | OIDC provider key
    provider: provider_example,
  } satisfies RoutesOidcLoginRequest;

  try {
    const data = await api.routesOidcLogin(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **provider** | `string` | OIDC provider key | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **302** | Redirect to OIDC provider |  -  |
| **404** | OIDC provider not found |  -  |
| **503** | OIDC is disabled |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesRefreshToken

> LoginResponse routesRefreshToken()

Issues a new access token when a valid refresh token is attached

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesRefreshTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.routesRefreshToken();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Token refreshed |  -  |
| **401** | Unauthorized (missing/invalid/expired refresh_token cookie) |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesScanMedia

> routesScanMedia()

Searches for new media

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesScanMediaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.routesScanMedia();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Scan started |  -  |
| **401** | Unauthorized |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesSystemInfoPublic

> SystemInfoPublic routesSystemInfoPublic()

Returns the public system information.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesSystemInfoPublicRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.routesSystemInfoPublic();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemInfoPublic**](SystemInfoPublic.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesUpdateAlbum

> routesUpdateAlbum(albumUuid, albumUpdateData)

Updates already existing album

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesUpdateAlbumRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album UUID
    albumUuid: albumUuid_example,
    // AlbumUpdateData
    albumUpdateData: ...,
  } satisfies RoutesUpdateAlbumRequest;

  try {
    const data = await api.routesUpdateAlbum(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | `string` | Album UUID | [Defaults to `undefined`] |
| **albumUpdateData** | [AlbumUpdateData](AlbumUpdateData.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album updated |  -  |
| **204** | No changes |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Album not found |  -  |
| **422** | Unprocessable entity |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## routesUpdateAlbumShareLink

> routesUpdateAlbumShareLink(albumShareLinkUuid, albumShareLinkInsert)

Updates already existing album share link.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RoutesUpdateAlbumShareLinkRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DefaultApi(config);

  const body = {
    // string | Album Share Link UUID
    albumShareLinkUuid: albumShareLinkUuid_example,
    // AlbumShareLinkInsert
    albumShareLinkInsert: ...,
  } satisfies RoutesUpdateAlbumShareLinkRequest;

  try {
    const data = await api.routesUpdateAlbumShareLink(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkUuid** | `string` | Album Share Link UUID | [Defaults to `undefined`] |
| **albumShareLinkInsert** | [AlbumShareLinkInsert](AlbumShareLinkInsert.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Album share link updated |  -  |
| **204** | No changes |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

