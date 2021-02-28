<template>
    <div>
        <h1>New Race</h1>
        <el-form ref="form" :model="race" label-width="15%" class="form-center mt-4">
            <avatar-image
                :avatar = race.url
                :avatarGalery = race.urlArray
            />
            <creat-header 
                :av = race
            />
            <creat-attributes
                :av = race
                :regen = true
            />
            <hr>
            <creat-bio 
                :av = race
            />
            <hr>
            <el-row :gutter="30" class="my-3">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Finish</el-button>
                    <el-button 
                        @click="race=newRace">Reset</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <!-- 
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
    
        <div>
            <el-row :gutter="30" class="my-3">
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" type="success" size="medium">HP</el-tag>
                        <el-input-number size="mini" v-model="race.hp" :min="-25" :max="25" :step="5" id="hp" :disabled=" totalPoints < 1 ? true : false" />
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Mana</el-tag>
                        <el-input-number size="mini" v-model="race.mana" :min="-25" :max="25" :step="5" id="mana" :disabled=" totalPoints < 1 ? true : false"/>
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Energy</el-tag>
                        <el-input-number size="mini" v-model="race.energy" :min="0" :max="5" id="energy" :disabled=" totalPoints < 1 ? true : false"/>
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" size="medium">Spirit</el-tag>
                        <el-input-number size="mini" v-model="race.spirit" :min="0" :max="5" id="spirit" :disabled=" totalPoints < 1 ? true : false"/>
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" type="warning" size="medium">Speed</el-tag>
                        <el-input-number size="mini" v-model="race.speed" :min="0" :max="5" id="speed" :disabled=" totalPoints < 1 ? true : false"/>
                    </div>
                </el-col>
                <el-col :sm="24" :md="4" class="my-1">
                    <div>
                        <el-tag class="tag-label" type="success" size="medium">Regeneration</el-tag>
                        <el-input-number size="mini" v-model="race.regen" :min="0" :max="10" :step="10" id="regen" :disabled=" totalPoints < 1 ? true : false"/>
                    </div>
                </el-col>
            </el-row>
            <h5> <a @click="race.speed = 0, race.energy = 0, race.spirit = 0, race.mana = 0, race.hp = 0, race.regen = 0"> Pontos Restantes:</a> {{ totalPoints }}</h5>
        </div>
        <el-row :gutter="30" class="my-3">
            <el-form-item label="BIO">
                <el-input type="textarea" v-model="race.bio"></el-input>
            </el-form-item>
        </el-row>
        -->
    </div>
</template>

<script>
    import AvatarImage from "../../shared/AvatarImage"
    import CreatAttributes from '../../shared/CreatAttributes.vue'
    import CreatBio from '../../shared/CreatBio.vue'
    import CreatHeader from '../../shared/CreatHeader.vue'

    export default {
        components: {
            AvatarImage,
            CreatAttributes,
            CreatBio,
            CreatHeader,
        },
        data() {
            return {
                race: {
                    name: '',
                    regen: 0,
                    speed: 0,
                    energy: 0,
                    spirit: 0,
                    mana: 0,
                    hp: 0,
                    bio: '',
                    url: '',
                    urlArray: [''],
                },
                newRace: {
                    name: '',
                    regen: 0,
                    speed: 0,
                    energy: 0,
                    spirit: 0,
                    mana: 0,
                    hp: 0,
                    bio: '',
                    url: '',
                    urlArray: [],
                },
                races: [],
                left_points: 10,
            }
        },
        methods: {
            onSubmit () {
                if (localStorage.getItem('races')) {
                    let upd = JSON.parse(localStorage.getItem('races'))
                    upd.push(this.race)
                    localStorage.setItem('races', JSON.stringify(upd));

                    this.race = this.newRace;
                } else {
                    this.races.push(this.race);
                    localStorage.setItem('races', JSON.stringify(this.races));
                    this.race = this.newRace;
                }
                console.log(localStorage.getItem('races'));
            },
            reloadUrl () {
                /* this.race.urlArray = []; */
                this.race.urlArray.push(this.race.url);
            }
            
        },
        computed: {
            totalPoints () {
                return (this.left_points - (this.race.speed + this.race.energy + this.race.spirit)) - ((this.race.hp/5) + (this.race.mana/5)) - (this.race.regen);                
            }
        },
    }
</script>