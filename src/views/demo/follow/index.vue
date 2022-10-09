<template>
    <div class="follow">
        <div class="smile">
            <div class="eye eye1" id="eye1">
                <div class="eyeBall eyeBall1" :style="{'transform':'rotate('+rotate1+'deg)'}"></div>
            </div>
            <div class="eye eye2" id="eye2">
                <div class="eyeBall eyeBall2" :style="{'transform':'rotate('+rotate2+'deg)'}"></div>
            </div>
            <div class="mouth">
                <div class="mouthBox"></div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            rotate1:0,
            rotate2:0
        }
    },
    mounted(){
        document.body.addEventListener("mousemove",(e)=>{
            let eye1X = document.getElementById("eye1").getBoundingClientRect().x+40
            let eye1Y = document.getElementById("eye1").getBoundingClientRect().y+40
            let eye2X = document.getElementById("eye2").getBoundingClientRect().x+40
            let eye2Y = document.getElementById("eye2").getBoundingClientRect().y+40
            let eventX = e.pageX
            let eventY = e.pageY
            // 计算相对于眼球1的角度
            if(eventX < eye1X && eventY < eye1Y){
                let len1 = eye1X - eventX
                let len2 = eye1Y - eventY
                this.rotate1 = -(Math.round(Math.atan(len1/len2) * 180 / Math.PI))
            }else if(eventX > eye1X && eventY < eye1Y){
                let len1 = eventX - eye1X
                let len2 = eye1Y - eventY
                this.rotate1 = (Math.round(Math.atan(len1/len2) * 180 / Math.PI))
            }else if(eventX < eye1X && eventY > eye1Y){
                let len1 = eye1X - eventX
                let len2 = eventY - eye1Y
                this.rotate1 = -(Math.round(Math.atan(len2/len1) * 180 / Math.PI)) - 90
            }else if(eventX > eye1X && eventY > eye1Y){
                let len1 = eventX - eye1X
                let len2 = eventY - eye1Y
                this.rotate1 = Math.round(Math.atan(len2/len1) * 180 / Math.PI) + 90
            }
            // 计算相对于眼球2的角度
            if(eventX < eye2X && eventY < eye2Y){
                let len1 = eye2X - eventX
                let len2 = eye2Y - eventY
                this.rotate2 = -(Math.round(Math.atan(len1/len2) * 180 / Math.PI))
            }else if(eventX > eye2X && eventY < eye2Y){
                let len1 = eventX - eye2X
                let len2 = eye2Y - eventY
                this.rotate2 = (Math.round(Math.atan(len1/len2) * 180 / Math.PI))
            }else if(eventX < eye2X && eventY > eye2Y){
                let len1 = eye2X - eventX
                let len2 = eventY - eye2Y
                this.rotate2 = -(Math.round(Math.atan(len2/len1) * 180 / Math.PI)) - 90
            }else if(eventX > eye2X && eventY > eye2Y){
                let len1 = eventX - eye2X
                let len2 = eventY - eye2Y
                this.rotate2 = Math.round(Math.atan(len2/len1) * 180 / Math.PI) + 90
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.follow{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    display: flex;
    align-items: center;
    justify-content: center;
    .smile{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #FED243;
        position: relative;
        box-shadow:0px 0px 15px 2px #C07C39;
        .eye{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position:absolute;
            top: 60px;
            background-color: rgb(92, 92, 92);
            .eyeBall{
                width: 20px;
                height: 20px;
                background-color: white;
                border-radius: 50%;
                position: absolute;
                left: calc(50% - 10px);
                top: 0px;
                transform-origin: 50% 200%;
                
            }
        }
        .eye1{
            left: 50px;
        }
        .eye2{
            right: 50px;
        }
        .mouth{
            width: 200px;
            height: 100px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 30px;
            left: 50px;
            .mouthBox{
                width: 100%;
                height: 150px;
                border:4px solid rgb(92, 92, 92);
                border-radius: 50%;
                margin-bottom: 85px;
            }
        }
    }
}
</style>