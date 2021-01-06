<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="../../../assets/image/detail/check.png" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  border-radius: 50%;
  overflow: hidden;
}
img {
  margin: -2px;
}
.checked {
  background-color: red!important;
  border-color: red;
}
</style>