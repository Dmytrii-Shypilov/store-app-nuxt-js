export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    raiting: {
        rate: number, count: number
    }
}

function useFetch<DataT, ErrorT>(
    url: string | Request | Ref<string | Request> | (() => string | Request),
    options?: UseFetchOptions<DataT>
  ): Promise<AsyncData<DataT, ErrorT>>
  
  type UseFetchOptions<DataT> = {
    key?: string
    method?: string
    query?: SearchParams
    params?: SearchParams
    body?: RequestInit['body'] | Record<string, any>
    headers?: Record<string, string> | [key: string, value: string][] | Headers
    baseURL?: string
    server?: boolean
    lazy?: boolean
    immediate?: boolean
    default?: () => DataT
    transform?: (input: DataT) => DataT
    pick?: string[]
    watch?: WatchSource[] | false
  }
  
  type AsyncData<DataT, ErrorT> = {
    data: Ref<DataT | null>
    pending: Ref<boolean>
    refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>
    execute: (opts?: AsyncDataExecuteOptions) => Promise<void>
    error: Ref<ErrorT | null>
    status: Ref<AsyncDataRequestStatus>
  }
  
  interface AsyncDataExecuteOptions {
    dedupe?: boolean
  }
  
  type AsyncDataRequestStatus = 'idle' | 'pending' | 'success' | 'error'
  