<template>
  <div id="app">
    <formio
      src="https://rdoxiwnceknkbun.form.io/contactus?header=0&theme=simplex"
    />
  </div>
</template>

<script>
import { Form } from 'vue-formio'
export default {
  name: 'App',
  components: { formio: Form }
}
</script>
