<template>
    <div class="image__preview">
        <el-image 
            style="width: 100px; height: 100px"
            :src="avatar"
            :preview-src-list="avatarGalery"
            fit="cover"
            lazy
        >
            <div slot="placeholder" class="image-slot">
                Loading<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
            </div>
        </el-image>
    </div>
</template>

<script>
    export default {
        props: {
            /* tipo: {
            type: String,
            default: ''
            }, */
            avatar: {
                required: true,
                type: String
            },
            avatarGalery: Array,
            default () {
                return []
            }
        },
    }
</script>