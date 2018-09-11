<template>
  <div id="home-container">
    <behind-scene ready="appReady"></behind-scene>
    <full-page-container ready="appReady"></full-page-container>
    <logo></logo>
    <Index></Index>
    <!--
    <Menu></Menu>
    -->

    <splash-screen v-bind:ready="appReady"></splash-screen>

  </div>
</template>

<script>
import {Mediator} from '@/Mediator';
import Logo from '@/components/common/Logo';
import Menu from '@/components/common/Menu';
import Index from '@/components/home/Index';
import BehindScene from '@/components/home/BehindScene';
import SplashScreen from '@/components/common/SplashScreen';
import FullPageContainer from '@/components/home/FullPageContainer';

export default {

  name: 'Home',

  components: {
    Menu,
    Logo,
    Index,
    SplashScreen,
    BehindScene,
    FullPageContainer,
  },

  mounted() {
    this.appReady = true;
  },

  data() {
    return {
      splashScreen: 'running',
      appReady:this.appReady,
    };
  },

  methods: {
    splashScreenDone: function () {
      this.splashScreen = 'done';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
