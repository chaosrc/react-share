<template>
  <div>
    <input v-model="inputValue">
    <label>{{isCheck ? '是': '否'}}</label>
    <button @click="handleCheck"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      isCheck: false
    };
  },
  methods: {
    handleCheck() {
      this.isCheck = !this.isCheckk;
    }
  }
};
</script>
