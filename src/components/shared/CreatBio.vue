<template>
    <el-row :gutter="30" class="my-3">
        <el-form-item label="BIO">
            <el-input type="textarea" v-model="av.bio"></el-input>
        </el-form-item>
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
    }
</script>