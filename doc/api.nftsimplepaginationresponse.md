[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NFTSimplePaginationResponse](./api.nftsimplepaginationresponse.md)

## NFTSimplePaginationResponse type

<b>Signature:</b>

```typescript
export type NFTSimplePaginationResponse = {
  status?: Status
  total?: number
  page?: number
  page_size?: number
  cursor?: string
  result: Array<NFTSimple>
}
```

<b>References:</b> [Status](./api.status.md)<!-- -->, [NFTSimple](./api.nftsimple.md)
