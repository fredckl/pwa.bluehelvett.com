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

        <form class="" method="POST">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="required block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="firstname">
                Votre prénom
              </label>
              <input
                v-validate="'required|alpha'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="[ errors.has('firstname') ? 'border-red' : '']"
                id="firstname"
                type="text"
                name="firstname"
                v-model.lazy="form.firstname">
              <p
                class="text-red text-xs italic"
                v-show="errors.has('firstname')">{{ errors.first('firstname') }}</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="required block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="lastname">
                Votre nom
              </label>
              <input
                v-validate="'required|alpha'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="[ errors.has('lastname') ? 'border-red' : '']"
                id="lastname"
                type="text"
                name="lastname"
                v-model.lazy="form.lastname">
                <p class="text-red text-xs italic" v-show="errors.has('lastname')">{{ errors.first('lastname') }}</p>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="required block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                Votre e-mail
              </label>
              <input
                v-validate="'required|email'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="[errors.has('email') ? 'border-red' : '']"
                id="email"
                type="text"
                name="email"
                v-model.lazy="form.email">
              <p
                class="text-red text-xs italic"
                v-show="errors.has('email')">{{ errors.first('email') }}</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="phone">
                Votre n° de téléphone
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                id="phone"
                type="text"
                name="phone"
                v-model="form.phone">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="required block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="subject">
                Sujet de votre message
              </label>
              <input
                v-validate="'required'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="[errors.has('subject') ? 'border-red' : '']"
                id="subject"
                type="text"
                name="subject"
                v-model.lazy="form.subject">
              <p class="text-red text-xs italic" v-show="errors.has('subject')">{{ errors.first('subject') }}</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="required block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="message">
                Votre message
              </label>
              <textarea
                v-validate="'required'"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                :class="[errors.has('message') ? 'border-red' : '']"
                id="message"
                name="message"
                v-model.lazy="form.message"></textarea>
              <p class="text-red text-xs italic" v-show="errors.has('message')">{{ errors.first('message') }}</p>
            </div>
          </div>

          <div class="flex">
            <div class="clearfix w-screen">
              <button
                class="bg-red-light float-right text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                @click.prevent="validateForm">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},

  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        subject: '',
        message: '',
        email: '',
        phone: ''
      }
    }
  },

  methods: {
    validateForm () {
      console.log('validateForm')
      this.$validator.validateAll();
    }
  }
}
</script>

<style>
label.required::after {
  content: " *";
  color: red;
}
</style>
