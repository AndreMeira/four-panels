<template>
    <section id="index">
      <ul v-bind:class="listStyle">
        <li>
          <span class="number" v-bind:class="{'selected': selected[0]}">01</span>
        </li>
        <li>
          <span class="number" v-bind:class="{'selected': selected[1]}">02</span>
        </li>
        <li>
          <span class="number" v-bind:class="{'selected': selected[2]}">03</span>
        </li>
        <li>
          <span class="number" v-bind:class="{'selected': selected[3]}">04</span>
        </li>
        <li>
          <span class="number" v-bind:class="{'selected': selected[4]}">05</span>
        </li>
      </ul>
    </section>
</template>

<script>
import {Mediator} from '@/Mediator';

export default {
  props: ["enabled"],
  name: 'logo',

  mounted() {
    Mediator.$on('page-scroll', this.onPageScroll.bind(this));
  },

  data() {
    return {
      listStyle:"dark",
      selected: [
        true, false, false, false, false
      ]
    };
  },

  methods: {
    onPageScroll(evt) {
      if (evt.status !== 'leaving') {
        return;
      }

      this.listStyle = evt.nextIndex === 4
        ? "white"
        : "dark";

      let selected = [false, false, false, false, false];
      selected[evt.nextIndex] = true;
      this.selected = selected;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
