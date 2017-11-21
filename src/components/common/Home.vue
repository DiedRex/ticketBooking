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
    margin-bottom: 1rem
  }
  .order, .message, .fare {
    .crumbs {
      margin-bottom: 0
    }
    .el-header {
      .timeRange, .position, .btn {
        display: inline-block
        margin-right: 1.25rem
        margin-top: 1.25rem
      }
    }
    .el-main {
      padding: 0
      .el-table {
        border-radius: .25rem
      }
    }
    .el-dialog {
      .el-dialog__body {
        padding: 25px 35px 0px 27px
      }
      .el-select, .el-date-editor {
        width: 100%
      }
      .el-form-item__content {
        display: flex
      }
    }
  }
}
</style>
