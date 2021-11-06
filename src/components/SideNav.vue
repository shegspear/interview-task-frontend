<template>
    <div class="side-nav-holder">
        <div class="font-bold p-3">
          <i class="fa fa-user mr-3" aria-hidden="true"></i>
          Personel
        </div>
        <p class="bg-blue-400 text-white w-full text-center p-1">Preipied</p>
    </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style scoped>
    .side-nav-holder {
        width: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        height: 800px;
    }
</style>
