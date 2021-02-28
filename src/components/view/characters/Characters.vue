<template>
    <el-row type="flex" justify="center">
        <el-col :sm="24" :md="20">
            <el-table
                :data="itens"
                stripe
                style="width: 100%">

                <el-table-column
                    v-if="itens[0].bp"
                    prop="bp"
                    label="Power"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].name"
                    prop="name"
                    label="Name"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].regen >-1"
                    prop="regen"
                    label="regen"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].speed >-1"
                    prop="speed"
                    label="speed"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].energy >-1"
                    prop="energy"
                    label="energy"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].spirit >-1"
                    prop="spirit"
                    label="spirit"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].mana >-1"
                    prop="mana"
                    label="mana"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].hp >-1"
                    prop="hp"
                    label="hp"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].bio"
                    prop="bio"
                    label="bio"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].url"
                    prop="url"
                    label="url"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].has_rage"
                    prop="has_rage"
                    label="has_rage"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].classe"
                    prop="classe"
                    label="classe"
                    
                >
                </el-table-column>
                <el-table-column
                    v-if="itens[0].race"
                    prop="race"
                    label="race"
                    
                >
                </el-table-column>
                
            </el-table>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        props: {
            itens: Array,
            default () {
                return []
            }
        },
    }
</script>

<style scoped>

</style>