<template>
  <div class="section">
    <div class="rel-v-center">
      <article class="container" v-bind:class="sectionClass">
        <div class="heading-primary">
            <div
              class="heading-primary--upper entering-first half-parent"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <span class="foxy">Andre Meira</span>, full stack developer.
            </div>
            <h1
              class="heading-primary--main entering-second"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              I make <span class="lighten">&lt;websites&gt;</span> and <span class="lighten">apps</span>.
            </h1>
            <h2
              class="heading-primary--sub entering-third half-parent"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
        </div>
        <div class="more-infos">
          <div class="more-infos__child">
              <h3
                class="entering-second"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                  I work for
                </h3>
              <ul
                class="entering-third"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                <li>
                    <span>Start up</span>
                </li>
                <li>
                    <span>Company</span>
                </li>
                <li>
                    <span>Personal project</span>
                </li>
              </ul>
          </div>
          <div class="more-infos__child">
              <h3
                class="entering-second"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                  Bollocks
              </h3>
              <ul
                class="entering-third"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                <li>
                    <span>Start up</span>
                </li>
                <li>
                    <span>Company</span>
                </li>
                <li>
                    <span>Personal project</span>
                </li>
              </ul>
          </div>
          <div class="more-infos__child">
              <h3
                class="entering-second"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                  More bollocks
              </h3>
              <ul
                class="entering-third"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                <li>
                    <span>Start up</span>
                </li>
                <li>
                    <span>Company</span>
                </li>
                <li>
                    <span>Personal project</span>
                </li>
              </ul>
          </div>
          <div class="more-infos__child">
              <h3
                class="entering-second"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                  Bollocks again
                </h3>
              <ul
                class="entering-third"
                v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
                <li>
                    <span>Start up</span>
                </li>
                <li>
                    <span>Company</span>
                </li>
                <li>
                    <span>Personal project</span>
                </li>
              </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import {Mediator} from '@/Mediator';

export default {
  name: 'introduction',
  props:["sectionClass", "sectionStyle"],

  mounted() {
  },

  methods: {

  }
};
</script>
