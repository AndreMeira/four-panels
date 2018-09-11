<template>
  <div class="section">
    <article class="container" v-bind:class="[sectionClass, {active}]">
      <div class="heading-primary">
        <h1 class="heading-primary--main big late white" v-bind:class="{active}">
          Let's start.
        </h1>
        <div class="button-container late" v-bind:class="[sectionClass, {active}]">
          <button>get in touch</button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

import {Mediator} from '@/Mediator';

export default {
  name: 'GetInTouch',
  props:["sectionClass", "sectionStyle", "active"],

  mounted() {
  },

  methods: {

  },

  watch: {
    active() {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.active);
    }
  }
};
</script>
