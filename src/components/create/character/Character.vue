<template>
    <div>
        <h1>New Character</h1>

        <el-form ref="form" :model="character" label-width="15%" class="form-center mt-4">
            <el-row :gutter="30">
                <el-col :sm="24" :md="12">
                    <div>
                        <el-input :span="8" placeholder="Name" v-model="input1" id="name">
                            <label for="name" slot="prepend">Name1</label>
                        </el-input>
                    </div>
                </el-col>
                <el-col :sm="24" :md="12">
                    <div>
                        <el-input :span="8" placeholder="Name" v-model="input1" id="name">
                            <label for="name" slot="prepend">Name</label>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            name: '',
                power: 1,
                speed: 1,
                energy: 1,
                spirit: 1,
                xp: 1,
                hp: 100,
                mana: 100,
                bio: '',
                url: '',
                aura: false,
                transform: 0,
                haveKaioken: false,
                kaioken: 0
            <el-form-item label="Names" for="names">
                <el-input id="names" v-model="character.name"></el-input>
            </el-form-item>
            <el-radio-group v-model="radio">
                <el-radio :label="3">Option A</el-radio>
                <el-radio :label="6">Option B</el-radio>
                <el-radio :label="9">Option C</el-radio>
            </el-radio-group>

            <el-form-item label="Power">
                <el-col :span="8">
                    <el-input-number v-model="character.power" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
                <el-col class="line" :span="8">Speed</el-col>
                <el-col :span="8">
                    <el-input-number v-model="character.speed" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>
            <el-form-item label="Skill">
                <el-col :span="8">
                    <el-input-number v-model="character.skill" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
                <el-col class="line" :span="8">Mental</el-col>
                <el-col :span="8">
                    <el-input-number v-model="character.mental" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>
            <el-form-item label="Expereince">
                <el-col :span="8">
                    <el-input-number v-model="character.experience" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>

            <hr>
            <el-form-item label="Buffs">
                <el-checkbox-group v-model="character.buff">
                <el-checkbox label="Fire Expert" name="buff"></el-checkbox>
                <el-checkbox label="Air Expert" name="buff"></el-checkbox>
                <el-checkbox label="Earth Expert" name="buff"></el-checkbox>
                <el-checkbox label="Water Expert" name="buff"></el-checkbox>
                <el-checkbox label="Flyer" name="buff"></el-checkbox>
                <el-checkbox label="Well Experienced" name="buff"></el-checkbox>
                <el-checkbox label="Combatent" name="buff"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <hr>
            <el-form-item label="De-Buffs">
                <el-checkbox-group v-model="character.debuff">
                <el-checkbox label="Fire Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Air Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Earth Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Water Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Bad Experiences" name="debuff"></el-checkbox>
                <el-checkbox label="Bad Combatent" name="debuff"></el-checkbox>
                <el-checkbox label="Easily to Drain" name="debuff"></el-checkbox>
                <el-checkbox label="Drainable" name="debuff"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <hr>
            <el-form-item label="URL">
                <el-col :span="8">
                    <el-input v-model="character.url"></el-input>
                </el-col>
                    <div class="demo-image__preview">
                        <el-image 
                            style="width: 15%"
                            :src="character.url">
                        </el-image>
                    </div>   
            </el-form-item>
            <el-form-item label="BIO">
                <el-input type="textarea" v-model="heroine.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
            </el-form>
</div>
</template>

<script>
    export default {
    data() {
        return {
            character: {
                name: '',
                power: 1,
                speed: 1,
                energy: 1,
                spirit: 1,
                mana: 0,
                hp: 100,
                class: '',
                race_id: '',
                aura: false,
                transform: 0,
                have_rage: false,
                rage: 0,
                bio: '',
                url: '',
            },
            heroine: {
                name: '',
                power: 1,
                speed: 1,
                skill: 1,
                mental: 1,
                experience: 1,
                buff: [],
                debuff: [],
                resource: '',
                desc: '',
                url: ''
            },
        }
    },
    methods: {
        onSubmit() {
        console.log(this.character);
        }
    }
    }
</script>
