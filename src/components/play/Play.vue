<template>
    <div>
        <h1>-- Game Start --</h1>
        <h3>Pew pew PUSSHHH!!</h3>
        <h3>Ha!! Urgh...</h3>
        <h3>Floy! Furryah!</h3>
        <el-row :gutter="15" class="row">
            <el-col :sm="24" :md="6" class="mt-2 session">
                <p>
                    Payers: 
                </p>
                <div
                    v-for="char in sessionOne"
                    :key="char.id"
                >
                    <card-show    
                        :char="char"
                        @togglefight="toggleSession(char)"
                    />
                </div>
            </el-col>
            <el-col :sm="24" :md="6" class="mt-2 session-m">
                <p>
                    Left-Side
                </p>
                <div
                    v-for="char in sessionTwo"
                    :key="char.id"
                >
                    <card-show    
                        :char="char"
                        @togglefight="toggleSession(char)"
                    />
                </div>
            </el-col>
            <el-col :sm="24" :md="6" class="mt-2 session-m">
                <p>
                    Right-Side
                </p>
                <div
                    v-for="char in sessionThree"
                    :key="char.id"
                >
                    <card-show
                        :char="char"
                        @togglefight="toggleSession(char)"
                    />
                </div>
            </el-col>
            <el-col :sm="24" :md="6" class="mt-2 session">
                <p>
                    NPC
                </p>
                <div
                    v-for="char in sessionFour"
                    :key="char.id"
                >
                    <card-show
                        :char="char"
                        @togglefight="toggleSession(char)"
                    />
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import CardShow from '../shared/CardShow'

export default {
    components: { CardShow /* Characters,  Classes, Races */ },
    data() {
        return {
            characters: [],
            sessionOne: [],
            sessionTwo: [],
            sessionThree: [],
            sessionFour: [],
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
            this.characters.forEach(char => {
                char.session = 1;
            });
            this.reloadSession();
            
        } else {
            //todo por as raças padroes aqui
            this.characters = []
        }
    },
    methods: {
        toggleSession (char) {
            console.log('char-session', char.session);
            if (char.session == 1) {
                char.session = 2;
            }else if (char.session == 2) {
                char.session = 1;
            }
            this.reloadSession();
        },
        reloadSession () {
            this.sessionOne = []
            this.sessionTwo = []
            this.sessionThree = []
            this.sessionFour = []

            this.sessionOne = this.characters.filter(char => char.session === 1);
            console.log('one', this.sessionOne)
            this.sessionTwo = this.characters.filter(char => char.session === 2);
            console.log('2', this.sessionTwo)
            this.sessionThree = this.characters.filter(char => char.session == 3);
            this.sessionFour = this.characters.filter(char => char.session == 4);
        }
    },
}
</script>

<style scoped>
    .session {
        border: 1px solid #dcdfe6;
    }
    .session-m {
        border-top: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
    }
</style>