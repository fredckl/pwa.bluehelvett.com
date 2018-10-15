<template>
  <div class="font-sans text-grey-darkest">
    <main-header />

    <div class="">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import MainHeader from './partials/MainHeader.vue'

export default {
  components: {
    MainHeader
  }

}
</script>

<style>
a {
  text-decoration: none;
  color: #3D4852
}
a:hover {
  color: #ef5753;
}
</style>


