<template>
    <div class="apps">
        <div class="appsBox">
            <div class="appsName">纯CSS实现</div>
        </div>
        <div class="appsBox">
            <div class="appsItem faceTime">
                <div class="faceTimeItem1"></div>
                <div class="faceTimeItem2"></div>
            </div>
            <div class="appsName">FaceTime 通话</div>
        </div>
        <div class="appsBox">
            <div class="appsItem calendar">
                <span class="calendarItem1">{{week}}</span>
                <span class="calendarItem2">{{day}}</span>
            </div>
            <div class="appsName">日历</div>
        </div>
        <div class="appsBox">
            <div class="appsItem picture">
                <div class="pictureItem pictureItem1"></div>
                <div class="pictureItem pictureItem2"></div>
                <div class="pictureItem pictureItem3"></div>
                <div class="pictureItem pictureItem4"></div>
                <div class="pictureItem pictureItem5"></div>
                <div class="pictureItem pictureItem6"></div>
                <div class="pictureItem pictureItem7"></div>
                <div class="pictureItem pictureItem8"></div>
            </div>
            <div class="appsName">照片</div>
        </div>
        <div class="appsBox">
            <div class="appsItem camera">
                <div class="cameraItem1"></div>
                <div class="cameraItem2">
                    <div class="cameraItem2Circle1"></div>
                    <div class="cameraItem2Circle2"></div>
                </div>
            </div>
            <div class="appsName">相机</div>
        </div>
        <div class="appsBox">
            <div class="appsItem email">
                <div class="emailItem"></div>
            </div>
            <div class="appsName">邮件</div>
        </div>
        <div class="appsBox">
            <div class="appsItem memo">
                <div class="memoItem memoItem1"></div>
                <div class="memoItem"></div>
                <div class="memoItem"></div>
                <div class="memoItem"></div>
                <div class="memoItem2"></div>
            </div>
            <div class="appsName">备忘录</div>
        </div>
        <div class="appsBox">
            <div class="appsItem events">
                <div class="eventsItem eventsItem1">
                    <div class="eventsItemCitcle eventsItem1Citcle"></div>
                    <div class="eventsItemLine"></div>
                </div>
                <div class="eventsItem eventsItem2">
                    <div class="eventsItemCitcle eventsItem2Citcle"></div>
                    <div class="eventsItemLine"></div>
                </div>
                <div class="eventsItem eventsItem3">
                    <div class="eventsItemCitcle eventsItem3Citcle"></div>
                    <div class="eventsItemLine"></div>
                </div>
            </div>
            <div class="appsName">提醒事项</div>
        </div>
        <div class="appsBox">
            <div class="appsItem healthy">
                <div class="healthyItem healthyItem1"></div>
                <div class="healthyItem healthyItem2"></div>
            </div>
            <div class="appsName">健康</div>
        </div>
        <div class="appsBox">
            <div class="appsItem wallet">
                <div class="walletItem">
                    <div class="cardItem cardItem1"></div>
                    <div class="cardItem cardItem2"></div>
                    <div class="cardItem cardItem3"></div>
                    <div class="cardItem cardItem4"></div>
                    <div class="cardItem cardItem5"></div>
                </div>
            </div>
            <div class="appsName">钱包</div>
        </div>
        <div class="appsBox">
            <div class="appsItem weather">
                <div class="cloud"></div>
                <div class="sun"></div>
            </div>
            <div class="appsName">天气</div>
        </div>
        <div class="appsBox">
            <div class="appsItem quick">
                <div class="quickItem quickItem1"></div>
                <div class="quickItem quickItem2"></div>
            </div>
            <div class="appsName">快捷指令</div>
        </div>
        <div class="appsBox">
            <div class="appsItem addressBook">
                <div class="addressBookItem1">
                    <div class="addressBookItem1People"></div>
                </div>
                <div class="addressBookItem2">
                    <div class="type type1"></div>
                    <div class="type type2"></div>
                    <div class="type type3"></div>
                    <div class="type type4"></div>
                </div>
            </div>
            <div class="appsName">通讯录</div>
        </div>
        <div class="appsBox">
            <div class="appsItem watch">
                <div class="watchItem1"></div>
                <div class="watchItem2">
                    <div class="watchItem2Icon1"></div>
                    <div class="watchItem2Icon2"></div>
                </div>
            </div>
            <div class="appsName">Watch</div>
        </div>
        <div class="appsBox">
            <div class="appsItem book">
                <div class="bookItem"></div>
                <div class="bookItem"></div>
            </div>
            <div class="appsName">图书</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            week:"",
            day:""
        }
    },
    methods:{
        getDate(){
            let weekNum = new Date().getDay()
            let weekName = ["周日","周一","周二","周三","周四","周五","周六"]
            this.week = weekName[weekNum]
            this.day = (new Date().getDate()+"").padStart(2,"0")
        }
    },
    mounted(){
        this.getDate()
    }
}
</script>

<style lang="scss" scoped>
.apps{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow-y: auto;
    .appsBox{
        width: 120px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:8px;
        .appsItem{
            width: 60px;
            height: 60px;
            border-radius: 12px;
            cursor: pointer;
            transition: all .2s;
        }
        .appsItem:active{
            opacity: 0.8;
        }
        .appsName{
            font-size: 12px;
            color: white;
            cursor: pointer;
            user-select: none;
        }
    }
    .faceTime{
        background: linear-gradient(to bottom , #50F56A , #0CB322);
        position: relative;
        display: flex;
        align-items: center;
        gap:2px;
        .faceTimeItem1{
            width: calc(70% - 8px);
            height: calc(100% - 32px);
            margin-left: 8px;
            background-color: white;
            border-radius: 6px;
        }
        .faceTimeItem2{
            width: calc(30% - 8px);
            height: calc(100% - 32px);
            margin-right: 8px;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
        }
        .faceTimeItem2::after{
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: white;
            border-radius: 4px;
            transform: rotate(45deg);
            left: -1px;
        }
    }
    .calendar{
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .calendarItem1{
            font-size: 12px;
            color: #FF3336;
        }
        .calendarItem2{
            font-size: 28px;
            font-weight: 300;
        }
    }
    .picture{
        background-color: white;
        position: relative;
        .pictureItem{
            width:17px;
            height: calc(50% - 4px);
            border-radius:17px;
            margin-top: 3px;
            margin-left: calc(50% - 8.5px);
            position: absolute;
            transform-origin: 50% calc(100% + 2px);
            z-index: 9;
        }
        .pictureItem1{
            background-color: rgba(233, 101, 19, .7);
        }
        .pictureItem2{
            background-color: rgba(241,220,36,.7);
            transform: rotate(45deg);
        }
        .pictureItem3{
            background-color: rgba(81, 207, 77, 0.7);
            transform: rotate(90deg);
        }
        .pictureItem4{
            background-color: rgba(17, 163, 114, 0.7);
            transform: rotate(135deg);
        }
        .pictureItem5{
            background-color: rgba(17, 102, 163, 0.7);
            transform: rotate(180deg);
        }
        .pictureItem6{
            background-color: rgba(120, 42, 203, 0.7);
            transform: rotate(225deg);
        }
        .pictureItem7{
            background-color: rgba(203, 42, 98, 0.7);
            transform: rotate(270deg);
        }
        .pictureItem8{
            background-color: rgba(221, 18, 18, 0.7);
            transform: rotate(315deg);
        }
    }
    .camera{
        background: linear-gradient(to bottom , #DADCDF , #848589);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .cameraItem1{
            width: 44px;
            height: 5px;
            position: relative;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }
        .cameraItem1::after{
            content: "";
            position: absolute;
            width: 22px;
            height: 22px;
            transform: rotate(45deg);
            border-top-left-radius: 10px;
            background-color: #282829;
            bottom: -17px;
        }
        .cameraItem2{
            width: 44px;
            height: calc(100% - 20px - 5px - 4px);
            background-color: #282829;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .cameraItem2Circle1{
                width: 16px;
                height: 16px;
                border-radius: 50%;
                border: 2px solid #A2A3A8;
            }
            .cameraItem2Circle2{
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #FFC409;
                position: absolute;
                right: 8px;
                top: 2px;
            }
        }
    }
    .email{
        background: linear-gradient(to bottom , #106AEE , #06C0FA);
        display: flex;
        align-items: center;
        justify-content: center;
        .emailItem{
            width: calc(100% - 20px);
            height: calc(100% - 32px);
            background-color: white;
            border-radius: 3px;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
        }
        .emailItem::after{
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border: 1px solid #0A9BF5;
            border-radius: 6px;
            transform: rotate(45deg);
            top: -60%;
            background-color: white;
        }
        .emailItem::before{
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border: 1px solid #3FB7F7;
            border-radius: 6px;
            transform: rotate(45deg);
            bottom: -67%;
        }
    }
    .memo{
        background-color: #FFFEFF;
        overflow: hidden;
        position: relative;
        .memoItem{
            width: 100%;
            height: calc(100% / 4);
            border-bottom:1px solid #BFBFC4;
            box-sizing: border-box;
        }
        .memoItem:last-child{
            border-bottom: none;
        }
        .memoItem1{
            background: linear-gradient(to bottom,#FFD752 , #FFC40C);
            box-shadow: 1px 0px 8px rgba(46, 46, 46, 0.6);
        }
        .memoItem2{
            position: absolute;
            width: 100%;
            border-bottom: 1px dashed #BFBFC4;
            top: calc(100% / 4 + 1px);
        }
    }
    .events{
        background-color: #FFFEFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:5px;
        .eventsItem{
            width: calc(100% - 10px);
            display: flex;
            align-items: center;
            justify-content: center;
            gap:8px;
            .eventsItemCitcle{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .eventsItemLine{
                width:calc(100% - 8px - 10px);
                height: 1px;
                background-color: #BFBFC4;
            }
        }
        .eventsItem1Citcle{
            border: 1px solid #0071FE;
        }
        .eventsItem1Citcle::after{
            content: "";
            width: 6px;
            height: 6px;
            background-color: #0071FE;
            border-radius: 50%;
        }
        .eventsItem2Citcle{
            border: 1px solid #FF322D;
        }
        .eventsItem2Citcle::after{
            content: "";
            width: 6px;
            height: 6px;
            background-color: #FF322D;
            border-radius: 50%;
        }
        .eventsItem3Citcle{
            border: 1px solid #FF890B;
        }
        .eventsItem3Citcle::after{
            content: "";
            width: 6px;
            height: 6px;
            background-color: #FF890B;
            border-radius: 50%;
        }
    }
    .healthy{
        background-color: #FFFEFF;
        position: relative;
        .healthyItem{
            width: 18px;
            height: 25px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background: linear-gradient(to bottom , #FF559D , #FF241D);
        }
        .healthyItem1{
            border-bottom-left-radius: 10px;
            transform: rotate(-45deg);
            position: absolute;
            left: 24px;
            top: 5px;
        }
        .healthyItem2{
            border-bottom-right-radius: 10px;
            transform: rotate(45deg);
            position: absolute;
            left: 30px;
            top: 5px;
        }
    }
    .wallet{
        background-color: #1B1C1D;
        display: flex;
        align-items: center;
        justify-content: center;
        .walletItem{
            width: calc(100% - 20px);
            height: calc(100% - 32px);
            background-color: #D3CFC5;
            border-radius: 3px;
            position: relative;
            .cardItem{
                width: calc(100% - 4px);
                height: 5px;
                position: absolute;
                left: 2px;
                border-radius: 2px;
            }
            .cardItem1{
                background-color: #308EC1;
                top: 2px;
            }
            .cardItem2{
                background-color: #FEA30D;
                top: 5px;
            }
            .cardItem3{
                background-color: #43B132;
                top: 8px;
            }
            .cardItem4{
                background-color: #F16255;
                top: 11px;
            }
            .cardItem5{
                height: 8px;
                border-radius: 0;
                top: 14px;
                background-color: #D3CFC5;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                position: relative;
            }
            .cardItem5::after{
                content: "";
                width: 15px;
                height: 15px;
                transform: rotate(45deg);
                position: absolute;
                border-radius: 6px;
                background-color: #F16255;
                top: -150%;
            }
        }
    }
    .weather{
        background: linear-gradient(to bottom ,#0552AA , #2694E3);
        position: relative;
        .cloud{
            width: 40px;
            height: 20px;
            border-radius: 30px;
            background-color: white;
            position: absolute;
            left: 10px;
            bottom: 15px;
            opacity: 0.7;
            z-index: 9;
        }
        .cloud::after{
            content: "";
            width: 20px;
            height: 20px;
            position: absolute;
            background-color: white;
            border-radius: 50%;
            top: -9px;
            left: 5px;
        }
        .sun{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #F7CA40;
            position: absolute;
            right: 10px;
            top: 14px;
        }
    }
    .quick{
        background-color: #1A1D4F;
        position: relative;
        .quickItem{
            width: 28px;
            height: 28px;
            transform:rotate(-51deg) skewY(15deg);
            border-radius: 6px;
            position: absolute;
            left: 15px;
        }
        .quickItem1{
            background: linear-gradient(to bottom , rgba(245,84,86,1.0) , #E85269,rgba(245,84,86,.2));
            top: 10px;
            z-index: 1;
        }
        .quickItem2{
            background: linear-gradient(to bottom , #31647A , #2D7E8D ,#0079F6);
            top: 23px;
        }
    }
    .addressBook{
        background-color: #D2D0C4;
        display: flex;
        overflow: hidden;
        .addressBookItem1{
            width: calc(100% - 7px);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 1px 0px 5px rgba(29, 29, 29, 0.4);
            z-index: 99;
            .addressBookItem1People{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                border: 2px solid #9F988F;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                position: relative;
            }
            .addressBookItem1People::after{
                content: "";
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: #9F988F;
                position: absolute;
                top: 6px;
            }
            .addressBookItem1People::before{
                content: "";
                width: 35px;
                height: 30px;
                border-radius: 50%;
                background-color: #9F988F;
                position: absolute;
                bottom: -20px;
            }
        }
        .addressBookItem2{
            width: 7px;
            height: 100%;
            .type{
                width: 100%;
                height: calc(100% / 4);
                box-shadow: 0px 1px 2px rgba(29, 29, 29, 0.4);  
            }
            .type1{
                background-color: #BBB9B1;
                z-index: 4;
            }
            .type2{
                background-color: #4BBBF0;
                z-index: 3;
            }
            .type3{
                background-color: #E77C0A;
                z-index: 2;
            }
            .type4{
                background-color: #41CA56;
                z-index: 1;
            }
        }
    }
    .watch{
        background-color: #191A1A;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transform: scale(1);
        .watchItem1{
            width: 28px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid white;
        }
        .watchItem2{
            width: 8px;
            height: 25px;
            background-color: #AFB1B1;
            border-radius: 20px;
            position: absolute;
            left: 14px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap:2px;
            .watchItem2Icon1{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                border: 1px solid black;
                box-sizing: border-box;
            }
            .watchItem2Icon2{
                width: 4px;
                height: 8px;
                border-radius: 2px;
                border: 1px solid white;
                box-sizing: border-box;
            }
        }
        .watchItem2::after{
            content: "";
            position: absolute;
            width: 2px;
            height: 4px;
            border-radius: 2px;
            border: 1px solid #191A1A;
            top: -1px;
            left: 3px;
            background-color: white;
            transform: rotate(36deg);
            border-top: none;
        }
        .watchItem2::before{
            content: "";
            position: absolute;
            width: 2px;
            height: 4px;
            border-radius: 2px;
            border: 1px solid #191A1A;
            bottom: -1px;
            left: 3px;
            background-color: white;
            transform: rotate(-36deg);
            border-bottom: none;
        }
    }
    .book{
        background: linear-gradient(to bottom , #FF980E , #F95D1F);
        display: flex;
        align-items: center;
        justify-content: center;
        gap:2px;
        .bookItem{
            width: 20px;
            height: 35px;
            background-color: white;
            position: relative;
            border-top-left-radius:9px;
            border-top-right-radius:9px;
            overflow: hidden;
        }
        .bookItem::before{
            content: "";
            position: absolute;
            width: 25px;
            height: 20px;
            border-radius: 50%;
            background-color: #FA691A;
            bottom: -15px;
            left: -2px;
        }
    }
}
</style>