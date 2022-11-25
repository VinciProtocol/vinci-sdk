[Home](./index.md) &gt; [@vinci-protocol/math](./math.md) &gt; [binomialApproximatedRayPow](./math.binomialapproximatedraypow.md)

## binomialApproximatedRayPow() function

RayPow is slow and gas intensive therefore in v2 we switched to binomial approximation on the contract level. While the results ar not exact to the last decimal, they are close enough.

<b>Signature:</b>

```typescript
export declare function binomialApproximatedRayPow(a: BigNumberValue, p: BigNumberValue): BigNumber
```

## Parameters

| Parameter | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| a         | [BigNumberValue](./math.bignumbervalue.md) |             |
| p         | [BigNumberValue](./math.bignumbervalue.md) |             |

<b>Returns:</b>

BigNumber
