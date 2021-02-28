<template>
    <div>
        <h1>New Class</h1>

        <el-form ref="form" :model="classe" label-width="15%" class="form-center mt-4">
            <avatar-image
                :avatar = classe.url
                :avatarGalery = classe.urlArray
            />
            <creat-header 
                :av = classe
            />
            <creat-attributes
                :av = classe
            />
            <hr>
            <creat-bio 
                :av = classe
            />
            <hr>
            <el-row :gutter="30" class="my-3">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Finish</el-button>
                    <el-button 
                        @click="classe=newClasse">Reset</el-button>
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
                classe: {
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
                newClasse: {
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
                classes: [],
                left_points: 10,
            }
        },
        methods: {
            onSubmit () {
                if (localStorage.getItem('classes')) {
                    let upd = JSON.parse(localStorage.getItem('classes'))
                    upd.push(this.classe)
                    localStorage.setItem('classes', JSON.stringify(upd));

                    this.classe = this.newClasse;
                } else {
                    this.classes.push(this.classe);
                    localStorage.setItem('classes', JSON.stringify(this.classes));
                    this.classe = this.newClasse;
                }
                console.log(localStorage.getItem('classes'));
            },
            reloadUrl () {
                /* this.classe.urlArray = []; */
                this.classe.urlArray.push(this.classe.url);
            }
            
        },
        computed: {
            totalPoints () {
                return (this.left_points - (this.classe.speed + this.classe.energy + this.classe.spirit)) - ((this.classe.hp/5) + (this.classe.mana/5)) - (this.classe.regen);                
            }
        },
    }
</script>