<template>
  <div id="app">
    <no-ssr>
      <div class="fade-in">
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
      </div>
    </no-ssr>
    <main id="page-wrap">
      <div class="above-fold-container">
        <section class="container flex">
          <img class="hero-image" src="../assets/myAvatar.png">
          <div class="header">
            <div class="title-container">
              <h1 class="title">
                Hi, I&#39;m Tim
              </h1>
            </div>
            <h2 class="subtitle">
              I'm a software consultant living in the twin cities.  I enjoy building websites that are fast, fun and engaging.
            </h2>
          </div>
        </section>
      </div>


      <section class="container below-fold">
        <div class="links">
          <a
            href="https://github.com/timoehler"
            target="_blank"
            class="btn btn-secondary btn-md cta-link"
          >
            GitHub
          </a>
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="btn btn-secondary btn-md cta-link" 
          >
            LinkedIn
          </a>
        </div>

        <div class="contact__container">
          <div class="want-help__container">
            <h2>
              Want help with a project?  
            </h2>
            Reach out using the form below for rate and availability.  Or just say 'Hi'.
          </div>
          <no-ssr>
            <ContactForm />
          </no-ssr>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header {
  min-width: 300px;
  max-width: 500px;
}

.hero-image {
  min-width: 300px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.want-help__container {
  margin-bottom: 30px;
}
.above-fold-container {
  background: #2b303a;
  border-bottom: solid 6px #58a4b0;
}

.title-container {
  background: #eee;
  border-right: solid 6px #58a4b0;
  border-bottom: solid 4px #58a4b0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #222;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #eee;
  word-spacing: 5px;
  margin: 20px 0 0 0;
}

.links {
  padding-top: 15px;
}

.contact__container {
  text-align: left;
  margin-top: 50px;
}

.bm-burger-bars {
  background-color: #eee;
}

.bm-menu {
  background-color: #474b4f;
}

.cta-link {
  width: 300px;
  margin: 30px;
}

body {
  background: #9b9ea0 !important;
}

#page-wrap {
  border: solid 1px #000;
  margin: -1px;
  background: #eee;
}

.fade-in {
  -webkit-animation: fadein 0.5s ease-out; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s ease-out; /* Firefox < 16 */
  -ms-animation: fadein 0.5s ease-out; /* Internet Explorer */
  -o-animation: fadein 0.5s ease-out; /* Opera < 12.1 */
  animation: fadein 0.5s ease-out;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
