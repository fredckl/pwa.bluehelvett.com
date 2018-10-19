<template>
  <section>

    <div class="mx-auto md:w-2/3 mt-8">
      <div class="w-full">
        <h3 class="mb-4">Nous contacter</h3>
        <p class="mb-8">
          Vous souhaitez en savoir davantage sur notre activité,
          <br>
          vous avez des questions...
          <br>
          <br>
          laisser nous vos coordonnées et nous vous contacterons prochainement
        </p>

        <form class="">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                Votre prénom
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name" type="text" name="firstname">
              <p class="text-red text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                Votre nom
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-last-name" type="text" name="lastname">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                Sujet de votre message
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-password" type="text" name="subject">
              <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
                Votre message
              </label>
              <textarea class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="grid-password" name="message"></textarea>
              <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    components: {

    }
  }

</script>
