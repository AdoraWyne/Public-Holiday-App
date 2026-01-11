# What is React Query?

React Query helps you with:
- Fetching data (API calls)
- Caching that data
- Loading & error states
- Refetching when needed

# Step 1: fetch function
You still need `fetch` to make API call

```ts
const fetchUsers = async () => {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error('Network error')
  }
  return response.json()
}
```

# Step 2: useQuery() - Very important!
`useQuery()` handles the data and manage the lifecycle. It gives you back:
- `data`
- `isLoading`
- `error`

```ts
import { useQuery } from '@tanstack/react-query'

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

```