import { QueryClient, QueryFunction, QueryKey } from "@tanstack/react-query"

/* -----------------------------------------------------------------------------
 * Helpers
 * ---------------------------------------------------------------------------*/

async function throwIfResNotOk(res: Response): Promise<void> {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText
    throw new Error(`${res.status}: ${text}`)
  }
}

/* -----------------------------------------------------------------------------
 * API Request
 * ---------------------------------------------------------------------------*/

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export async function apiRequest<TResponse = unknown>(
  method: HttpMethod,
  url: string,
  data?: unknown,
): Promise<TResponse> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : undefined,
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  })

  await throwIfResNotOk(res)

  // Handle empty responses (204, etc.)
  if (res.status === 204) {
    return undefined as TResponse
  }

  return (await res.json()) as TResponse
}

/* -----------------------------------------------------------------------------
 * React Query Default Query Function
 * ---------------------------------------------------------------------------*/

type UnauthorizedBehavior = "returnNull" | "throw"

export const getQueryFn =
  <T>(options: { on401: UnauthorizedBehavior }): QueryFunction<T | null> =>
  async ({ queryKey }: { queryKey: QueryKey }) => {
    const url = queryKey.join("/")

    const res = await fetch(url, {
      credentials: "include",
    })

    if (options.on401 === "returnNull" && res.status === 401) {
      return null
    }

    await throwIfResNotOk(res)
    return (await res.json()) as T
  }

/* -----------------------------------------------------------------------------
 * Query Client
 * ---------------------------------------------------------------------------*/

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
})
