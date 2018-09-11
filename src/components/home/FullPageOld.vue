<template>
  <section id="content">
      <div class="section">
        <div class="rel-v-center">
          <article class="container">
            <div class="heading-primary">
                <div class="heading-primary--upper">
                  Andre Meira, developper full stack.
                </div>
                <h1 class="heading-primary--main">
                  I make <span class="lighten">website</span> and apps.
                </h1>
                <h2 class="heading-primary--sub">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
            </div>
          </article>
        </div>
      </div>
      <div class="section">
        <div class="rel-v-center">
          <article class="container">
            <div class="heading-primary">
                <h1 class="heading-primary--main">test</h1>
            </div>
          </article>
        </div>
      </div>
      <div class="section">
        <div class="rel-v-center">
          <article class="container">
            <div class="heading-primary">
                <h1 class="heading-primary--main">test</h1>
            </div>
          </article>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'full-page',
  components: {
  },

  mounted() {
    $(this.$el).fullpage({});
  }
};
</script>
