[Home](./index.md) &gt; [@vinci-protocol/hooks](./hooks.md) &gt; [usePost](./hooks.usepost.md)

## usePost() function

<b>Signature:</b>

```typescript
export declare function usePost<T, A extends Array<any>>(
  fn: (...args: A) => Promise<T>
): {
  post: (...args: A) => Promise<T>
  cancel: () => false
  loading: boolean
}
```

## Parameters

| Parameter | Type                                | Description |
| --------- | ----------------------------------- | ----------- |
| fn        | (...args: A) =&gt; Promise&lt;T&gt; |             |

<b>Returns:</b>

{ post: (...args: A) =&gt; Promise&lt;T&gt;; cancel: () =&gt; false; loading: boolean; }
