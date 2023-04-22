import { BACK_URL } from '.'
export const login = async (username: string, password: string) => {
  const response = await fetch(`${BACK_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })

  return await response.json()
}