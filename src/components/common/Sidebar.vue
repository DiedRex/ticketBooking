<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :key="item.index" :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.index" :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-setting",
          index: "readme",
          title: "自述"
        },
        {
          icon: "el-icon-menu",
          index: "2",
          title: "用户管理",
          subs: [
            {
              index: "basetable",
              title: "人员管理"
            },
            {
              index: "vuetable",
              title: "客户管理"
            },
            {
              index: "vuetable",
              title: "角色管理"
            }
          ]
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "航班管理",
          subs: [
            {
              index: "baseform",
              title: "航班信息"
            },
            {
              index: "vueeditor",
              title: "航班票价"
            }
          ]
        },
        {
          icon: "el-icon-date",
          index: "4",
          title: "订单管理",
          subs: [
            {
              index: "baseform",
              title: "订单管理"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
