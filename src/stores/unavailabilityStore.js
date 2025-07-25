import { defineStore } from 'pinia'
import { ref } from 'vue'

import api from '@/axios'

export const useUnavailabilityStore = defineStore('unavailabilities', () => {
  const items = ref([])
  const isLoaded = ref(false)

  async function create(data) {
    const response = await api.post('/api/unavailabilities', data)

    if (!response.data.error) {
      items.value.push(response.data)
    }
  }

  async function update(id, data) {
    const index = items.value.findIndex((i) => i.id === id)

    if (index !== -1) {
      const response = await api.put(`/api/unavailabilities/${id}`, data)

      if (!response.data.error) {
        items.value[index] = response.data
      }
    }
  }

  async function fetchAll() {
    if (!isLoaded.value) {
      const response = await api.get('/api/unavailabilities')

      if (!response.data.error) {
        items.value = response.data
        isLoaded.value = true
      }
    }
  }

  async function deleteById(id) {
    const response = await api.delete(`/api/unavailabilities/${id}`)

    if (!response.data.error) {
      items.value = items.value.filter((i) => i.id !== id)
    }
  }

  return {
    items,
    create,
    update,
    fetchAll,
    deleteById,
  }
})
