<template>
  <div class="section">
    <div class="rel-v-center">
      <article class="container" v-bind:class="sectionClass">
        <div class="heading-primary">
            <h1
              class="heading-primary--main heading-primary--center entering-first"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              Some of my <span class="lighten">&lt;skills&gt;.</span>
            </h1>
            <h2
              class="heading-primary--sub entering-second container-text-center"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <div class="spacer">

            </div>
            <div class="row entering-second container-text-center small-container"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <div class="col-1-of-6">
                <i class="devicon-vuejs-plain skill-icon"></i>
                <h3>vuejs</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-react-original skill-icon"></i>
                <h3>reactjs</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-backbonejs-plain skill-icon"></i>
                <h3>backbonejs</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-javascript-plain skill-icon"></i>
                <h3>vanilla JS</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-css3-plain skill-icon"></i>
                <h3>css3</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-html5-plain skill-icon"></i>
                <h3>html5</h3>
              </div>
            </div>
            <div class="spacer">

            </div>

            <div class="row entering-third container-text-center small-container"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <div class="col-1-of-6">
                <i class="devicon-laravel-plain skill-icon"></i>
                <h3>laravel</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-symfony-original skill-icon"></i>
                <h3>symfony</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-php-plain skill-icon"></i>
                <h3>php</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-nodejs-plain skill-icon"></i>
                <h3>nodejs</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-mysql-plain skill-icon"></i>
                <h3>mysql</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-mongodb-plain skill-icon"></i>
                <h3>mongodb</h3>
              </div>
            </div>
            <div class="spacer">

            </div>
            <div class="row entering-fourth container-text-center small-container"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <div class="col-1-of-6">
                &nbsp;
              </div>
              <div class="col-1-of-6">
                <i class="devicon-webpack-plain skill-icon"></i>
                <h3>webpack</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-git-plain skill-icon"></i>
                <h3>Git</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-linux-plain skill-icon"></i>
                <h3>Linux</h3>
              </div>
              <div class="col-1-of-6">
                <i class="devicon-nginx-original skill-icon"></i>
                <h3>nginx</h3>
              </div>
              <div class="col-1-of-6">
                &nbsp;
              </div>
            </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import {Mediator} from '@/Mediator';

export default {
  name: 'Skills',
  props:["sectionClass", "sectionStyle"],

  mounted() {
  },

  methods: {

  }
};
</script>
<style lang="scss" scoped>

</style>
