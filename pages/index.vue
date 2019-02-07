<template>
  <div id="app">
    <section class="container">
      <no-ssr>
        <ScaleRotateMenu>
          <a id="home" href="#">
            <span>Home</span>
          </a>
          <a id="projects" href="#">
            <span>Projects</span>
          </a>
          <a id="about" href="#">
            <span>About</span>
          </a>
        </ScaleRotateMenu>
      </no-ssr>
      <main id="page-wrap">
        <logo />
        <!-- <no-ssr>
          <contactForm />
        </no-ssr> -->
        <h1 class="title">
          Hi, I&#39;m Tim
        </h1>
        <h2 class="subtitle">
          Here's a sentence about me.
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>

        <div class="contact__container">
          <no-ssr>
            <ContactForm />
          </no-ssr>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.contact__container {
  text-align: left;
  margin-top: 50px;
}
</style>
