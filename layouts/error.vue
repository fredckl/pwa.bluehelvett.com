<template>
  <div class="mx-auto md:w-2/3 mt-20 text-center">

    <h1 class="pb-3">Oups...</h1>
    <div class="error">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/></svg>
        <p class="title" v-if="error.statusCode === 404">Il n'y a rien avoir par ici !</p>
        <p class="title" v-else>Erreur serveur</p>
    </div>


    <p class="py-5">
      <nuxt-link to="/" class="back"><i class="icon-keyboard_arrow_left"></i> retour à la page d'accueil</nuxt-link>

    </p>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Oups...'
    },
    props: ['error', 'message'],
  }

</script>


<style>
  .__nuxt-error-page {
    padding: 1rem;
    background: #f7f8fb;
    color: #47494e;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: sans-serif;
    font-weight: 100 !important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }

  .__nuxt-error-page .error {
    max-width: 450px
  }

  .__nuxt-error-page .title {
    font-size: 24px;
    font-size: 1.5rem;
    margin-top: 15px;
    color: #47494e;
    margin-bottom: 8px
  }

  .__nuxt-error-page .description {
    color: #7f828b;
    line-height: 21px;
    margin-bottom: 10px
  }

  .__nuxt-error-page a {
    color: #7f828b !important;
    text-decoration: none
  }

  .__nuxt-error-page .logo {
    position: fixed;
    left: 12px;
    bottom: 12px
  }

  .back i {
    vertical-align: middle;
  }

</style>
