<template>
    <div v-show="empty === true || loading === true">
      <div class="flex justify-center items-center">
    <div
      class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
     ></div>
    </div>
    </div>
    <div class="grid grid-cols-6 gap-4">
      <span>ID</span>
      <span>name</span>
      <span>sex</span>
      <span><Filter /></span>
      <span>age</span>
      <span>role</span>
    </div>
    <div class="w-full" v-for="(item, index) in arr" :key={index}>
      <div class="border border-gray-200 hover:bg-gray-100 grid grid-cols-6 gap-4 py-4">
        <span>{{item._id}}</span>
        <span>{{item.name}}</span>
        <span>{{item.sex}}</span>
        <span></span>
        <span>{{item.age}}</span>
        <span>{{item.role}}</span>
        </div>
    </div>
</template>

<script>
import Filter from '@/components/Filter.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Table',
  components: {
    Filter
  },
  data: function () {
    return {
      empty: true,
      arr: []
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    getNewData: async function () {
      const apiClient = axios.create({ baseURL: 'https://whispering-river-10775.herokuapp.com/' })
      const perArr = await apiClient.get('/api/personels')
      this.empty = false
      this.arr = perArr.data
      console.log(this.arr)
    }
  },
  mounted: async function () {
    const apiClient = axios.create({ baseURL: 'https://whispering-river-10775.herokuapp.com/' })
    const perArr = await apiClient.get('/api/personels')
    this.empty = false
    this.arr = perArr.data
    console.log(this.arr)
  }
}
</script>

<style>
  .t-row {
    margin: 10px 0px;
  }
</style>
