<template>
    <section id="menu">
      <input id="menu-on" type="checkbox" />
      <div class="menu-bg"></div>
      <label class="menu-content" for="menu-on">
        <span class="menu-burger"></span>
      </label>
    </section>
</template>

<script>
import {Mediator} from '@/Mediator';

export default {
  props: ["enabled"],
  name: 'menu',

  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
