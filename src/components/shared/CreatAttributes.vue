<template>
    <div>
        <el-row :gutter="30" class="my-3">
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" type="success" size="medium">HP</el-tag>
                    <el-input-number size="mini" v-model="av.hp" :min="-25" :max="25" :step="5" id="hp" :disabled=" totalPoints < 1 ? true : false" />
                </div>
            </el-col>
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" size="medium">Mana</el-tag>
                    <el-input-number size="mini" v-model="av.mana" :min="-25" :max="25" :step="5" id="mana" :disabled=" totalPoints < 1 ? true : false"/>
                </div>
            </el-col>
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" size="medium">Energy</el-tag>
                    <el-input-number size="mini" v-model="av.energy" :min="0" :max="5" id="energy" :disabled=" totalPoints < 1 ? true : false"/>
                </div>
            </el-col>
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" size="medium">Spirit</el-tag>
                    <el-input-number size="mini" v-model="av.spirit" :min="0" :max="5" id="spirit" :disabled=" totalPoints < 1 ? true : false"/>
                </div>
            </el-col>
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" type="warning" size="medium">Speed</el-tag>
                    <el-input-number size="mini" v-model="av.speed" :min="0" :max="5" id="speed" :disabled=" totalPoints < 1 ? true : false"/>
                </div>
            </el-col>
            <el-col :sm="24" :md="4" class="my-1">
                <div>
                    <el-tag class="tag-label" type="success" size="medium">Regeneration</el-tag>
                    <el-input-number size="mini" v-model="av.regen" :min="0" :max="10" :step="10" id="regen" :disabled=" !regen || totalPoints < 1 ? true : false"/>
                </div>
            </el-col>
        </el-row>
        <h5> <a @click="av.speed = 0, av.energy = 0, av.spirit = 0, av.mana = 0, av.hp = 0, av.regen = 0"> Pontos Restantes:</a> {{ totalPoints }}</h5>
    </div>
</template>

<script>
    export default {
        props: {
            av: Object,
            default () {
                return {}
            },
            regen: {
                type: Boolean,
                default: false
            },
            max_points: {
                type: Number,
                default: 10
            },
        },
        computed: {
            totalPoints () {
                return (this.max_points - (this.av.speed + this.av.energy + this.av.spirit)) - ((this.av.hp/5) + (this.av.mana/5)) - (this.av.regen);                
            }
        },
    }
</script>
<style scoped>
    .tag-label {
        width: 130px;
    }
</style>