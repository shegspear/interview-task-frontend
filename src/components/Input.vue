<template>
    <div class="p-5 bg-white my-4 mx-4">
       <div class="input-holder">
            <input class="interviwer-name-input bg-blue-400 p-2" type="text" placeholder="enter interviewer name" />
       </div>
    </div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style scoped>
    .input-holder {
        border: 1px solid grey;
        width: 300px;
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
