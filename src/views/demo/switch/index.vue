<template>
    <div class="switch">
        <div class="switchBox">
            <div class="switch1" :class="switch1 ? 'switch1Active' : ''" @click="switch1 = !switch1">
                <div class="switch1Button"></div>
            </div>
        </div>
        <div class="switchBox">
            <div class="switch2" :class="switch2 ? 'switch2Active' : ''" @click="switch2 = !switch2">
                <div class="switch2Button"></div>
            </div>
        </div>
        <div class="switchBox">
            <div class="switch3" :class="switch3 ? 'switch3Active' : ''" @click="switch3 = !switch3">
                <div class="switch3Button"></div>
            </div>
        </div>
        <div class="switchBox">
            <div class="switch4">
                <div class="switch4Button switch4Button1" :class="switch4 ? 'switch4Button1Active':''" @click="switch4 = !switch4">
                    <span>ON</span>
                </div>
                <div class="switch4Button switch4Button2" :class="!switch4 ? 'switch4Button2Active':''" @click="switch4 = !switch4">
                    <span>OFF</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            switch1:false,
            switch2:true,
            switch3:false,
            switch4:true
        }
    }
}
</script>

<style lang="scss" scoped>
.switch{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    display: flex;
    flex-wrap: wrap;
    .switchBox{
        padding:0 20px;
        height: 80px;
        display: flex;
        align-items: center;
        .switch1{
            width: 45px;
            height: 21px;
            background: linear-gradient(to right , #E0E8F3 , #E0E8F3);
            border-radius: 30px;
            box-shadow: 0px 0px 5px 1px #94a8c4;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            transition: all .5s;
            .switch1Button{
                width: 15px;
                height: 15px;
                background-color: #90A1C8;
                border-radius: 50%;
                position: absolute;
                left: 5px;
                transition: all .3s;
            }
        }
        .switch1Active{
            background: linear-gradient(to right , #6D85FD, #5639F1);
            .switch1Button{
                background-color: white;
                left: 25px;
            }
        }
        .switch2{
            width: 45px;
            height: 21px;
            background: linear-gradient(to right , #E0E8F3 , #E0E8F3);
            border-radius: 30px;
            box-shadow: 0px 0px 5px 1px #94a8c4;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            transition: all .5s;
            .switch2Button{
                width: 15px;
                height: 15px;
                background-color: #90A1C8;
                border-radius: 15px;
                position: absolute;
                left: 5px;
                transition: all .3s;
            }
        }
        .switch2:active{
            .switch2Button{
                width: 22px;
            }
        }
        .switch2Active:active{
            .switch2Button{
                width: 22px;
                left: 18px;
            }
        }
        .switch2Active{
            background: linear-gradient(to right , #6D85FD, #5639F1);
            .switch2Button{
                background-color: white;
                left: 25px;
            }
        }
        .switch3{
            width: 45px;
            height: 6px;
            background: linear-gradient(to right , #E0E8F3 , #E0E8F3);
            border-radius: 30px;
            box-shadow: 0px 0px 5px 1px #94a8c4;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            transition: all .5s;
            .switch3Button{
                width: 15px;
                height: 15px;
                background-color: #90A1C8;
                border-radius: 50%;
                position: absolute;
                left: -7.5px;
                transition: all .3s;
            }
        }
        .switch3Active{
            background: linear-gradient(to right , #6D85FD, #5639F1);
            .switch3Button{
                background-color: white;
                left: 37.5px;
            }
        }
        .switch4{
            width: 120px;
            height: 40px;
            background-color: black;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            .switch4Button{
                width: calc(50% - 15px);
                height: calc(100% - 6px);
                background-color: #222321;
                color:  black;
                font-weight: bold;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
            }
            .switch4Button1{
                right: 50%;
                background: linear-gradient(to right ,#282928, #4a4a4a,);
                box-shadow: -2px -0px 0px #454545 ,
                            -5px -0px 5px rgb(39, 39, 39),
                            -7px -0px 5px #393938;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                transition: all .3s;
            }
            .switch4Button1Active{
                // color: red;
                width: calc(50% - 5px);
                color: rgb(43, 133, 217);
                text-shadow: 0px 0px 10px rgb(43, 133, 217);
                box-shadow: none;
               
            }
            .switch4Button2{
                left: 50%;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
                background: linear-gradient(to left ,#282928, #454545,);
                box-shadow: 2px -0px 0px #454545 ,
                            5px -0px 5px rgb(39, 39, 39),
                            7px -0px 5px #393938;
                transition: all .3s;
            }
            .switch4Button2Active{
                width: calc(50% - 5px);
                color: rgb(231, 51, 51);
                text-shadow: 0px 0px 5px rgb(231, 51, 51);
                box-shadow: none;
                // background-color: #393938;
            }
        }
    }
}
</style>