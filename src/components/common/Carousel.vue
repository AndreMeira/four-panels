<template>
  <div class="container-text-center">
    <div class="slide-container">
      <transition :name="reverse ? 'slide-reverse' : 'slide'">
        <div
          :class="{reverse}"
          v-for="(slide, i) in slides" v-if="currentIndex == i" :key="slide.company">
          <div
            class="entering-second"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <div class="brand-icon"></div>
          </div>
          <div
            class="entering-third"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
            <p class="heading-primary--sub">{{slide.content}}</p>
            <h2 class="title"><span class="title">{{slide.title}}</span><span> - {{slide.company}}</span></h2>
          </div>
          <div
            class="entering-fourth"
            v-bind:style="{transform: 'translateY('+sectionStyle.translate+'vh)', opacity: sectionStyle.opacity}">
              <p class="date">{{slide.date}}<p/>
          </div>
        </div>
      </transition>
      <div class="control">
        <span @click="previous"></span>
        <span @click="next"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["enabled", "slides", "sectionStyle"],

  name: 'Carousel',

  mounted() {
  },

  data() {
    return {
      reverse:false,
      currentIndex:0,
    };
  },

  methods: {

    /**
     *
     */
    previous() {
      this.reverse = true;

      let index = this.currentIndex === 0
        ? this.slides.length
        : this.currentIndex;

      this.currentIndex = index - 1;
    },

    /**
     *
     */
    next() {
      this.reverse = false;
      let index = this.currentIndex === this.slides.length - 1
        ? -1
        : this.currentIndex;

      this.currentIndex = index + 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .brand-icon {
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: solid 1px #aaa;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 2rem;
    background-color: #596984;
    opacity: .3;
  }

  .title {
    font-size: 2rem;
  }
  .date {
    font-size:1.5rem;
  }

  .control {
    position: absolute;
    top: 15px;
    font-size: 2.5rem;
    width: 100%;

    span {
      margin:0 10rem;
      display: inline-block;
      position: relative;
      width:5rem;
      height: 5rem;

      &:after {
        content:"";
        border-bottom:solid 1px black;
        position: absolute;
        top: 50%;
        left: 0;
        width: 5rem
      }



      &:before {
        content: "";
        border: solid 1px black;
        transform: rotate(45deg);
        position: absolute;
        top: 41.3%;
        left: 2px;
        width: 1rem;
        height: 1rem;
      }

      &:first-child {
        &:before {
          border-top: none;
          border-right: none;
        }
      }

      &:last-child {
        &:before {
          left: inherit;
          right: 2px;
          border-bottom: none;
          border-left: none;
        }
      }
    }
  }

  .control:hover {
    cursor: pointer;
  }

  .slide-container {
    position: relative;
    min-height: 30rem;
    overflow: hidden;
  }

  .slide-enter-active,
  .slide-leave-active,
  .slide-reverse-enter-active,
  .slide-reverse-leave-active {
    transition:transform .5s, opacity .5s;
  }

  .slide-enter-active, .slide-reverse-enter-active {
    top:0;
    left:0;
    position:absolute;
  }

  .slide-leave-to {
    --transform:translateX(100%);
  }

  .slide-enter {
    --transform:translateX(-100%);
  }

  .slide-reverse-leave-to {
    --transform:translateX(-100%);
  }

  .slide-reverse-enter {
    --transform:translateX(100%);
  }

  .slide-enter,
  .slide-reverse-enter,
  .slide-leave-to,
  .slide-reverse-leave-to {
    opacity: 0
  }
</style>
