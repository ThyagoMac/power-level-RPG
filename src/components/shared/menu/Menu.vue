<template>
    <el-menu
        :default-active="activeMenu"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="route in menuroutes" :key="route.title" :index="route.title">
            <router-link
                :to="route.path ? route.path : '/'" 
                v-if="route.menu && !route.children"
            >
                {{ route.title }}
            </router-link>
            <el-submenu :index="route.title" v-if="route.children && route.children.length">
                <template slot="title">{{ route.title }}</template>
                <el-menu-item v-for="(routeChildren, indexChildren) in route.children" :key="indexChildren" :index="indexChildren.title +'-'+ indexChildren">
                    <router-link :to="routeChildren.path" class="text-dark">{{ routeChildren.title }}</router-link>
                </el-menu-item>
            </el-submenu>
            <!-- <a
                :href="route.path"
                v-if="route.menu && route.children"
                data-toggle="collapse"
            >
                <i :class="route.meta.icon" class="mr-1" v-if="route.meta.icon"></i>
                {{ route.title }}
                <i class="fas fa-chevron-down float-right"></i>
            </a> 

            <ul
                class="collapse"
                :id="route.name"
                v-if="route.children && route.children.length"
            >
                <div v-for="(routeChildren, indexChildren) in route.children" :key="indexChildren">
                <li class="nav-item" v-if="routeChildren.menu">
                    <router-link :to="routeChildren.path" class="text-dark">{{ routeChildren.title }}</router-link>
                </li>
                </div>
            </ul>-->
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
        color: inherit;
    }
    li a {
        padding: 20px;
    }
    .el-menu-item {
        padding: 0px !important;
    }

</style>