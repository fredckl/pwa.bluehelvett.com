import Vue from 'vue';
import fr from 'vee-validate/dist/locale/fr'
import VeeValidate, { Validator } from 'vee-validate';

const config = {
  locale: 'fr'
}

// Validator.localize({'fr': fr});
Vue.use(VeeValidate, config)

