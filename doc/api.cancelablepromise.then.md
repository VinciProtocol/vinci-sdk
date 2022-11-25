[Home](./index.md) &gt; [@vinci-protocol/api](./api.md) &gt; [CancelablePromise](./api.cancelablepromise.md) &gt; [then](./api.cancelablepromise.then.md)

## CancelablePromise.then() method

<b>Signature:</b>

```typescript
then<TResult1 = T, TResult2 = never>(onFulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
```

## Parameters

| Parameter   | Type                                                                  | Description       |
| ----------- | --------------------------------------------------------------------- | ----------------- |
| onFulfilled | ((value: T) =&gt; TResult1 \| PromiseLike&lt;TResult1&gt;) \| null    | <i>(Optional)</i> |
| onRejected  | ((reason: any) =&gt; TResult2 \| PromiseLike&lt;TResult2&gt;) \| null | <i>(Optional)</i> |

<b>Returns:</b>

Promise&lt;TResult1 \| TResult2&gt;
