[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NFTResp](./api.nftresp.md)

## NFTResp type

<b>Signature:</b>

```typescript
export type NFTResp = {
  token_address: string
  name?: string
  symbol?: string
  contract_type?: string
  token_id?: string
  amount?: string
  token_hash?: string
  owner_of?: string
  block_number_minted?: string | number
  block_number?: string | number
  token_uri?: string
  last_token_uri_sync?: string
  last_metadata_sync?: string
  minter_address?: string
  metadata?: MetaData | string
}
```

<b>References:</b> [MetaData](./api.metadata.md)
