<template>
  <full-page id="content" class="full-page" :options="options">
    <Introduction
      :sectionClass="sections[0]"
      :sectionStyle="sectionsStyle[0]"
      :active="currentIndex === 0"></Introduction>

    <Skills
      :sectionClass="sections[1]"
      :sectionStyle="sectionsStyle[1]"
      :active="currentIndex === 1"></Skills>

    <MoreThanCode
      :sectionClass="sections[2]"
      :sectionStyle="sectionsStyle[2]"
      :active="currentIndex === 2"></MoreThanCode>

    <GrowTogether
      :sectionClass="sections[3]"
      :sectionStyle="sectionsStyle[3]"
      :active="currentIndex === 3"></GrowTogether>

    <GetInTouch
      :sectionClass="sections[4]"
      :sectionStyle="sectionsStyle[4]"
      :active="currentIndex === 4"></GetInTouch>

  </full-page>
</template>

<script>

import {Mediator} from '@/Mediator';
import Introduction from './slides/Introduction';
import MoreThanCode from './slides/MoreThanCode';
import GrowTogether from './slides/GrowTogether';
import GetInTouch from './slides/GetInTouch';
import Skills     from './slides/Skills';
import FullPage from 'vue-fullpage.js/src/FullPage';
import fullPageMixin from 'vue-fullpage.js/src/fullPageMixin';

export default {
  name: 'full-page-container',

  components: {
    FullPage,
    Introduction,
    MoreThanCode,
    GrowTogether,
    GetInTouch,
    Skills
  },

  mixins:[fullPageMixin],

  data() {
    return {
      currentIndex:0,
      options: {
        afterLoad: this.afterLoad,
        onLeave: this.onLeaveSlide,
        fitToSectionDelay: 2000,
        touchSensitivity: 30,
        // scrollingSpeed: 1000,
      },

      sections: Array(4).fill('down'),
      sectionsStyle: Array(4).fill({translate:'15', opacity:0}),
      // sectionsStyle: Array(3).fill({translate:'0', opacity:0}),
    }
  },

  mounted() {
    setTimeout(() => {
        this.setSection(0, 'down entering');
        this.setSectionStyle(0, {translate:'0', opacity:'1'});
    }, 2300);
  },

  methods: {
    /**
     *
     */
    setSection(index, value) {
      let sections = this.sections.concat([]);
      sections[index] = value;
      this.sections = sections;
    },

    /**
     *
     */
    setSectionStyle(index, value) {
      let sections = this.sectionsStyle.concat([]);
      sections[index] = value;
      this.sectionsStyle = sections;
    },
    /**
     *
     */
    afterLoad(anchorLink, index) {
      this.currentIndex = index - 1;
      Mediator.$emit('page-scroll', {
        status: "loaded",
        index: index -1
      });
    },

    /**
     *
     */
    onLeaveSlide(index, nextIndex, direction) {

        this.currentIndex = null;

        this.setSectionStyle(index - 1, {
          opacity:0,
          translate: direction == 'down' ? '-15' : '15'
        });

        this.$nextTick(() => {
          this.setSection(index - 1, direction);
        });

        setTimeout(() =>  {
          this.setSectionStyle(nextIndex -1, {
            opacity:1, translate: 0
          });
          this.setSection(index - 1, direction == "down" ? "up" : "down");
        }, direction !== "up" ? 300 : 100);

        Mediator.$emit('page-scroll', {
          status: "leaving",
          direction,
          index: index -1,
          nextIndex: nextIndex -1
        });
    }
  }
};
</script>
