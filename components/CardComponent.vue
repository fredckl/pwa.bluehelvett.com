<template>
  <div class="max-w-sm rounded overflow-hidden shadow-md pt-5 hover:shadow-lg">
    <img class="w-full h12" :src="img" :alt="imgAlt">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-grey-darker text-base">
        <slot></slot>
      </p>
      <div v-if="showMore" class="clearfix mt-4 text-center">
      <button class="bg-red-light hover:bg-blue-dark text-white py-2 px-4 rounded">En savoir +</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    img: String,
    imgAlt: String,
    showMore: String
  }
}
</script>


