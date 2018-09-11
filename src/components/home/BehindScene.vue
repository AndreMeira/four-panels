<template>
    <section id="behind-scene" class="bg-scene">
      <bg-gradient-layer></bg-gradient-layer>
      <panel-layer></panel-layer>
      <bg-text-layer></bg-text-layer>
    </section>
</template>

<script>
import {Mediator} from '@/Mediator';
import PanelLayer      from '@/components/common/PanelLayer';
import BgTextLayer     from '@/components/common/BgTextLayer';
import BgGradientLayer from '@/components/common/BgGradientLayer';

export default {
  name: 'behind-scene',

  components: {
    BgTextLayer,
    PanelLayer,
    BgGradientLayer,
  },

  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
