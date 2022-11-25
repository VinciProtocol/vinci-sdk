[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [OpenAPIConfig](./api.openapiconfig.md)

## OpenAPIConfig type

<b>Signature:</b>

```typescript
export type OpenAPIConfig = {
  BASE: string
  VERSION: string
  WITH_CREDENTIALS: boolean
  CREDENTIALS: 'include' | 'omit' | 'same-origin'
  TOKEN?: string | Resolver<string>
  USERNAME?: string | Resolver<string>
  PASSWORD?: string | Resolver<string>
  HEADERS?: Headers | Resolver<Headers>
  ENCODE_PATH?: (path: string) => string
}
```
