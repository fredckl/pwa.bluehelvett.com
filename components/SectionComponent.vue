<template>
  <section class="container mx-auto px-10 py-5">
    <div class="flex items-stretch follow-title" data-sticky-container>
      <div class="w-1/3 title">
        <h2 class="sticky-header inline" data-margin-top="130">{{ title }}</h2>
      </div>
      <div class="w-2/3 leading-normal description">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  props: {
    title: String,
    content: String
  },


}
</script>

<style>
.sticky-header {
  width: auto !important;
  background-color: #fff;
  width: 100%
}
</style>


