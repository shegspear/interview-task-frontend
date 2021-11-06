<template>
  <div class="bg-blue-900 h-10 p-1 text-center text-gray-50 grid grid-cols-3">
    <div class="text-right w-2/4">
      <button class="bg-blue-400 h-8 w-10">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
    <div class="text-right">
      <button class="h-8 w-10">
        <!-- hell -->
      </button>
    </div>
    <div class="text-right">
      <i class="fa fa-bell mr-2" aria-hidden="true"></i>
      <button class="bg-blue-400 h-8 w-10 mr-1">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <span> Boris Johnson </span>
      <button class="bg-blue-400 h-8 w-10">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'sup'
    }
  }
}
</script>
