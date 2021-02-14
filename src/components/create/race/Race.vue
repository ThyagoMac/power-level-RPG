<template>
    <div>
        <h1>New Race</h1>

        <el-form ref="form" :model="race" label-width="15%" class="form-center mt-4">
            <el-row :gutter="30" class="my-1">
                <el-col :sm="24" :md="12">
                    <div>
                        <el-input placeholder="Name" v-model="race.name" id="name">
                            <label for="name" slot="prepend">Name</label>
                        </el-input>
                    </div>
                </el-col>
                <el-col :sm="24" :md="12">
                    <div>
                        <el-input placeholder="https://" v-model="race.url" id="url">
                            <label for="url" slot="prepend">Url</label>
                        </el-input>
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="30" class="my-1">
                <el-col :sm="24" :md="5">
                    <div>
                        <el-tag class="tag-label" type="success" size="medium">HP</el-tag>
                        <el-input-number size="mini" v-model="race.hp" :min="0" :max="5" id="hp" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5">
                    <div>
                        <el-tag class="tag-label" size="medium">Mana</el-tag>
                        <el-input-number size="mini" v-model="race.mana" :min="0" :max="5" id="mana" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="4">
                    <div>
                        <el-tag class="tag-label" size="medium">Energy</el-tag>
                        <el-input-number size="mini" v-model="race.energy" :min="0" :max="5" id="energy" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5">
                    <div>
                        <el-tag class="tag-label" size="medium">Spirit</el-tag>
                        <el-input-number size="mini" v-model="race.spirit" :min="0" :max="5" id="spirit" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5">
                    <div>
                        <!-- <el-input class="label-prepend" style="width: 1px; margin-left: -30.3px;">
                            <label for="speed" slot="prepend">speed</label>
                        </el-input> -->
                        <el-tag class="tag-label" type="warning" size="medium">Speed</el-tag>
                        <el-input-number size="mini" v-model="race.speed" :min="0" :max="5" id="speed" />
                    </div>
                </el-col>
            </el-row>

            <!-- <el-row :gutter="30" class="my-1">
                <el-col :sm="24" :md="12">
                    <div>
                        <el-tag type="success" size="medium">HP</el-tag>
                        <el-input-number size="mini" v-model="race.hp" :min="0" :max="5" id="hp" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="12">
                    <div>
                        <el-tag size="medium">Mana</el-tag>
                        <el-input-number size="mini" v-model="race.mana" :min="0" :max="5" id="mana" />
                    </div>
                </el-col>
            </el-row> -->
        </el-form>
</div>
</template>

<script>
    export default {
    data() {
        return {
            race: {
                name: '',
                speed: 0,
                energy: 0,
                spirit: 0,
                mana: 0,
                hp: 0,
                bio: '',
                url: '',

            },
        }
    },
    methods: {
        onSubmit() {
        console.log(this.race);
        }
    }
    }
</script>

<style scoped>
    .tag-label {
        width: 130px;
    }
</style>