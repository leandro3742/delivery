import { BACK_URL } from '.'
import { UserDto } from '../assets/DataTypes/UserDto'
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

export const register = async (user: UserDto) => {
  const response = await fetch(`${BACK_URL}/user/registry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...user }),
  })

  return await response.json()
}