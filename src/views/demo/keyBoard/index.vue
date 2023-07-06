<template>
    <div class="keyBoard" id="keyBoard">
        <div class="keyBoardBox" :style="{'transform':'perspective(1000px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)'}">
            <div class="keyBoardBoxLine">
                <div class="keyBoardBoxItem">
                    <div class="point orange"></div>
                </div>
                <div class="keyBoardBoxItem" v-for="item in 12" :key="item">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem double">
                    <div class="point grey"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point red"></div>
                </div>
            </div>


            <div class="keyBoardBoxLine">
                <div class="keyBoardBoxItem long">
                    <div class="point grey"></div>
                </div>
                <div class="keyBoardBoxItem" v-for="item in 12" :key="item">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem long">
                    <div class="point grey"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point yellow"></div>
                </div>
            </div>


            <div class="keyBoardBoxLine">
                <div class="keyBoardBoxItem long2">
                    <div class="point grey"></div>
                </div>
                <div class="keyBoardBoxItem" v-for="item in 11" :key="item">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem long3">
                    <div class="point green"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point green"></div>
                </div>
            </div>


            <div class="keyBoardBoxLine">
                <div class="keyBoardBoxItem double">
                    <div class="point yellow"></div>
                </div>
                <div class="keyBoardBoxItem" v-for="item in 10" :key="item">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem long">
                    <div class="point yellow"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point blue"></div>
                </div>
            </div>


            <div class="keyBoardBoxLine">
                <div class="keyBoardBoxItem">
                    <div class="point red"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point purple"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point blue"></div>
                </div>
                <div class="keyBoardBoxItem space"></div>
                <div class="keyBoardBoxItem long">
                    <div class="point blue"></div>
                </div>
                <div class="keyBoardBoxItem long">
                    <div class="point purple"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point"></div>
                </div>
                <div class="keyBoardBoxItem">
                    <div class="point"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            rotateX:0,
            rotateY:0
        }
    },
    methods:{
    },
    mounted(){
        let dom = document.getElementById("keyBoard")
        let domWidth = dom.clientWidth
        let domHeight = dom.clientHeight
        let halfDomWidth = domWidth / 2
        let halfDomHeight = domHeight / 2
        dom.onmousemove = (e)=>{
            if(e.offsetX < halfDomWidth){
                this.rotateY = -(35 - e.offsetX / halfDomWidth * 35)
            }
            if(e.offsetX > halfDomWidth){
                this.rotateY = (e.offsetX / halfDomWidth * 35 - 35)
            }
            if(e.offsetY < halfDomHeight){
                this.rotateX = (45 - e.offsetY / halfDomHeight * 45)
            }
            if(e.offsetY > halfDomHeight){
                this.rotateX = -(e.offsetY / halfDomHeight * 45 - 45)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.keyBoard{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .keyBoardBox{
        padding: 4px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap:12px;
        background: hsl(0, 0%, 8%);
        transform-style: preserve-3d;
        pointer-events: none;
        .keyBoardBoxLine{
            display: flex;
            justify-content: space-between;
            gap:12px;
            .keyBoardBoxItem{
                width: 50px;
                height: 50px;
                overflow: hidden;
                border-radius: 4px;
                background: hsl(0, 0%, 8%);
                border: 2px solid hsla(0, 0%, 25%, 0.2);
                box-shadow:
                    -5px -5px 10px hsl(0%, 0%, 100%, 0.01),
                    -2px -2px  6px hsl(0%, 0%, 100%, 0.03),
                    2px  2px  5px hsl(0, 0%, 0%, 0.3),
                    5px  5px 10px hsl(0, 0%, 0%, 0.3);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                cursor: pointer;
                .point{
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: rgb(220, 220, 220);
                    box-shadow: 0px 0px 10px 1px rgb(220, 220, 220);
                }
                .orange{
                    background-color: orange;
                    box-shadow: 0px 0px 10px 1px orange;
                }
                .grey{
                    background-color: rgb(159, 159, 159);
                    box-shadow: 0px 0px 10px 1px rgb(159, 159, 159);
                }
                .red{
                    background-color: rgb(241, 87, 87);
                    box-shadow: 0px 0px 10px 1px rgb(241, 87, 87);
                }
                .yellow{
                    background-color: rgb(243, 243, 63);
                    box-shadow: 0px 0px 10px 1px rgb(243, 243, 63);
                }
                .green{
                    background-color: rgb(107, 235, 107);
                    box-shadow: 0px 0px 10px 1px rgb(107, 235, 107);
                }
                .blue{
                    background-color: rgb(79, 130, 239);
                    box-shadow: 0px 0px 10px 1px rgb(79, 130, 239);
                }
                .purple{
                    background-color: rgb(158, 22, 216);
                    box-shadow: 0px 0px 10px 1px rgb(158, 22, 216);
                }
            }
            .double{
                width: 100px;
                .point{
                    width: 60px;
                    border-radius:10px;
                }
            }
            .long{
                width: 75px;
                .point{
                    width: 55px;
                    border-radius:10px;
                }
            }
            .long2{
                width: 90px;
                .point{
                    width: 70px;
                    border-radius: 10px;
                }
            }
            .long3{
                width: 110px;
                .point{
                    width: 90px;
                    border-radius: 10px;
                }
            }
            .space{
                width: 500px;
            }
        }
    }
}
</style>