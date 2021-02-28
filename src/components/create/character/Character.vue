<template>
    <div>
        <h1>New Character</h1>

        <el-form ref="form" :model="character" label-width="15%" class="form-center mt-4">
            <avatar-image
                :avatar = character.url
                :avatarGalery = character.urlArray
            />
            <creat-header 
                :av = character
            />
            <creat-attributes
                :av = character
            />
            
            <el-row :gutter="30" class="my-3">
                <el-col :sm="24" :md="12" class="my-1">
                    <el-select v-model="character.race" clearable placeholder="Select Race">
                        <el-option
                            v-for="item in races"
                            :key="item.name"
                            :label="item.name"
                            :value="item.name">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :sm="24" :md="12" class="my-1">
                    <el-select v-model="character.classe" clearable placeholder="Select Class">
                        <el-option
                            v-for="item in classes"
                            :key="item.name"
                            :label="item.name"
                            :value="item.name">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <hr>
            <creat-bio 
                :av = character
            />
            
            <hr>
            <el-row :gutter="30" class="my-3">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Finish</el-button>
                    <el-button 
                        @click="character=newCharacter">Reset</el-button>
                </el-form-item>
            </el-row>
        </el-form>
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
                character: {
                    bp: 1000,
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
                    has_rage: false,
                    classe: '',
                    race: '',
                },
                newCharacter: {
                    bp: 1000,
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
                    has_rage: false,
                    classe: '',
                    race: '',
                },
                raceName: '',
                classeName: '',
                characters: [],
                races: [],
                classes: [],
                left_points: 10,
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
        },
        methods: {
            onSubmit () {
                const race = this.races.filter(race => this.character.race == race.name)
                this.character.race = race[0]
                const classe = this.classes.filter(classe => this.character.classe == classe.name)
                this.character.classe = classe[0]
                if (localStorage.getItem('characters')) {
                    let upd = JSON.parse(localStorage.getItem('characters'))
                    upd.push(this.character)
                    localStorage.setItem('characters', JSON.stringify(upd));

                    this.character = this.newCharacter;
                } else {
                    this.characters.push(this.character);
                    localStorage.setItem('characters', JSON.stringify(this.characters));
                    this.character = this.newCharacter;
                }
                console.log(localStorage.getItem('characters'));
            },
            reloadUrl () {
                /* this.character.urlArray = []; */
                this.character.urlArray.push(this.character.url);
            },
            search (item) {
                return item
            }
        },
        computed: {
            totalPoints () {
                return (this.left_points - (this.character.speed + this.character.energy + this.character.spirit)) - ((this.character.hp/5) + (this.character.mana/5)) - (this.character.regen);                
            }
        },
    }
</script>