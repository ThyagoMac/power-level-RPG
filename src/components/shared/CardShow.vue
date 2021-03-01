<template>
    <div class="corpo">
        <!-- <div class="container"> -->
        <div class="card">
            <div class="imgBx">
                <el-row :gutter="0" class="row">
                    <el-col :sm="24" :md="6" class="mt-2">
                        <avatar-image
                            :avatar = char.url
                        />
                    </el-col>
                    <el-col :sm="24" :md="16" class="ml-2">
                        <span style="float:left">HP</span>
                        <el-progress class="mb-1" :text-inside="true" :stroke-width="20" :percentage="90" status="success"></el-progress>
                        <span style="float:left">MP</span>
                        <el-progress class="mb-1" :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
                        <span style="float:left">Turn</span>
                        <el-progress class="mb-1" :text-inside="true" :stroke-width="20" :percentage="80" status="warning"></el-progress>
                    </el-col>
                </el-row>
                
                <!-- 
                <img src="@/assets/sketch.png" alt=""> -->
                
            </div>
            <div class="content">
                <div>
                    <h3>{{char.name}}</h3>
                    <p>Texto ou algo interessante - {{char.session}}</p>
                    <a class="mx-1" href="#">Ac1</a>
                    <button class="mx-1" @click="char.name=1">Ac2</button>
                    <button class="mx-1" @click="toggleFight(char), char.session = 2">Ac3</button>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </div>
</template>

<script>
import AvatarImage from "@/components/shared/AvatarImage"
export default {
    components: {
        AvatarImage,
    },
    props: {
        /* tipo: {
        type: String,
        default: ''
        }, */
        avatar: {
            required: false,
            default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhMTEBMSFhIXFhcXFRMXFhUVFxoVGBYZGB8YFhsYHSggGB4lGxYVIjMhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQGy8lICUtLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYCCAH/xAA7EAABAwIDBAgEBQMEAwAAAAABAAIDBBESITEFBkFxBxMiUWGBkaEyQnKxFCNSwdGy4fAzNGKCY5Ki/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADIRAQACAgAEAgkEAgIDAAAAAAABAgMRBBIhMUFRBRMiMkJhcZGhgbHR8BTBI1Iz4fH/2gAMAwEAAhEDEQA/ALxQEBAQEBAQEBAQEGOedjBie5rWjiSAPdRtatY3adOTMR3cttXf+kiyZikOemTctcz/AAsluNp8Mb/Cm3EVjt1Qp6TiT2YW28XG/wBlV/m3/wCsfdXPEz5JGi6RoHf6kUjPEEOHvZWRx1fihKOJr4w6bZe2qeoH5MgJGrdHDmDmtOPNTJ7srq3rbtKQVqYgICAgICAgICAgICAgICAgICAgICAgw1lUyJjpJDZjQST4BRvaK1m0uTMRG5UtvNvPJUvc65DbnAy+TW/z4rxslrZb81u3hHkwXvN5cpUknip1ch+RvXZcmGxHMRxUJqjMN2kr3MILSQRxGqrmvk527LE3U35JIjqnAt0EnEfV3jx+614eLtWYrk7ef8tOLiJ7WWC03zGnevTbH6gICAgICAgICAgICAgICAgICAgICDgulTaBbHHCD8V3uHgMhfzxHyXncdk61p+v8M3EW7Qqhzslmhmarypwk3aahJzdl4cVVbJrshNm6KNg1HncqvnshzSxvoB8p8jouxk8zmYmktJBuCpdzusro33kc4/hpTcW/LJ1BHy8u7lbuWvhM0xPq7dvD+Gvh8k75Z/RYa9JrEBAQEBAQEBAQEBAQEBAQEBAQEBBXHSBSGSsiY/4Czh+kYifdeD6UyTjvN48o192bJXmyREqqkcfRXQoZ4AGN6x+Q4ZEnPQAcSTwCjMTe3JVHU2nUOh2du7WzWccFMw6YwZJSPoBAZ5knwW/H6Nj45+yyMdY79WxUbAoov8Ad7RffuM0MPoGgFao4PBX4UorHhVig2JRzG1FtIl/6HSRzg825P8AQhLcHgv4fYmseNWvtPZs8OEVLBmQ1s7DeMk5Brr5xk8Acr2AJK8zPwNsMTavWPypti11qx7IqHQyskGrXA200IPlosm9TEx4dUItqdrw2RtJlRE2WPQ6g6gjUFe3iyxkrzQ9Ol4vG4bqsSEBAQEBAQEBAQEBAQEBAQEBAQEHAb+zhlSHH5aZxHPE5fP+l6zfJWvnr95U2nV9/JUgHA5DifDvV/0ZXSbIpo4WCvrAQG/7WG3aJOTXYeMjuA+Ud2dvV4bBXBTnv38VkV1HLHfxYa6rqKo3qHOZHwp43Frbf+VwsZD4fD4HVYeI9I2t0x9I80LZIjpX7vFPQQsFmRxt5NaP2XnWyXt3mVM3tPeXueiieLSRscO4tBXK5L1ncS5F7R2l6/CZBhknMYcHCJ0r3MxNNxk4nIEA20yCvnjc00msyn662nmujscQ4681TSdxpVDuOjTaVnuhJycLj6h/Iv6BbOBycuSaT4/u18LfryrEXrtogICAgICAgICAgICAgICAgICAgrHpZkBljaPiEdyfAuNh7H1XlcbMetj6MnET7UK1njJ7IsTlkfhOejvA6HmoY7xWYtPgqpOp2mKqrlqJRNUBrcIIiiaS5rL6uuQMTjpewsMhxvPi+L9dHLXsXvGtVZg5eepeguDxVVTY24nmw00uSTkA0DMkngpUx2vPLV2tZtOoSuzd2NozgPd1VKw5tbI0yy2/5NaQ1nLET3r0qcBSPenf0aq8NWO8ve1d06+JhN4qlozIja6KUW4ta5zmv5XB7r6LtuBp3pOvq5bhq/Cj929oYZGSNPwuBHC9jmD7hYL7xXiZ7wzxuluq8mOBAI0IuF78TuNvUfq6CAgICAgICAgICAgICAgICAgIKq6X4C2aKX5Xx4PNjifs8ehXncXT/ki3y/b/AOsuevtRKvoXdtvMLNaPZUN98zjIIoo3yyuzbGwAm36nE5Nb4khRxYLZO3Z2mObJRm7W1LX6in+n8QcX9GH3Wn/Cr/2/C3/HjzaPXuZJ1VRG+GbUMeB2gOLHAlrxyKy5uGvj694U3w2r18E1uTs9s9bJK8XZShojbw6+QYi/m1lgPrK28HjiuPm8ZaMFdV35rMaVrXMjUFd767KFPUtnjAEc5OMDQTAXuPraCebCeKxcdi5q87NxFOnM7/c+v62mbf4mHAfEAAg+hHoruBy8+LU+HRdgvzUTi2LhAQEBAQEBAQEBAQEBAQEBAQEHO7+7FNVSPa0XkZ+ZH3ktBu3zaSOdlTnx89OndXkrzVULE7Q8QV5k9WNZvR3QMZStm1lqPzXu44Sew3wDWWFu+54r0K1isRWPBsiIiNOsBU3UbvHsWKshdFLkdY5B8Ucg0e08CD6i4Qcb0R1rsddDLYTNka5w4EtHUut4B0f/ANBK0ikRWHIrFY1Cy2lddR+wtiR03W9W6RxlkMjsbsVnO4NGjR4JMiN6RyPwgPETw254rG3/AFLlVn/8dvohl9yXvozqr9bGe5rh7g/cLJ6Otq1q/qp4S3eHdr1WwQEBAQEBAQEBAQEBAQEBAQEBAQUN0gbKFNWStA7D/wAxnJ5Nx5ODhyC8vNTlyTH6seSurOs6P6rHRRDjHiiI7sDjh9WYD5rXE7iJaIncbS2zaedkk7pphJG94MLMGExttm0n5uClt1JAoKZjrJBUzVlLYSfiZ3MB+GSIvwljvB2G9+BsVnyZ+TLqe2o2pvl5b6nssrd3fSlqbNLupn+aCUhrwf8AjfJ48WrTGpjcdYXd+sOgqa2ONpfK9jGAXLnODQBzOS6K03w3lbWPibBf8LE4u60ggSy4S0YL5ljWud2tCSLaLLxWWIrNI7yoz3iI5Y7ynujKoBnyOTojbxzDvssvBbrn1PlP+lfDdLzErOXstwgICAgICAgICAgICAgICAgICAgrDpmps6aQDMiRhPLCR93LDxkdayz547S4zdLbn4SYmS/4eS3WnXA4aS5cLZO8LH5VHBePdn9HMVvhWmythLMYljLLXxh7cNu+97LTqVzid6t8WSsdT0Dy4u7MlS34GNOojd87zpcZDW6hkyVxRue/khe8Vjq5PZMwdEwgBoF2ho4YXFv7Lzc9dXlkyxq0timfDUNONjXAOc0h4BzabKu8Xwz0n59PmjPNjnpLy6gp43dmiL7ZhzWxuF+4Y3i3opxly3jrk19/9QnF72jrZl2gyaaMh0fVRNGIi4fK4D5QGXDQR4k8LBRxzTHbpO7faPy5XlrPSdz+HWdG8zTUxFhBaQ4C30nL+ynw/NXiKxPz/Z3DExl1K2l7j0BAQEBAQEBAQEBAQEBAQEBAQEBBw3S7EDSRu4tmHoWP/gLJxkexE/NTn91VFL8bfP7Febb3WSUbLRNY7CYIJHE9l12NcfqaRr4jXwWiLzaN80x913NuN7mG5RtlxAvwMbbKNmfq429AFTkmmvZ3M+cqr8vh1nzYNkzBrZGuIGCSS98rAuLgeVirM9ZmYmPGIdyxMzEx4xDY3bddj36NfK97fpLtfZV8VHtRXyiIcz94jyiG5JtxgkZGHMbjcWmaQlsDCBc4nAG5GXZH6hci67g4G2TrbpDuPh5t1npDmpt6aoPdhkYWhxAIYA1wBsCA65AIF9eK3/4GDWtflpjhsfk7joq2kJKyM2DXFxD2jQuwEhzebQ4H6QqJwTjzUjw30/hCMfJeI+y9l6TSICAgICAgICAgICAgICAgICAgIOc6QqYPoJ+9oa8f9XA/a6o4mN4pV5Y3WXz/ALWqcA1Iyu4g2NshhB4EkjPuusOCnNLPiruWHdqaNzKl8k1PA6JrXsa6PE6S+IFrTiDi7Jo4/Et1+GreOsz92m2OJjrMpqWmqmQU9S9kHV1BiEQEpxl0tsLbOYBxN8+BWeeB8pUzw3zNqbsT9fBHPSw9dMXCPFKyziwAkEjw7wp04bLSNRfolXFevSLMG02dV+Mp6udlNNDFeKKMF3WuLA5obIQLDMDCGg+Klj4OlZ3brLtcFYnc9XM7S2/PUQ09O8RiOAERtjjDSb2GJ9tTlwA1K19miKzadR1aLmOb8TXDmCPuubieyV8d6e9WY+sTDpuj+sdFWRObfJzTbvs4ZemIeao4npWLR4Soydol9RtPl4K9N+oCAgICAgICAgICAgICAgICAgIIzeeHHR1LRqYZLc8Bt7qvNG8do+Uo3jdZfMu8Iu240I/pN/sSfJY+FnUqMHSXLkr0Gpty7TncyJjpXlkOcLScmG9+z5oJLeTe6qrXwyTOa10I/LMYLLOuCX6k4rtbppZd24ia6skmkdJM9z5HZue43JsAPsAPJHUjQbb6pgaIxlxva/iclRfDzTvb3eD9NRw2GMcY46eO9b/CTo9ssl7D2kZXPzNsNScsh4nJV2w2r1rL1OH9NcPxP/Hmrrfn1hv7B2e2OsiLfhL2Zd15AT5YWvPkoZcu8fV8/wCnOEx8LliMc9J668v/AF5PptbXmiAgICAgICAgICAgICAgICAgICDX2h/pSfQ7+krluzk9nzIYbsaDrb0OuS8qttTuGLm1O3O1uzXA5AX/AE8D9Hf9Oo8V6FMsTH9/P8tdckTDZi3YqHMgdF1UnXPEbWMka57JCLhkzcjGbAnuFjdXfNYkaLo92hLLURCNgkgDcbXPAxYwS3qzazrga5DvzQbFB0d1M1E6rjczE0yB1MQ4SDqnFrhfTF2T2bea6MtRuPHFTUlXJVRObIYHSwZMf1UhaT1ZxEvIa7PIcTwsnhtx2gqqanldNsenETXROilfIxzYnC4LXRxuIeXAjO+FpDuNljzcbjx9I6z8v5U3z1q0t1dlA1MQzJc9oJsBkSC7IZDTQWAAAAAC862Wc14rPjLNOW+a8c0/2P4XuvcbxAQEBAQEBAQEBAQEBAQEBAQEBB4mcA1xd8IBvytmkj5jneLg8D7LxqR0efD3CGk2cA5jsiCLjzXbbjrHcmZjrD3LsBhIc1z2uGhNn25FwxDyKV4u1f7pKM9obVDs+ZrnOdUzm4Au2WeN1hewJEhuBc2HC5712/H317PT8/6dniJ8GzHQNF+1M4OJc4GaYguOpcC6xJ7zqqp43NPxITnv5t6g2ZEz/TjjaTqWtA91kyZr296ZlXa1rd5eqma/ZHwj3K5WuusoOg3EjvWRj9OI+jT/ACtPCRvPX++C7h4/5IWsvfeiICAgICAgICAgICAgICAgICAgIILfmr6qgqXA2JYWA+MhDMv/AGVWe3LjmUMk6rL5646+AP7Fed4Mb9wnkU3DiYpam7QSDfj5LLemp1CuYbcMrXaFVTEwiztB8FCXNvNZO4ANGp1t3LtKxPU2wwDNTs5LvejijvK+Tg1lhzcf4BWr0dXeWZ8o/dq4WvWZWEvabhAQEBAQEBAQEBAQEBAQEBAQEBBX/TDtIMp44PmkfiP0x9//AGcz0Ky8Xb2Yr5qc89NKXfcuJabFZY6R1Z4l6jmPwyDkQk18akx5JmiDhGCO03PTOyyZNTbqpt36tqnnYc8gVXasw5pvROb3qqduaaEkmJxJ8uStiNRolngvwHmo2RWj0eRWhkd3uA9B/dej6Lj2bT8/7+7fwsey6xeo0iAgICAgICAgICAgICAgICAgICCk+lnaQmqyxhJbC0Rn683Ot6tHNpXncRbeT6Mma27OEjZY8VCZVzLN1QI0UObTm9JWhpnMaLE9581nyXi09Vc222+qDtQL/qHZPnwKq3Mdkfox1cLmsOpGWfHVSpaJsRPVrUQdxGXcVO+nbaTUQsCTwBPos09Z0h4rT3Bpyyiivq7E8+ZP7AL3uDrrHvzmf4enhjVHQrUtEBAQEBAQEBAQEBAQEBAQEBAQau1K9kET5pDZjBc957gPEmwHNRvaKxMy5MxEbl85bSrTJJJIcnPkc48c3Ek+5K8rUzO58erDPfbRaDfUqU9nG/s+LE6x0Gf9lTknUI26JxiySqe8F+C5seatnYPMJSfaIYKcFSsSlKeIOyIyKpm0x1gr3XJs+DBFGz9LGj0C+nw05Mda+UPWrGo02FY6ICAgICAgICAgICAgICAgICAgrLpc2ucUdK09kDrJPEkkNHlZx8wsHGX6xT9WbPb4VTTNu4271VE9FLIG2Ud7cSuyQMJ5rNm7q7pRizyg2GBRlxknjux3K/pmo1n2odasDVO0uS6Hdqj6yaNve4E8hmfYJhp6zLWvzW4a7tC1l9Q9MQEBAQEBAQEBAQEBAQEBAQEBBjqJmsa57yA1oLnE6AAXJ9FyZiI3JM6UBvPtb8VUyz2sHHst7mtAaL+NgDzJXkZL89pswXtzW2hMKbcfuFNuJDZYzd5KjL2QslQFnQZmKMjPM7sO5W9clXHvDBTRqdpcd9uFQ5ulIyAwt5nM+1vVb/ReLd5yT4dG3hq/E7Re21iAgICAgICAgICAgICAgICAgIK76WduFrWUkZsXjHIf+FyGt8yCT9I71i4vJ2pH6s+e3wqrKxMzFhUh7auSJTZTMnHy/wA9VnzT4IWlJtas8yiyNauOMFRNiNhoPcqUV0S3KKNVXkiNrd2PRiKFjOIHa+o5n3X03DYvVYor9/q9WleWsQ3VekICAgICAgICAgICAgICAgICD8c4AXOgQUBvftZ1VPLLwN2sHcwXDfbPmSvHtk58nNPb/TBa3NbbnaKMtbnqTop5bRaehedyzNVaLYjjJyGqhM66o7TVLFhAH+XWW1tztXttsaq5kYq1xDcuJsu07utemap3lyXXbo0BknZl2WnE7kP5Ngu8Ji9bmiPCOsr8FN2WcvpXoCAgICAgICAgICAgICAgICAgIIneyq6qjqXg2IidY9xIwi3qqs8zGO2vJC86rL5/x3FxoV5OtdGHWngroNaky5KZ2XTWGI6nTksuW/XSuZSAiVO3GZjFGZdR9bLidYaD3KupGoGWjZcqF51Di291NmdTALjtvs537DyH3K9zgcHqse57z3elhpy1TS2rRAQEBAQEBAQEBAQEBAQEBAQEHL9JQcaCXCcrsxfTjH74Vm4uZjH084/dVm91SEUeFoHcvOtbmttlmdzsRFmpYruA71C86jaMujjCxSgzWUBjqpcLctTkFKkbkR8bLq2ZcdnuPsPrJBI8flsPHRzuA8bany71p4Lh/W3557R+ZaeHx7nmlZK91uEBAQEBAQEBAQEBAQEBAQEBAQEGpteiE0EsR+djm8iRkfI2PkoZK89Zr5uWjcafPdTE5ji1wIc0kEdxBsQvFjylgYFIb2zGXd5KrLPRCU2wLJKLO0KAjauS5LvlaFfSPBzukNzd3qirkxuuyEfEbezRxPittOHjL7Nf1n++LRTDFlxUdKyJjY2CzWiwH8+K9fHjrjrFa9obYiIjUMym6ICAgICAgICAgICAgICAgICAgICCr+lLd7C78VGOy8gSgcH8HcjpzA7153F4uWeePHuzZqfFCt7LMoSex/iPL91nzdkJTjMhmssuNeeoLuy3Tif4Uq111lx0m7u580pDpgY4tc8nOHgOHM+63YeCvkndukflfjwTPWeyx6SmZG0MjaGtGgH+ZnxXs0pWleWsdG2IiI1DMpuiAgICAgICAgICAgICAgICAgICAgIMVVTskY5kjQ5jgQ5p0IK5asWjUuTG1WbwdHMzXF1N+ZHfIXAeB3EHJ3Mei83Jwt6+71j8s18Mx2RNPudXXygkHjkPuVnnDln4ZVeqvPg6Ci3Dq3261zGDxdiPkG5e67TgMk99QlHD2nu6/Yu6VPTkOsZJBo52gPe1ug9yt2HgseOdz1n5tFMNa9U+ti0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQf//Z',
            type: String
        },
        char: Object,
        default: {}
        
    },
    data() {
        return {

        }
    },
    methods: {
        toggleFight () {
            this.$emit('togglefight')
        }
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .corpo {
        display: flex;
        justify-content: center;
        align-items: center;
        /* min-height: 100vh; */
        /* background: linear-gradient(0deg, #b8ff2e, #2ea8ff); */
        background-attachment: fixed;
    }
    /* {
        position: relative;
        width: 1000px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px;
        padding: 20px 0;
    } */
    .card {
        position: relative;
        height: 200px;
        background: #fff;
        display: flex;
        width: 340px;
        margin: 10px 0;
        border-radius: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .row {
        width: 100%;
        margin-right: 0px;
    }
    .card .imgBx {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(255,255,255,1);
        /* background: rgba(255,255,255,0.1); */
        /* backdrop-filter: blur(20px); */
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 5px 5px 30px rgba(0,0,0,0.1);
        transition: 0.5s ease-in-out;
    }
    .card:hover .imgBx {
        transform: scale(0.2, 0.3);
        /* height: 100px;
        width: 100px; */
        left: -135px;
        top: calc(50% - 157px);
    }

    /* talvez ponha hover > .card:hover .imgBx img {  */
    .card .imgBx img {
        max-width: 100px;
        height: auto;
        /* filter: invert(1); */
        transition: 0.5s ease-in-out;
    }
    .card:hover .imgBx img {
        max-width: 40px;
    }
    .card .content {
        position: absolute;
        right: 0;
        width: calc(100% - 1px);
        height: 100%;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .card .content h3 {
        color: red;
        margin-bottom: 5px;
        font-size: 18px;
    }
    .card .content a {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 20px;
        border-radius: 5px;
        background: #0065ff;
        text-decoration: none;
        color: #fff;
        font-weight: 500;
    }

    /* img {
        width: 70px;
        height: auto;
    } */

    /* responsive */
    @media (max-width: 992px) {
        /* {
            position: relative;
            width: 100%;
            flex-direction: column;
            align-items: center;
        } */
        .card {
            width: 300px;
            height: auto;
            flex-direction: column;
            background: transparent;
            margin: -20px 0;
            box-shadow: none;
        }
        .card .imgBx {
            position: relative;
        }
        .card .imgBx,
        .card:hover .imgBx {
            width: 80%;
            height: 200px;
            top: 100px;
            left: 10%;
        }
        .card:hover .imgBx {
            top: 80px;
        }
        .card .imgBx img,
        .card:hover .imgBx img {
            max-width: 70px;
        }
        .card content {
            position: relative;
            width: 100%;
            background: #fff;
            box-shadow: none;
            border-radius: 20px;
            padding: 20px 40px 40px;
            border-top: 100px solid #fff;
        }
    }

</style>