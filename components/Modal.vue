<template>
  <div v-if="showModal" @click.self="toggleModal" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
    <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
      <h2 class="text-4xl text-center font-hairline md:leading-loose text-grey md:mt-8 mb-4">Question!</h2>
      <p class="text-xl leading-normal mb-8 text-center">
        Are you enjoying Tailwind CSS?
      </p>
      <div class="inline-flex justify-center">
        <button @click="toggleModal" class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded">
          Absolutely
        </button>
        <button @click="toggleModal" class="bg-grey-lighter flex-1 md:flex-none border-b-2 border-red ml-2 hover:bg-red-lightest text-grey-darkest font-bold py-4 px-6 rounded">
          Not so much
        </button>
      </div>
      <span @click="toggleModal" class="absolute pin-t pin-r pt-4 px-4">
        <svg class="h-12 w-12 text-red-light hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showModal: this.openModal
      }
    },
    props: {
      openModal: {
        type: Boolean,
        default: false
      },
      mainTitle: {
        type: String,
        default: ''
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },

    },
    watch: {
      showModal () {

        this.showModal = !this.showModal
      }
    }

  }

</script>


<style scoped>
  .modal-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
    right: 0;
    bottom: 100%;
    left: 100%;
    width: 100%;
    z-index: 999;
    transition: all .5s;
  }

  .modal-container {
    background-color: #fff;
    overflow: scroll;
    height: 100%;
    transition: all .5s;
  }

  .modal-overlay-open {
    left: 0;
    bottom: 0;
  }

  .modal-overlay-close {}

</style>
