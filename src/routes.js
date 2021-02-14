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
    { path:'', name:'home', component: Home, title: 'Home', menu: true },
    { 
        path:'/create',
        name:'create',
        component: CreateIndex,
        title: 'Create',
        menu: true,
        icon: 'fas fa-shopping-cart',
        children: [
            {
                path: '/create/character',
                name: 'createchar',
                component: Character,
                title: 'Create Character',
                menu: true
            },
            {
                path: '/create/race',
                name: 'createrace',
                component: Race,
                title: 'Create Race',
                menu: true
            },
            {
                path: '/create/class',
                name: 'createclass',
                component: Class,
                title: 'Create Class',
                menu: true
            },
            
        ],
        
    },
    { path:'/play', name:'play', component: Play, title: 'Play', menu: true },
    { path:'*', component: Home, menu: false }
    
    /*
    { path:'/create/character', name:'createchar2', component: Character, title: 'Create Character', menu: false },
    { path:'/create/race', name:'createrace', component: Race, title: 'Create Race', menu: false },
    { path:'/create/class', name:'createclass', component: Class, title: 'Create Class', menu: false },
    */
];
