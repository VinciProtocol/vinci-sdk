[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [FlashLoanParams](./protocol.flashloanparams.md)

## FlashLoanParams type

<b>Signature:</b>

```typescript
export type FlashLoanParams = {
  assetToSwapToList: tEthereumAddress[]
  minAmountsToReceive: string[]
  swapAllBalance: boolean[]
  permitAmount: string[]
  deadline: string[]
  v: number[]
  r: BytesLike[]
  s: BytesLike[]
}
```

<b>References:</b> [tEthereumAddress](./protocol.tethereumaddress.md)
