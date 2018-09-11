<template>
  <div class="section">
    <div class="rel-v-center">
      <article class="container" v-bind:class="sectionClass">
        <div class="heading-primary">
          <div
            class="heading-primary--upper entering-first"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
            Other bollocks.
          </div>
          <h1
            class="heading-primary--main entering-second"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
            Let's grow <span class="lighten">together.</span>
          </h1>
          <h2
            class="heading-primary--sub entering-third half-parent"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import {Mediator} from '@/Mediator';

export default {
  name: 'GrowTogether',
  props:["sectionClass", "sectionStyle"],

  mounted() {
  },

  methods: {

  }
};
</script>
