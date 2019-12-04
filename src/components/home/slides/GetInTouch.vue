<template>
  <div class="section">
    <div class="rel-v-center">
      <article class="container" v-bind:class="[sectionClass, {active}]">
        <div class="heading-primary">
          <h1 class="heading-primary--main big late white" v-bind:class="{active}">
            Let's start.
          </h1>
          <form class="form-contact form" v-bind:class="{active}">

            <div class="form__group">
              <label></label>
              <input type="text" name="email" placeholder="email"/>
            </div>

            <div class="form__group">
              <label></label>
              <input type="text" name="subject" placeholder="subject"/>
            </div>

            <div class="form__group">
              <label></label>
              <textarea name="message" placeholder="Your message"></textarea>
            </div>

            <div class="form__group">
              <div class="button-container late" v-bind:class="[sectionClass, {active}]">
                <button>get in touch</button>
              </div>
            </div>
          </form>

        </div>
      </article>
    </div>
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
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  width: 50%;
  text-align: center;
  margin: auto;
  opacity: 0;
  transition: opacity .4s ease-in .3s;

  &.active {
    opacity: 1;
  }

  input, textarea {
    border-radius: 3px;
    font-size: 2rem;
    color: black;
    width: 100%;
    margin: 1rem 0;
    border:solid 1px #ccc;
    background-color: rgba(255, 255, 255, .9);
    font-family: 'Pathway Gothic One', sans-serif;
  }

  input {
    height: 4rem;
    padding: 0 2rem;
  }

  textarea {

    height: 25rem;
    padding: 2rem;
  }
}
</style>
