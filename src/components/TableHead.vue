<template>
    <div class="table-header-holder px-2 py-2 grid grid-cols-2">
        <button class="px-2 py-1 w-1/4 bg-blue-400 text-white">
            clear filters
        </button>
        <div class="text-right">
            <Dropdown />
            <input class="w-60 h-10 border border-current" type="text" placeholder="search" />
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  name: 'TableHead',
  components: {
    Dropdown
  }
}
</script>
