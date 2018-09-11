<template>
  <div id="panel-layer" class="four-panels scene" v-bind:style="bgStyle">
    <div
      v-bind:class="{'close': panels[0] == 1, 'open': panels[0] == -1}"
      v-bind:style="style[0]"></div>
    <div
      v-bind:class="{'close': panels[1] == 1, 'open': panels[1] == -1}"
      v-bind:style="style[1]"></div>
    <div
      v-bind:class="{'close': panels[2] == 1, 'open': panels[2] == -1}"
      v-bind:style="style[2]"></div>
    <div
      v-bind:class="{'close': panels[3] == 1, 'open': panels[3] == -1}"
      v-bind:style="style[3]"></div>
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
      bgStyle: {
        'background-size': "cover",
        'background-image': 'url("https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'
      },
      style:[{}, {}, {}, {}],
      panels:[1, 1, 1, 1],
    };
  },

  methods: {

    /**
     *
     */
    onPageScroll(evt) {

      if (evt.status === "leaving" && evt.index === 4) {
        this.closePanel([1, 1, 1 , 1], 0);
      }

      if (evt.status === "leaving"
      && evt.index === 3
      && evt.direction === "down") {
        this.closePanel([-1, -1, -1 , -1], 250);
      }
    },

    /**
     *
     */
    closePanel(panels = [], delay) {
      setTimeout(() => {
        this.panels = panels;
      }, delay);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
