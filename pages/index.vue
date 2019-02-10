<template>
  <div id="app">
    <no-ssr>
      <div class="fade-in">
        <ScaleRotateMenu>
          <a id="home" href="#">
            <span>Home</span>
          </a>
          <a id="projects" href="https://github.com/timoehler">
            <span>GitHub</span>
          </a>
          <a id="about" href="https://www.linkedin.com/in/tim-oehler/">
            <span>LinkedIn</span>
          </a>
        </ScaleRotateMenu>
      </div>
    </no-ssr>
    <main id="page-wrap">
      <div class="above-fold-container">
        <section class="container flex">
          <img class="hero-image" src="../assets/myAvatar.png">
          <div class="welcome-header">
            <div class="title-container">
              <h1 class="title">
                Hi, I&#39;m Tim.
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
        <div class="footer">
          <p class="copywrite">
            © {{ currentYear }} Tim Oehler
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  components: {},

  data: function() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome-header {
  min-width: 300px;
  max-width: 500px;
  margin: 40px 0 50px;
}

.footer {
  margin-top: 275px;
}

.hero-image {
  min-width: 300px;
  object-fit: contain;
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
  background: transparent;
  border-bottom: solid 4px #58a4b0;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #eee;
  letter-spacing: 1px;
  font-size: 4rem;
}

.subtitle {
  font-weight: 300;
  font-size: 1.8rem;
  color: #eee;
  word-spacing: 5px;
  margin: 20px 0 0 0;
}

.links {
  padding-top: 15px;
}

.contact__container {
  text-align: left;
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
