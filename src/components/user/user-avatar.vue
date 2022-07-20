<template>
  <div class="flex justify-content-end align-items-center avatar">
    <BAvatar
      :label="letra"
      :style="`background-color: ${color}`"
      shape="circle"
      size="large"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      class="cursor-pointer"
    />
      <BMenu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      letra: localStorage.getItem("email").substring(0, 1).toUpperCase(),
      color: "",
      items: [
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            window.location.replace("/");
          },
        },
      ],
    };
  },
  mounted() {
    const number = Math.floor(Math.random() * 10);
    if (number === 0 || number === 1) {
      this.color = "#cf227a";
    } else if (number === 2 || number === 3) {
      this.color = "#4c7c00";
    } else if (number === 4 || number === 5) {
      this.color = "#0088e3";
    } else if (number === 6 || number === 7) {
      this.color = "#8e6900";
    } else {
      this.color = "#ff7700";
    }
  },
  methods: {
     toggle(event) {
            this.$refs.menu.toggle(event);
        },
  }
};
</script>

<style scoped>
.avatar {
  width: 90%;
  color: #ffffff;
}
</style>