<template>
  <div class="section">
    <div class="rel-v-center">
      <article class="container" v-bind:class="sectionClass">
        <div class="heading-primary">
            <h1
              class="heading-primary--main heading-primary--center entering-first"
              v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              Clients and <span class="lighten">&lt;projects&gt;.</span>
            </h1>
            <Carousel :slides="slides" :sectionStyle="sectionStyle"></Carousel>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import Carousel from '@/components/common/Carousel';

export default {
  name: 'Experiences',
  props:["sectionClass", "sectionStyle"],

  components:{
    Carousel
  },

  data() {
    return {
        slides:[{
          title:"Developer full stack",
          company:"remixjobs",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          date:"2016-2018"
        },{
          title:"Developer full stack",
          company:"le panier volant",
          content:"Chacune de ces classes sera préfixée avec le nom de la transition. Ici le préfixe v- est celui par défaut lorsque vous utilisez l’élément <transition> sans nom. Si vous utilisez par exemple <transition name=ma-transition> ",
          date:"2016-2018"
        },]
    }
  },

  mounted() {
  },

  methods: {

  }
};
</script>
<style lang="scss" scoped>

</style>
