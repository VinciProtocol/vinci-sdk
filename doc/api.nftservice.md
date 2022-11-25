[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [NftService](./api.nftservice.md)

## NftService class

<b>Signature:</b>

```typescript
export declare class NftService
```

## Methods

| Method                                                                                                                                    | Modifiers           | Description                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [getNftFloorPriceApiNftsPriceGet(address, chain)](./api.nftservice.getnftfloorpriceapinftspriceget.md)                                    | <code>static</code> | Get NFT Floor Price Get NFT floor price                                                                               |
| [getNftMetadataApiNftsMetadataGet(chain, address, tokenId, format)](./api.nftservice.getnftmetadataapinftsmetadataget.md)                 | <code>static</code> | Get NFT Metadata Get NFT data, including metadata (where available), for the given NFT token ID and contract address. |
| [getNftsByContractApiNftsByContractGet(chain, address, cursor, limit, format)](./api.nftservice.getnftsbycontractapinftsbycontractget.md) | <code>static</code> | Get NFTs By Contract Get NFTs for a given contract address, including metadata for all NFTs (where available).        |
| [getNftsByWalletApiNftsByWalletGet(chain, address, cursor, limit, format)](./api.nftservice.getnftsbywalletapinftsbywalletget.md)         | <code>static</code> | Get NFTs By Wallet Get NFTs owned by a given address.                                                                 |
| [searchNftsApiNftsSearchGet(chain, q, fromBlock, toBlock, format, filter, addresses)](./api.nftservice.searchnftsapinftssearchget.md)     | <code>static</code> | Search NFTs Get NFTs that match a given metadata search query.                                                        |
