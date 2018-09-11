<template>
  <div id="panel-layer" class="four-panels scene">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import {Mediator} from '@/Mediator';

export default {
  props: ["enabled"],
  name: 'panel-layer',

  mounted() {
    Mediator.$on('page-scroll', this.onPageScroll.bind(this));
  },

  data() {
    return {
      closeRight: false,
    };
  },

  methods: {
    onPageScroll(evt) {
      if (evt.status === "leaving") {
        this.closeRight = true;
      }

      if (evt.status === "loaded") {
        this.closeRight = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
