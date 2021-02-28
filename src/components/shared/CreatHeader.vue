<template>
    <el-row :gutter="30" class="my-1">
        <el-col :sm="24" :md="12">
            <div>
                <el-input placeholder="Name" v-model="av.name" id="name">
                    <label for="name" slot="prepend">Name</label>
                </el-input>
            </div>
        </el-col>
        <el-col :sm="24" :md="12">
            <div>
                <el-input placeholder="https://" v-model.lazy="av.url" @change="reloadUrl" id="url">
                    <label for="url" slot="prepend">Url</label>
                </el-input>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        props: {
            av: Object,
            default () {
                return {}
            },
        },
        methods: {
            reloadUrl () {
                /* this.av.urlArray = []; */
                if (this.av.url != '') {
                    this.av.urlArray.push(this.av.url);
                }
                this.av.urlArray = this.av.urlArray.filter(item => item !== '')
            }
        }
    }
</script>