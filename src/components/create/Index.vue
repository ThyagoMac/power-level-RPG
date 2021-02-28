<template>
<div>
    <el-tabs type="border-card" tab-position="">
    <el-tab-pane>
        <span slot="label"><i class="el-icon-document"></i> New Character</span>
        <character />
    </el-tab-pane>
    <el-tab-pane>
        <span slot="label"><i class="el-icon-s-custom"></i> New Race</span>
        <race />
    </el-tab-pane>
    <el-tab-pane>
        <span slot="label"><i class="el-icon-s-cooperation"></i> New Class</span>
        <classe />
    </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
</div>
</template>

<script>
    import Character from './character/Character'
    import Classe from './class/Class'
    import Race from './race/Race'

    export default {
        components: { Character, Classe, Race }
    };
/* import BaseTemplate from "../BaseTemplate";

export default {
  name: "CheckpointsIndex",
  components: { BaseTemplate }
}; */
</script>
