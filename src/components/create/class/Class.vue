<template>
    <div>
        <h1>New Class</h1>

        <el-form ref="form" :model="race" label-width="15%" class="form-center mt-4">
            <div class="demo-image__preview">
                <el-image 
                    style="width: 100px; height: 100px"
                    :src="race.url"
                    :preview-src-list="race.urlArray"
                    fit="cover"
                    lazy
                >
                    <div slot="placeholder" class="image-slot">
                        Loading<span class="dot">...</span>
                    </div>
                    <div slot="error" class="image-slot">
                        <i class="el-icon-picture-outline"></i>
                    </div>
                </el-image>
            </div>
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
                        <el-input placeholder="https://" v-model.lazy="race.url" @change="reloadUrl" id="url">
                            <label for="url" slot="prepend">Url</label>
                        </el-input>
                    </div>
                </el-col>
            </el-row>

            <el-row :gutter="30" class="my-3">
                <el-col :sm="24" :md="5" class="my-1">
                    <div>
                        <el-tag class="tag-label" type="success" size="medium">HP</el-tag>
                        <el-input-number size="mini" v-model="race.hp" :min="0" :max="25" id="hp" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Mana</el-tag>
                        <el-input-number size="mini" v-model="race.mana" :min="0" :max="25" id="mana" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Energy</el-tag>
                        <el-input-number size="mini" v-model="race.energy" :min="0" :max="5" id="energy" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Spirit</el-tag>
                        <el-input-number size="mini" v-model="race.spirit" :min="0" :max="5" id="spirit" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="5" class="my-1">
                    <div>
                        <el-tag class="tag-label" type="warning" size="medium">Speed</el-tag>
                        <el-input-number size="mini" v-model="race.speed" :min="0" :max="5" id="speed" />
                    </div>
                </el-col>
            </el-row>
            <hr>
            <el-row :gutter="30" class="my-3">
                <el-form-item label="BIO">
                    <el-input type="textarea" v-model="race.bio"></el-input>
                </el-form-item>
            </el-row>
            <el-row :gutter="30" class="my-3">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Finish</el-button>
                    <el-button 
                        @click="race={
                            name: '',
                            speed: 0,
                            energy: 0,
                            spirit: 0,
                            mana: 0,
                            hp: 0,
                            bio: '',
                            url: '',
                            urlArray: [],
                        }">Reset</el-button>
                </el-form-item>
            </el-row>
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
                    urlArray: [''],
                },
            }
        },
        methods: {
            onSubmit () {
                console.log(this.race);
            },
            reloadUrl () {
                this.race.urlArray = [];
                this.race.urlArray.push(this.race.url);
            }
        },
    }
</script>

<style scoped>
    .tag-label {
        width: 130px;
    }
</style>