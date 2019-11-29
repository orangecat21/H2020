export default {
    state: {
        jacketsMale: [
            {
                id:1,
                src:require('../../assets/Textures/Jackets/male/1.png'),
                posX:335,
                posY:325,
                z:7
            },
            {
                id:2,
                src:require('../../assets/Textures/Jackets/male/2.png'),
                posX:335,
                posY:325,
                z:7
            },
            {
                id:3,
                src:require('../../assets/Textures/Jackets/male/3.png'),
                posX:335,
                posY:325,
                z:7
            },
            {
                id:4,
                src:require('../../assets/Textures/Jackets/male/4.png'),
                posX:265,
                posY:256,
                z:7
            },
            {
                id:5,
                src:require('../../assets/Textures/Jackets/male/5.png'),
                posX:265,
                posY:256,
                z:7
            },
            {
                id:6,
                src:require('../../assets/Textures/Jackets/male/6.png'),
                posX:353,
                posY:330,
                z:7
            },
            {
                id:7,
                src:require('../../assets/Textures/Jackets/male/7.png'),
                posX:292,
                posY:334,
                z:7
            },
            {
                id:8,
                src:require('../../assets/Textures/Jackets/male/8.png'),
                posX:362,
                posY:329,
                z:7
            },
            {
                id:9,
                src:require('../../assets/Textures/Jackets/male/9.png'),
                posX:372,
                posY:331,
                z:7
            },
            {
                id:10,
                src:require('../../assets/Textures/Jackets/male/10.png'),
                posX:365,
                posY:335,
                z:7
            },
            {
                id: 11,
                src: require('../../assets/Textures/Jackets/male/11.png'),
                posX: 365,
                posY: 330,
                z: 7
            },
            {
                id: 12,
                src: require('../../assets/Textures/Jackets/male/12.png'),
                posX: 388,
                posY: 338,
                z: 7
            },
            {
                id: 13,
                src: require('../../assets/Textures/Jackets/male/13.png'),
                posX: 360,
                posY: 336,
                z: 7
            },
            {
                id: 14,
                src: require('../../assets/Textures/Jackets/male/14.png'),
                posX: 425,
                posY: 351,
                z: 7
            },
            {
                id: 15,
                src: require('../../assets/Textures/Jackets/male/15.png'),
                posX: 385,
                posY: 335,
                z: 7
            }
        ],
        jacketsFemale: [
            {
                id:1,
                src:require('../../assets/Textures/Jackets/female/1.png'),
                posX:369,
                posY:334,
                z:7
            },
            {
                id:2,
                src:require('../../assets/Textures/Jackets/female/2.png'),
                posX:365,
                posY:321,
                z:7
            },
            {
                id:4,
                src:require('../../assets/Textures/Jackets/female/4.png'),
                posX:321,
                posY:298,
                z:7
            },
            {
                id:5,
                src:require('../../assets/Textures/Jackets/female/5.png'),
                posX:387,
                posY:331,
                z:7
            },
            {
                id:6,
                src:require('../../assets/Textures/Jackets/female/6.png'),
                posX:373,
                posY:330,
                z:7
            },
            {
                id:7,
                src:require('../../assets/Textures/Jackets/female/7.png'),
                posX:372,
                posY:323,
                z:7
            },
            {
                id:8,
                src:require('../../assets/Textures/Jackets/female/8.png'),
                posX: 422,
                posY: 320,
                z:7
            },
            {
                id:9,
                src:require('../../assets/Textures/Jackets/female/9.png'),
                posX: 370,
                posY: 335,
                z:7
            },
            {
                id:10,
                src:require('../../assets/Textures/Jackets/female/10.png'),
                posX: 377,
                posY: 335,
                z:7
            },
            {
                id:11,
                src:require('../../assets/Textures/Jackets/female/104.png'),
                posX: 370,
                posY: 336,
                z:7
            },
            {
                id:12,
                src:require('../../assets/Textures/Jackets/female/12.png'),
                posX: 373,
                posY: 403,
                z:7
            },
            {
                id:13,
                src:require('../../assets/Textures/Jackets/female/13.png'),
                posX:360,
                posY:310,
                z:7
            },
            {
                id:14,
                src:require('../../assets/Textures/Jackets/female/14.png'),
                posX:398,
                posY:330,
                z:7
            },
            {
                id:15,
                src:require('../../assets/Textures/Jackets/female/15.png'),
                posX: 376,
                posY: 338,
                z:7
            },
            {
                id:16,
                src:require('../../assets/Textures/Jackets/female/16.png'),
                posX: 371,
                posY: 330,
                z:7
            },
            {
                id:17,
                src:require('../../assets/Textures/Jackets/female/105.png'),
                posX: 285,
                posY: 250,
                z:7
            },
            {
                id:18,
                src:require('../../assets/Textures/Jackets/female/106.png'),
                posX: 285,
                posY: 250,
                z:7
            },
            {
                id:19,
                src:require('../../assets/Textures/Jackets/female/113.png'),
                posX: 345,
                posY: 320,
                z:7
            },
            {
                id:20,
                src:require('../../assets/Textures/Jackets/female/114.png'),
                posX: 360,
                posY: 330,
                z:7
            },
            {
                id: 21,
                src: require('../../assets/Textures/your.svg'),
                posX: -1000,
                posY: -1000,
                z: 7
            },
        ],
        femaleMap:[
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 1 jacket
            {
                disableFirst:[11,12,13,14,15,22,23,25,26,27], //Shirt
                disableSecond:[21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 2 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 0 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 3 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 4 jacket
            {
                disableFirst:[13,14,15,18,19,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 5 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 6 jacket
            {
                disableFirst:[11,12,13,14,15,22,23,25,26,27], //Shirt
                disableSecond:[21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 7 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 8 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 9 jacket
            {
                disableFirst:[11,12,13,14,15,16,17,20,21,22,23,25,26,27], //Shirt
                disableSecond:[3,6,21], //Pants
                disableThird:[15], //Access
                disableFourth:[]
            },
            // 10 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 11 jacket
            {
                disableFirst:[13,14,15,22,23], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 12 jacket
            {
                disableFirst:[13,14,15], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 13 jacket
            {
                disableFirst:[13,14,15,16,17,20,21,22,23,25,26,27], //Shirt
                disableSecond:[1,20,21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 14 jacket
            {
                disableFirst:[11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27], //Shirt
                disableSecond:[1,2,3,5,6,9,20,21], //Pants
                disableThird:[15], //Access
                disableFourth:[]
            },
            // 15 jacket
            {
                disableFirst:[11,12,13,14,15,16,20,21,22,23], //Shirt
                disableSecond:[1,21], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 16 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 17 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 18 jacket
            {
                disableFirst:[13,14,15], //Shirt
                disableSecond:[], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            // 19 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[21], //Pants
                disableThird:[10], //Access
                disableFourth:[]
            },
            {
                disableFirst:[],
                disableSecond:[],
                disableThird:[],
                disableFourth:[]
            },
        ],
        maleMap:[
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 1 jacket
            {
                disableFirst:[11,12], //Shirt
                disableSecond:[], //Pants
                disableThird:[7,8,9], //Access
                disableFourth:[]
            },
            // 2 jacket
            {
                disableFirst:[11,12], //Shirt
                disableSecond:[], //Pants
                disableThird:[7,8,9], //Access
                disableFourth:[]
            },
            // 3 jacket
            {
                disableFirst:[11,12], //Shirt
                disableSecond:[], //Pants
                disableThird:[7,8,9], //Access
                disableFourth:[]
            },
            // 4 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[7,8,9], //Access
                disableFourth:[]
            },
            // 5 jacket
            {
                disableFirst:[], //Shirt
                disableSecond:[], //Pants
                disableThird:[7,8,9], //Access
                disableFourth:[]
            },
            // 6 jacket
            {
                disableFirst:[7,11,12], //Shirt
                disableSecond:[13], //Pants
                disableThird:[8,9], //Access
                disableFourth:[]
            },
            // 7 jacket
            {
                disableFirst:[11,12], //Shirt
                disableSecond:[], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 8 jacket
            {
                disableFirst:[7,11,12,13,14], //Shirt
                disableSecond:[12,13], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 9 jacket
            {
                disableFirst:[7,11,12,13,14], //Shirt
                disableSecond:[13], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 10 jacket
            {
                disableFirst:[7,11,12,13,14], //Shirt
                disableSecond:[13], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 11 jacket
            {
                disableFirst:[11,12,13,14], //Shirt
                disableSecond:[], //Pants
                disableThird:[8], //Access
                disableFourth:[]
            },
            // 12 jacket
            {
                disableFirst:[11,12,13,14], //Shirt
                disableSecond:[13], //Pants
                disableThird:[7], //Access
                disableFourth:[]
            },
            // 13 jacket
            {
                disableFirst:[7,11,12,13,14,15], //Shirt
                disableSecond:[13,12], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 14 jacket
            {
                disableFirst:[7,11,12,15], //Shirt
                disableSecond:[13], //Pants
                disableThird:[], //Access
                disableFourth:[]
            },
            // 15 jacket
            {
                disableFirst:[7,11,12,13], //Shirt
                disableSecond:[13], //Pants
                disableThird:[8], //Access
                disableFourth:[]
            },
        ]
    }
}