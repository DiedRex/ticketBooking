<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  components: {
    vHead,
    vSidebar
  }
};
</script>

<style lang="stylus">
.content {
  background: #f3f5f6
  .el-header {
    padding: 0
  }
  .el-table {
    border: 1px solid #d8dce5
    border-radius: 4px
  }
  .el-header {
    margin-bottom: 1rem
  }
  .el-col {
    // text-align: center
  }
}
</style>
