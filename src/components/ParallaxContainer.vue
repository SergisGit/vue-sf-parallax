<template>
 <div class="parallax-container" @mousemove="getMousePosition" @mouseout="parallaxStop" @mouseover="parallaxStart">
     <slot></slot>
    </div>
</template>

<script>
import parallaxElement from "./ParallaxElement.vue";
import throttle from "../throttle";

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      hovering: false
    };
  },

  methods: {
    getMousePosition: throttle(function(e) {
      const children = this.$children.map(child => {
        if (child.$options.propsData.parallaxStrength != 0) {
          this.hovering = true;
        }
      });
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      if (this.hovering === false) {
        return;
      }
    }, 100),

    parallaxStart() {
      this.hovering = true;
      const children = this.$children.map(child => {
        child.isHovering = true;
      });
    },

    parallaxStop() {
      this.hovering = false;
      const children = this.$children.map(child => {
        child.isHovering = false;
      });
    }
  },
  mounted() {},

  components: {
    parallaxElement
  }
};
</script>

<style lang="scss" scoped>
.parallax-container {
  perspective: 1000px;
}
</style>