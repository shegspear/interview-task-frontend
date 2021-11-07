<template>
    <table class="w-full bg-white">
        <thead>
            <tr>
                <th> ID </th>
                <th> name </th>
                <th> sex </th>
                <th><Filter /></th>
                <th> age </th>
                <th> role </th>
            </tr>
        </thead>
        <tbody v-if="empty === true">
          <div class="flex justify-center items-center">
          <div
            class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
          ></div>
          </div>
        </tbody>
        <tbody class="w-full" v-for="(item, index) in arr" :key={index}>
          <tr  class="m-5">
            <td class="mr-8" >{{item._id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td> </td>
            <td>{{item.age}}</td>
            <td>{{item.role}}</td>
          </tr>
      </tbody>
    </table>
</template>

<script>
import Filter from '@/components/Filter.vue'
import axios from 'axios'

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
  mounted: async function () {
    const apiClient = axios.create({ baseURL: 'https://whispering-river-10775.herokuapp.com/' })
    const perArr = await apiClient.get('/api/personels')
    this.empty = false
    this.arr = perArr.data
    console.log(this.arr)
  }
}
</script>

<style scoped>
  .t-row {
    margin: 20px 0px;
  }
</style>
