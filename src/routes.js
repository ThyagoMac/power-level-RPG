import Home from './components/home/Home.vue';
import Character from './components/create/character/Character.vue';
import Race from './components/create/race/Race.vue';
import Class from './components/create/class/Class.vue';
import Play from './components/play/Play.vue';
import CreateIndex from './components/create/Index.vue';
/* 
import CreateAccount from './components/create-heroine/CreateHeroine.vue';
import CreateVillain from './components/create-villain/CreateVillain.vue';
import Game from './components/game/Game.vue';
import Heroines from './components/heroines/Heroines.vue'
import Villains from './components/villains/Villains.vue'
 */

export const routes = [
    { path:'', name:'home', component: Home, title: 'Home', menu: true, icon: 'el-icon-s-home' },
    { 
        path:'/create',
        name:'create',
        component: CreateIndex,
        title: 'Create',
        menu: true,
        icon: 'el-icon-s-order',
        children: [
            {
                path: '/create/character',
                name: 'createchar',
                component: Character,
                title: 'Create Character',
                menu: true,
                icon: 'el-icon-document'
            },
            {
                path: '/create/race',
                name: 'createrace',
                component: Race,
                title: 'Create Race',
                menu: true,
                icon: 'el-icon-s-custom'
            },
            {
                path: '/create/class',
                name: 'createclass',
                component: Class,
                title: 'Create Class',
                menu: true,
                icon: 'el-icon-s-cooperation'
            },
            
        ],
        
    },
    { path:'/play', name:'play', component: Play, title: 'Play', menu: true, icon: 'el-icon-position' },
    { path:'*', component: Home, menu: false }
    
    /*
    { path:'/create/character', name:'createchar2', component: Character, title: 'Create Character', menu: false },
    { path:'/create/race', name:'createrace', component: Race, title: 'Create Race', menu: false },
    { path:'/create/class', name:'createclass', component: Class, title: 'Create Class', menu: false },
    */
];
