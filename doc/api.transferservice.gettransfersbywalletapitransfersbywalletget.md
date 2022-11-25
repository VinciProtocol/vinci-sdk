[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [TransferService](./api.transferservice.md) &gt; [getTransfersByWalletApiTransfersByWalletGet](./api.transferservice.gettransfersbywalletapitransfersbywalletget.md)

## TransferService.getTransfersByWalletApiTransfersByWalletGet() method

Get Transfers By Wallet Get transfers of NFTs given the wallet and other parameters.

<b>Signature:</b>

```typescript
static getTransfersByWalletApiTransfersByWalletGet(chain: Chain, address: string, fromBlock?: number, toBlock?: number, cursor?: string, limit?: number, format?: Format, direction?: Direction): CancelablePromise<TransferRespPaginationResponse>;
```

## Parameters

| Parameter | Type                            | Description                                                                                      |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| chain     | [Chain](./api.chain.md)         | The chain to query                                                                               |
| address   | string                          | The address                                                                                      |
| fromBlock | number                          | <i>(Optional)</i> The minimum block number from which to start the search                        |
| toBlock   | number                          | <i>(Optional)</i> The maximum block number from which to end the search                          |
| cursor    | string                          | <i>(Optional)</i> The cursor returned in the previous response (used for getting the next page). |
| limit     | number                          | <i>(Optional)</i> The desired page size of the result.                                           |
| format    | [Format](./api.format.md)       | <i>(Optional)</i> The format of the token ID                                                     |
| direction | [Direction](./api.direction.md) | <i>(Optional)</i> The transfer direction                                                         |

<b>Returns:</b>

[CancelablePromise](./api.cancelablepromise.md)<!-- -->&lt;[TransferRespPaginationResponse](./api.transferresppaginationresponse.md)<!-- -->&gt;

TransferRespPaginationResponse Successful Response

## Exceptions

ApiError
