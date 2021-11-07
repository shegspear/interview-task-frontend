<template>
  <div class="home-cont">
    <SideNav />
    <div class='home-body h-60'>
     <div class="grid grid-cols-2 px-2 bg-white">
      <div class="text-left">
        <i class="fa fa-home text-blue-400" aria-hidden="true"></i> /
        <span>Directory</span> /
        <span> Dashboard</span>
      </div>
      <div class="text-right">
        <span>Shrani pot</span>
      </div>
    </div>
    <Input />
    <div class="bg-white w-3/4 ml-5 p-2">
      <TableHead />
      <Table />
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from '@/components/Input.vue'
import TableHead from '@/components/TableHead.vue'
import Table from '@/components/Table.vue'
import SideNav from '@/components/SideNav'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Input,
    TableHead,
    Table,
    SideNav
  },
  computed: {
    ...mapState['.personelArr']
  },
  methods: {
    ...mapActions(['getPersonel'])
  },
  mounted: async function () {
    this.getPersonel()
  }
}
</script>

<style scoped>
  .home-cont {
    display: flex;
    flex-direction: row;
  }

  .home-body {
    background-color:whitesmoke;
    height: 800px;
    width: 85%;
  }
</style>
