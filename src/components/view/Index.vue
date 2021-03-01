<template>
<div>
    <el-tabs type="border-card" tab-position="">
    <el-tab-pane>
        <span slot="label"><i class="el-icon-document"></i> Chars</span>
        <h3>Table</h3>
        <Table 
            :itens="characters"
        />
    </el-tab-pane>
    <el-tab-pane>
        <span slot="label"><i class="el-icon-s-custom"></i> Races</span>
        <Table 
            :itens="races"
        />
    </el-tab-pane>
    <el-tab-pane>
        <span slot="label"><i class="el-icon-s-cooperation"></i> Classes</span>
        <Table 
            :itens="classes"
        />
    </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
</div>
</template>

<script>
    import Table from '../shared/Table'
    /* import CardShow from '../shared/CardShow' */
    /* import Classes from './classes/Classes'
    import Races from './races/Races' */

    export default {
        components: { Table, /* CardShow */ /* Characters,  Classes, Races */ },
        data() {
            return {
                characters: [],
                races: [],
                classes: [],

            }
        },
        beforeMount () {
            if (localStorage.getItem('races')) {
                this.races = JSON.parse(localStorage.getItem('races'))
            } else {
                //todo por as raças padroes aqui
                this.races = []
            }
            if (localStorage.getItem('classes')) {
                this.classes = JSON.parse(localStorage.getItem('classes'))
            } else {
                //todo por as raças padroes aqui
                this.classes = []
            }
            if (localStorage.getItem('characters')) {
                this.characters = JSON.parse(localStorage.getItem('characters'))
            } else {
                //todo por as raças padroes aqui
                this.characters = []
            }
        },

    };
</script>
