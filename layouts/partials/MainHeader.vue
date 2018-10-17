<template>



  <header class="main-header border-b z-50 sticky pin-t bg-white shadow bg-red-light">
    <nav class="flex items-end justify-between flex-wrap p-6">
      <div class="flex-1 flex-no-shrink text-white">
        <span class="text-lg">bluehelvett</span> <em><small>&mdash; artisan digital</small></em>
      </div>
      <div class="flex-1 block flex-grow lg:flex lg:items-end lg:w-auto">
        <div class="text-sm lg:flex-grow text-center">
          <nuxt-link to="/" class="">
            <img src="/bluehelvett-white.png" alt="bluehelvett" width="60">
            <br>
            <!-- <span class="font-semibold text-xl tracking-tight px-2">bluehelvett</span> -->
          </nuxt-link>
        </div>
      </div>
      <div class="flex-1">
        <div class="float-right">
          <nuxt-link :to="{name: 'contact'}" class="inline-block text-sm px-4 py-2 mr-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-light hover:bg-white mt-4 lg:mt-0">Nous
            contacter</nuxt-link>


          <a @click="toggleMenu" href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-light hover:bg-white mt-4 lg:mt-0">
            <i class="icon-th-menu-outline" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </nav>

    <div class="submenu shadow" :class="{ 'active animated fadeInRight' : subMenuIsActive }">
      <div class="flex justify-between flex-wrap p-6">
        <div class="flex-1 text-right">
          <nuxt-link v-for="(menu, index) in menus" :key="index" :to="menu.url" class="text-grey-darkest hover:text-red-light uppercase px-2 ml-2 rounded border-l border-r border-grey-darkest">{{ menu.title }}</nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          url: '/sites/vitrine',
          title: 'Site vitrine'
        },
        {
          url: '/sites/e-commerce',
          title: 'Site e-commerce'
        },
        {
          url: '/sites/sur-mesure',
          title: 'Site sur-mesure'
        }
      ],
      subMenuIsActive: false
    }

  },

  methods: {
    toggleMenu () {
      if (this.subMenuIsActive) {
        this.subMenuIsActive = false
      } else {
        this.subMenuIsActive = true
      }
    }
  }
}
</script>

<style scoped>
.submenu {
  /* display: none; */
  /* max-height: 0; */
  overflow: hidden;
  transition: left 0.15s ease-out;
  position: absolute;
  top: 6.1rem;
  right: -100%;
  left: 100%;
  z-index: 1;
}

.submenu.active {
  display: block;
  background-color: white;
  transition: left 0.25s ease-in;
  left: 0;
  right: 0;
}

</style>

