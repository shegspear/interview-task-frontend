<template>
    <div class="p-5 bg-white mt-4 mx-4 grid grid-cols-5 gap-4">
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="number" v-model="id" placeholder="enter id"   />
       </div>
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="text" v-model="name" placeholder="enter name" />
       </div>
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="text" v-model="sex" placeholder="enter sex" />
       </div>
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="number" v-model="age"  placeholder="enter age" />
       </div>
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="text" v-model="role" placeholder="enter role" />
       </div>
    </div>
   <div class="p-5 bg-white mb-4 mx-4">
        <button @click="createPersonel" class="bg-green-400 px-5 py-2 hover:bg-green-700 text-white">add</button>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'Input',
  data: function () {
    return {
      id: 0,
      name: 'test name',
      sex: 'test sex',
      age: 0,
      role: 'test role'
    }
  },
  methods: {
    ...mapMutations(['toggleLoader']),
    createPersonel: async function () {
      const personel = {
        _id: this.id,
        name: this.name,
        sex: this.sex,
        age: this.age,
        role: this.role
      }
      this.toggleLoader(true)
      const apiClient = axios.create({ baseURL: 'https://whispering-river-10775.herokuapp.com/' })
      const res = await apiClient.post('/api/personels', personel, { Headers: { 'Content-Type': 'application/json' } })
      if (res.data === 'personel saved') { this.toggleLoader(false) }
      this.id = 0
      this.name = ''
      this.sex = ''
      this.age = ''
      this.role = ''
      location.reload()
    }
  }
}
</script>

<style scoped>
    .input-holder {
        border: 1px solid grey;
        padding: 5px 15px;
        background-color: whitesmoke;
    }

    .interviwer-name-input {
        border: none;
        outline: none;
        width: 100%;
        color: white;
    }

    .interviwer-name-input::placeholder {
        color: white;
    }
</style>
