# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**routesAlbumAddMedia**](#routesalbumaddmedia) | **POST** /album/media | Adds media to an album|
|[**routesCreateAlbum**](#routescreatealbum) | **POST** /album | Creates a new album|
|[**routesCreateAlbumShareLink**](#routescreatealbumsharelink) | **POST** /album/{album_uuid}/share/link | Creates a new album share link.|
|[**routesCreateUser**](#routescreateuser) | **POST** /user | Creates a new user|
|[**routesDeleteAlbum**](#routesdeletealbum) | **DELETE** /album/{album_uuid} | Deletes an album|
|[**routesDeleteAlbumShareLink**](#routesdeletealbumsharelink) | **DELETE** /album/share/link/{album_share_link_uuid} | Deletes an album share link.|
|[**routesGetAlbumList**](#routesgetalbumlist) | **GET** /album | Retrieves a list of albums of an authenticated user|
|[**routesGetAlbumShareLink**](#routesgetalbumsharelink) | **GET** /album/share/link/{album_share_link_uuid} | Gets basic information about album share link.|
|[**routesGetAlbumShareLinks**](#routesgetalbumsharelinks) | **GET** /album/{album_uuid}/share/link | Gets a list of album share links.|
|[**routesGetAlbumStructure**](#routesgetalbumstructure) | **GET** /album/{album_uuid}/media | Gets a list of media in an album|
|[**routesGetMediaByUuid**](#routesgetmediabyuuid) | **GET** /media/{media_uuid} | Returns a media|
|[**routesGetMediaLikedList**](#routesgetmedialikedlist) | **GET** /media/liked | Returns a list of liked media.|
|[**routesGetServerConfig**](#routesgetserverconfig) | **GET** /public/config | Returns server configuration|
|[**routesHealth**](#routeshealth) | **GET** /health | |
|[**routesLogin**](#routeslogin) | **POST** /login | You must provide either a username or an email together with a password.|
|[**routesMediaDeleteDescription**](#routesmediadeletedescription) | **DELETE** /media/{media_uuid}/description | Deletes description of a media|
|[**routesMediaLike**](#routesmedialike) | **POST** /media/{media_uuid}/like | Likes the media.|
|[**routesMediaStructure**](#routesmediastructure) | **GET** /media | Gets a list of all media|
|[**routesMediaUnlike**](#routesmediaunlike) | **DELETE** /media/{media_uuid}/like | Unlikes the media.|
|[**routesMediaUpdateDescription**](#routesmediaupdatedescription) | **PUT** /media/{media_uuid}/description | Updates description of a media|
|[**routesOidcCallback**](#routesoidccallback) | **GET** /auth/oidc/{provider}/callback | |
|[**routesOidcLogin**](#routesoidclogin) | **GET** /auth/oidc/{provider}/login | |
|[**routesRefreshToken**](#routesrefreshtoken) | **POST** /login/refresh | Refreshes sent token|
|[**routesScanMedia**](#routesscanmedia) | **POST** /scan_media | Searches for new media|
|[**routesSystemInfoPublic**](#routessysteminfopublic) | **GET** /system/info/public | Returns the public system information.|
|[**routesUpdateAlbum**](#routesupdatealbum) | **PUT** /album/{album_uuid} | Updates already existing album|
|[**routesUpdateAlbumShareLink**](#routesupdatealbumsharelink) | **PUT** /album/share/link/{album_share_link_uuid} | Updates already existing album share link.|

# **routesAlbumAddMedia**
> routesAlbumAddMedia(albumAddMedia)


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumAddMedia: Array<AlbumAddMedia>; //

const { status, data } = await apiInstance.routesAlbumAddMedia(
    albumAddMedia
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumAddMedia** | **Array<AlbumAddMedia>**|  | |


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Media added to album |  -  |
|**400** | Bad request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesCreateAlbum**
> AlbumResponse routesCreateAlbum(albumInsertData)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AlbumInsertData
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumInsertData: AlbumInsertData; //

const { status, data } = await apiInstance.routesCreateAlbum(
    albumInsertData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumInsertData** | **AlbumInsertData**|  | |


### Return type

**AlbumResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album created (or null on failure) |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesCreateAlbumShareLink**
> SharedAlbumLinkResponse routesCreateAlbumShareLink(albumShareLinkInsert)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AlbumShareLinkInsert
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumUuid: string; //Album UUID (default to undefined)
let albumShareLinkInsert: AlbumShareLinkInsert; //

const { status, data } = await apiInstance.routesCreateAlbumShareLink(
    albumUuid,
    albumShareLinkInsert
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkInsert** | **AlbumShareLinkInsert**|  | |
| **albumUuid** | [**string**] | Album UUID | defaults to undefined|


### Return type

**SharedAlbumLinkResponse**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Share link created |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Album not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesCreateUser**
> routesCreateUser(newUser)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    NewUser
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let newUser: NewUser; //

const { status, data } = await apiInstance.routesCreateUser(
    newUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newUser** | **NewUser**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User created |  -  |
|**400** | Invalid JSON or wrong shape |  -  |
|**409** | User already exists |  -  |
|**422** | Invalid user data |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesDeleteAlbum**
> routesDeleteAlbum()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumUuid: string; //Album UUID (default to undefined)

const { status, data } = await apiInstance.routesDeleteAlbum(
    albumUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | [**string**] | Album UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Album not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesDeleteAlbumShareLink**
> routesDeleteAlbumShareLink()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumShareLinkUuid: string; //Album Share Link UUID (default to undefined)

const { status, data } = await apiInstance.routesDeleteAlbumShareLink(
    albumShareLinkUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkUuid** | [**string**] | Album Share Link UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album share link deleted |  -  |
|**204** | Nothing deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetAlbumList**
> Array<AlbumResponse> routesGetAlbumList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesGetAlbumList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AlbumResponse>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album list |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetAlbumShareLink**
> AlbumShareLinkBasic routesGetAlbumShareLink()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumShareLinkUuid: string; //Album Share Link UUID (default to undefined)

const { status, data } = await apiInstance.routesGetAlbumShareLink(
    albumShareLinkUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkUuid** | [**string**] | Album Share Link UUID | defaults to undefined|


### Return type

**AlbumShareLinkBasic**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Share link info |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetAlbumShareLinks**
> Array<SharedAlbumLinkResponse> routesGetAlbumShareLinks()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumUuid: string; //Album UUID (default to undefined)

const { status, data } = await apiInstance.routesGetAlbumShareLinks(
    albumUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | [**string**] | Album UUID | defaults to undefined|


### Return type

**Array<SharedAlbumLinkResponse>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album share links |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Album not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetAlbumStructure**
> Array<MediaResponse> routesGetAlbumStructure()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumUuid: string; //Album UUID (default to undefined)

const { status, data } = await apiInstance.routesGetAlbumStructure(
    albumUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumUuid** | [**string**] | Album UUID | defaults to undefined|


### Return type

**Array<MediaResponse>**

### Authorization

[BasicSharedAlbumLinkAuth](../README.md#BasicSharedAlbumLinkAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album media |  -  |
|**401** | Unauthorized |  -  |
|**404** | Album not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetMediaByUuid**
> File routesGetMediaByUuid()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let mediaUuid: string; //Media UUID (default to undefined)

const { status, data } = await apiInstance.routesGetMediaByUuid(
    mediaUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | [**string**] | Media UUID | defaults to undefined|


### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Binary media stream |  -  |
|**401** | Unauthorized |  -  |
|**404** | Media not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetMediaLikedList**
> Array<MediaResponse> routesGetMediaLikedList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesGetMediaLikedList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MediaResponse>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Liked media |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesGetServerConfig**
> ServerConfigResponse routesGetServerConfig()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesGetServerConfig();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ServerConfigResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Server config |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesHealth**
> routesHealth()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesHealth();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Health check passed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesLogin**
> LoginResponse routesLogin(userLogin)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserLogin
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userLogin: UserLogin; //

const { status, data } = await apiInstance.routesLogin(
    userLogin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userLogin** | **UserLogin**|  | |


### Return type

**LoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**400** | Invalid JSON or wrong shape |  -  |
|**409** | Invalid credentials or user conflict |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesMediaDeleteDescription**
> routesMediaDeleteDescription()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let mediaUuid: string; //Media UUID (default to undefined)

const { status, data } = await apiInstance.routesMediaDeleteDescription(
    mediaUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | [**string**] | Media UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Description deleted |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Media not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesMediaLike**
> routesMediaLike()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let mediaUuid: string; //Media UUID (default to undefined)

const { status, data } = await apiInstance.routesMediaLike(
    mediaUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | [**string**] | Media UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Liked a media |  -  |
|**401** | Unauthorized |  -  |
|**404** | Media not found |  -  |
|**409** | Already liked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesMediaStructure**
> Array<MediaResponse> routesMediaStructure()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesMediaStructure();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MediaResponse>**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of media |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesMediaUnlike**
> routesMediaUnlike()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let mediaUuid: string; //Media UUID (default to undefined)

const { status, data } = await apiInstance.routesMediaUnlike(
    mediaUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mediaUuid** | [**string**] | Media UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Unliked a media |  -  |
|**204** | No changes made |  -  |
|**404** | Media not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesMediaUpdateDescription**
> routesMediaUpdateDescription(mediaDescription)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    MediaDescription
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let mediaUuid: string; //Media UUID (default to undefined)
let mediaDescription: MediaDescription; //

const { status, data } = await apiInstance.routesMediaUpdateDescription(
    mediaUuid,
    mediaDescription
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mediaDescription** | **MediaDescription**|  | |
| **mediaUuid** | [**string**] | Media UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Description updated |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Media not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesOidcCallback**
> LoginResponse routesOidcCallback()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let provider: string; //OIDC provider key (default to undefined)
let code: string; //Authorization code (default to undefined)
let state: string; //CSRF state (default to undefined)

const { status, data } = await apiInstance.routesOidcCallback(
    provider,
    code,
    state
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | OIDC provider key | defaults to undefined|
| **code** | [**string**] | Authorization code | defaults to undefined|
| **state** | [**string**] | CSRF state | defaults to undefined|


### Return type

**LoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**400** | Bad request |  -  |
|**401** | Authentication failed |  -  |
|**404** | Provider not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesOidcLogin**
> routesOidcLogin()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let provider: string; //OIDC provider key (default to undefined)

const { status, data } = await apiInstance.routesOidcLogin(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | OIDC provider key | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**302** | Redirect to OIDC provider |  -  |
|**404** | OIDC provider not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesRefreshToken**
> ClaimsEncoded routesRefreshToken(claimsEncoded)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClaimsEncoded
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let claimsEncoded: ClaimsEncoded; //

const { status, data } = await apiInstance.routesRefreshToken(
    claimsEncoded
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **claimsEncoded** | **ClaimsEncoded**|  | |


### Return type

**ClaimsEncoded**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Token refreshed |  -  |
|**400** | Invalid JSON or wrong shape |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesScanMedia**
> routesScanMedia()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesScanMedia();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scan started |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesSystemInfoPublic**
> SystemInfoPublic routesSystemInfoPublic()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.routesSystemInfoPublic();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SystemInfoPublic**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | System info |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesUpdateAlbum**
> routesUpdateAlbum(albumUpdateData)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AlbumUpdateData
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumUuid: string; //Album UUID (default to undefined)
let albumUpdateData: AlbumUpdateData; //

const { status, data } = await apiInstance.routesUpdateAlbum(
    albumUuid,
    albumUpdateData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumUpdateData** | **AlbumUpdateData**|  | |
| **albumUuid** | [**string**] | Album UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album updated |  -  |
|**204** | No changes |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Album not found |  -  |
|**422** | Unprocessable entity |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **routesUpdateAlbumShareLink**
> routesUpdateAlbumShareLink(albumShareLinkInsert)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AlbumShareLinkInsert
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let albumShareLinkUuid: string; //Album Share Link UUID (default to undefined)
let albumShareLinkInsert: AlbumShareLinkInsert; //

const { status, data } = await apiInstance.routesUpdateAlbumShareLink(
    albumShareLinkUuid,
    albumShareLinkInsert
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **albumShareLinkInsert** | **AlbumShareLinkInsert**|  | |
| **albumShareLinkUuid** | [**string**] | Album Share Link UUID | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Album share link updated |  -  |
|**204** | No changes |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not found |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

