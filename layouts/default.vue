<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.btn-primary {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #dc4933;
  background-color: #dc4933;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
}

.btn-primary:hover {
  color: #fff;
  background-color: #c52913;
}

.btn-secondary {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #0c7c59;
  background-color: transparent;
  color: #0c7c59;
  text-decoration: none;
  padding: 10px 30px;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #0c7c59;
  text-decoration: underline;
}
</style>
