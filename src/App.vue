<template>
  <main id="app">
    <home></home>
  </main>
</template>

<script>
import {Mediator} from '@/Mediator';
import Home from '@/components/Home';

export default {
  name: 'App',
  components: {
    Home,
  },

  data () {
    return {};
  }
};
</script>

<style lang="scss">

</style>
