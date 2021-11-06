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
    </table>
</template>

<script>
import Filter from '@/components/Filter.vue'
export default {
  name: 'Table',
  components: {
    Filter
  }
}
</script>
