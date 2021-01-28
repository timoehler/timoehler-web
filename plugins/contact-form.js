import Vue from 'vue'
import ContactForm from '~/components/contact-form.vue'

Vue.component('ContactForm', ContactForm)

const docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml')
const comment = docu.createComment(
  "If you're reading this, let's meet up!  First coffee or beer is on me.  Reach out -> timoehler@gmail.com"
)
window.document.prepend(comment)
