import Home from './components/home/Home.vue';
import Character from './components/create/character/Character.vue';
import Race from './components/create/race/Race.vue';
import Class from './components/create/class/Class.vue';
import Play from './components/play/Play.vue'

/* 
import CreateAccount from './components/create-heroine/CreateHeroine.vue';
import CreateVillain from './components/create-villain/CreateVillain.vue';
import Game from './components/game/Game.vue';
import Heroines from './components/heroines/Heroines.vue'
import Villains from './components/villains/Villains.vue'
 */

export const routes = [
    { path:'', name:'home', component: Home, title: 'Home', menu: true },
    { path:'/create/character', name:'createchar', component: Character, title: 'Create Character', menu: true },
    { path:'/create/race', name:'createrace', component: Race, title: 'Create Race', menu: true },
    { path:'/create/class', name:'createclass', component: Class, title: 'Create Class', menu: true },
    { path:'/play', name:'play', component: Play, title: 'Play', menu: true },
    { path:'*', component: Home, menu: false }

    /* 
    { path:'/heroines', name:'heroines', component: Heroines, title: 'Eco-Heroines', menu: false },
    { path:'/villains', name:'villains', component: Villains, title: 'Villains', menu: false },
    { path:'/game', name:'game', component: Game, title: 'GAME', menu: false },
    { path:'/createheroine', name:'createheroine', component: CreateAccount, title: 'New Heroine', menu: false },
    { path:'/createheroine/:id', name:'alteraheroine', component: CreateAccount, title: 'Alterar', menu: false },
    { path:'/createvillain', name:'createvillain', component: CreateVillain, title: 'New Villain', menu: false },
    { path:'/createvillain/:id', name:'alteravillain', component: CreateVillain, title: 'Alterar', menu: false }, 
    */
];
