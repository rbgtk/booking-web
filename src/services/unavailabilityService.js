import api from '@/axios'

export async function createUnavailability(unavailability) {
  const response = await api.post('/api/unavailabilities', unavailability)
  return response.data
}

export async function fetchUnavailabilities() {
  const response = await api.get('/api/unavailabilities')
  return response.data
}

export async function fetchUnavailability(id) {
  const response = await api.get(`/api/unavailabilities/${id}`)
  return response.data
}

export async function updateUnavailability(unavailability) {
  const response = await api.put(`/api/unavailabilities/${unavailability.id}`, unavailability)
  return response.data
}

export async function deleteUnavailability(unavailability) {
  await api.delete(`/api/unavailabilities/${unavailability.id}`)
}
