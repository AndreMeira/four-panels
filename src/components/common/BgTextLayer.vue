<template>
    <div id="bg-text-layer" class="scene">
        <div>
          <span
            class="first-panel"
            v-bind:class="{'split':split, 'disapear': disapear, 'darker': darker}">
              {{text[0]}}
            </span>
        </div>
        <div>
          <span
            class="second-panel"
            v-bind:class="{'split':split, 'disapear': disapear, 'darker': darker}">
              {{text[1]}}
            </span>
        </div>
    </div>
</template>

<script>
import {Mediator} from '@/Mediator';

const text = [
  ["Hello", "World"],
  ["Techno", "logies"],
  ["Andre", "Meira"],
  ["Andre", "Meira"],
  ["Right", "Now"],
];

export default {
  props: ["enabled"],
  name: 'bg-text-layer',

  mounted() {
    Mediator.$once('splash-screen', this.animateText.bind(this));
    Mediator.$on('page-scroll', this.onPageScroll.bind(this));
  },

  data() {
    return {
      split: false,
      disapear: false,
      darker: false,
      text: ["Hello", "World"]
    };
  },

  methods: {
    animateText(evt) {
      if (evt.status === 'done') {
        this.split = true;
      }
    },

    onPageScroll(evt) {
      this.darker = false;

      if (evt.status === 'loaded') {
        this.loadText(evt.index);
        this.disapear = false;
        this.split = true;
      }

      if (evt.status === 'leaving') {
        this.split = false;
        this.disapear = true;
      }

      if (evt.index === 4) {
        this.darker = true;
      }
    },

    loadText(index) {
      if (text[index]) {
        this.text = text[index];
      } else {
        this.text = ["", ""];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
