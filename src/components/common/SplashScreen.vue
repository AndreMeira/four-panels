<template>
  <transition name="splash-fox" v-on:after-leave="done">
    <template v-if="!ready">
      <section id="splash-screen" class="fg-scene">
        <div class="splash-screen-bg" v-bind:class="{'ready': ready}"></div>

        <div class="splash-screen-content">
          <div class="splash-logo-container">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="49 21.950819672130592 544 611.0491803278694" width="140px" height="140px">
              <defs>

              </defs>
              <g>
                <g>
                  <g>
                    <path
                      d="M590 427.65L590 22.95L455 157.85L320 157.85L185 157.85L50 22.95L50 427.65L320 630L590 427.65Z"
                      opacity="1" fill-opacity="0" stroke="#333" stroke-width="45" stroke-opacity=".7" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M590 427.65L590 22.95L455 157.85L320 157.85L185 157.85L50 22.95L50 427.65L320 630L590 427.65Z"
                      opacity=".8" fill-opacity="0" stroke-width="10" stroke-opacity="1"></path>
                  </g>
                </g>
              </g>
            </svg>
            <h1>
              <span>Developer</span> <span>Creative</span> <span>D-Nomad</span>
            </h1>
          </div>
        </div>
        <div></div>
      </section>
    </template>
  </transition>
</template>

<script>
import {Mediator} from '@/Mediator';

export default {
  name: 'splash-screen',

  props:['ready'],

  mounted() {
  },

  data() {
    return {
    };
  },

  methods: {
    done() {
      Mediator.$emit('splash-screen', {status:"done"});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
