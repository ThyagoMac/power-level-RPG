<template>
    <el-menu
        :default-active="activeMenu"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="route in menuroutes" :key="route.title" :index="route.title">
            <router-link :to="route.path ? route.path : '/'">
                {{ route.title }}
            </router-link>
        </el-menu-item>
    </el-menu>

</template>

<script>
export default {
    data() {
      return {
        activeMenu: 'Home',
      }
    },
    props: {
        menuroutes: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    li a {
        padding: 20px;
    }
    .el-menu-item {
        padding: 0px !important;
    }
</style>