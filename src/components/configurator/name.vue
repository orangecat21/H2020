<template>
  <section>
    <input
      :class="[{'iphoneTrue':iphoneTrigger}]"
      @keyup.enter="goToNext"
      @input="validName(humanName)"
      type="text"
      maxlength="25"
      v-model="humanName"
      :placeholder="$t('thirdPage.name.placeholder')"
    />
    <router-link is="button" class="Next_Button" @click="handler(humanName)">{{$t('thirdPage.name.next')}}</router-link>
    <section class="overlay" @click="goToBack" :class="[{'overlayDisplay':!popUpDisplay}]"></section>
    <section class="popup" :class="[{'popupDisplay':!popUpDisplay}]">
      <div class="nameIsNan" v-if="nameNotInput">
        <p class="msg">Забыли имя...😕</p>
        <button class="return" @click="goToBack">Try again</button>
      </div>
      <div class="genderIsNan" v-if="genderNotInput">
        <p class="msg">Забыли пол...😕</p>
        <button class="return" @click="goToBack">Try again</button>
      </div>
      <div class="nameIsInvalid" v-if="nameNotValid">
        <p class="msg">Только буквы и цифры...😕</p>
        <button class="return" @click="goToBack">Try again</button>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      humanName: this.$store.getters.HUMAN_NAME,
      iphoneTrigger: false,
      nameValidly: true,
      popUpDisplay: false,
      nameNotInput: false,
      nameNotValid: false,
      genderNotInput: false
    };
  },
  watch: {
    humanName: function() {
      this.$store.dispatch("PUSH_NAME", this.humanName);
    },
    popUpDisplay: function(){
      this.$store.dispatch("PUSH_POPUP", this.popUpDisplay)
    }
  },
  methods: {
    goToBack() {
      this.popUpDisplay = false,
      this.nameNotInput = false,
      this.nameNotValid = false,
      this.genderNotInput = false
    },
    goToNext() {
      if (this.$store.getters.GENDER === "male") {
        if (this.humanName !== "") {
          if(this.nameValidly === true){
            this.$router.replace("/create/man_clothes")
            } else {this.nameNotValid = true,this.popUpDisplay = true}
        } else {this.popUpDisplay = true, this.nameNotInput = true}
      } else if (this.$store.getters.GENDER === "female") {
        if (this.humanName !== "") {
          if(this.nameValidly === true){
            this.$router.replace("/create/women_clothes")
            } else {this.nameNotValid = true,this.popUpDisplay = true}
        } else {this.popUpDisplay = true, this.nameNotInput = true}
      } else {this.popUpDisplay = true, this.genderNotInput = true}
    },
    handler(humanName){
      this.goToNext()
      this.validName(humanName)
    },
    validName(humanName) {
      var re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
      this.nameValidly = re.test(humanName)
    }
  },
  created() {
    if (navigator.userAgent.match(/iPhone/i)) {
      this.iphoneTrigger = true;
    }
  },
};
</script>
<style scoped>
.nameIsNan,
.genderIsNan,
.nameIsInvalid{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.msg{
  font-size: 6vw;
  color: #ac40f1;
  margin-top: 5vw;
}
.return{
  margin-bottom: 5vw;
  border-radius: 8vw;
  background: #ac40f1;
  border: 0.1vw solid #ac40f1;
  color: #fff;
  font-size: 6vw;
  padding: 0vw;
  cursor: pointer;
  width: 30vw;
  box-shadow: 0vw 0vw 0.2vw #000;
  text-shadow: 0vw 0vw 0.1vw #000;
}
.overlay {
  position: absolute;
  z-index: 998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: black;
  opacity: 0.8;
  cursor: pointer;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 80vw;
  height: 30vh;
  background: linear-gradient(rgb(100, 255, 131), rgb(0, 247, 255));
  left: calc(50% - 40vw);
  top: calc(50% - 20vh);
  z-index: 999;
  flex-shrink: 0;
  border-radius: 2vw;
}
.popupDisplay{
  display: none;
}
.overlayDisplay{
  display: none;
}
.iphoneTrue {
  display: flex;
  justify-content: flex-end;
}
input {
  user-select: all;
  background-color: transparent;
  width: 85vw;
  height: 9vw;
  text-align: center;
  font-size: 8vw;
  border: none;
  box-shadow: none;
  border-bottom: 0.1vw solid #ac40f1;
  caret-color: #ac40f1;
  color: #ac40f1;
  margin-bottom: calc(var(--vh, 1vh) * 5);
}
.currentTab {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: calc(var(--vh, 1vh) * 7);
  margin-bottom: calc(var(--vh, 1vh) * 5);
}
.Next_Button {
  border-radius: 5vw;
  background: #ac40f1;
  border: 0.1vw solid #ac40f1;
  color: #fff;
  font-size: 7vw;
  padding: 0.3vw 8vw;
  cursor: pointer;
  box-shadow: 0vw 0vw 0.8vw #000;
  text-shadow: 0vw 0vw 0.4vw #000;
  animation: cycle 2s linear infinite;
}
.Next_Button:active {
  box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
}
input:focus::-webkit-input-placeholder{
	color:transparent;
}
input:focus::-moz-placeholder{
	color:transparent;
}
input:focus:-ms-input-placeholder{
	color:transparent;
}
input:focus::placeholder{
	color:transparent;
}
input:focus {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    user-select: all;
    background-color: #fff;
    height: 100vh;
    text-align: center;
    font-size: 8vw;
    border: none;
    border-bottom: 0.1vw solid #ac40f1;
    caret-color: #ac40f1;
    color: #ac40f1;
  }
  .iphoneTrue:focus {
    all: initial;
    user-select: all;
    background-color: transparent;
    width: 85vw;
    height: 9vw;
    text-align: center;
    font-size: 8vw;
    border: none;
    box-shadow: none;
    border-bottom: 0.1vw solid #ac40f1;
    caret-color: #ac40f1;
    color: #ac40f1;
    margin-bottom: calc(var(--vh, 1vh) * 5);
  }
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
.msg{
  font-size: 3vw;
  margin-top: 2vw;
}
.return{
  margin-bottom: 2vw;
  border-radius: 2vw;
  font-size: 2vw;
  padding: 0.1vw 0;
  width: 12vw;
  box-shadow: 0vw 0vw 0.4vw #000;
  text-shadow: 0vw 0vw 0.2vw #000;
}
.return:active{
  box-shadow:  inset 0vw 0vw 0.2vw #000;
}
.popup {
  width: 30vw;
  height:30vh;
  left: calc(50% - 15vw);
  top: calc(50% - 15vh);
  border-radius: 1vw;
}
  input {
    user-select: all;
    background-color: transparent;
    width: 45vw;
    height: 5vw;
    text-align: center;
    font-size: 4vw;
    border: none;
    box-shadow: none;
    border-bottom: 0.1vw solid #fff;
    caret-color: #ac40f1;
    color: #fff;
    margin-bottom: 4vw;
  }
  .currentTab {
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
  }
  .Next_Button {
    border-radius: 2.5vw;
    background: #ac40f1;
    border: 0.1vw solid #ac40f1;
    color: #fff;
    font-size: 2.5vw;
    padding: 0.2vw 3vw;
    cursor: pointer;
    box-shadow: 0vw 0vw 0.2vw #000;
    text-shadow: 0vw 0vw 0.1vw #000;
    animation: cycle 2s linear infinite;
  }
  .Next_Button:active {
    box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
  }
}
@media screen and (max-width: 1000px) and (orientation:  landscape) {
  input:focus {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    user-select: all;
    background-color: #fff;
    height: 100vh;
    text-align: center;
    font-size: 8vw;
    border: none;
    border-bottom: 0.1vw solid #ac40f1;
    caret-color: #ac40f1;
    color: #ac40f1;
  }
  .iphoneTrue:focus {
    all: initial;
    user-select: all;
    background-color: transparent;
    width: 85vw;
    height: 9vw;
    text-align: center;
    font-size: 8vw;
    border: none;
    box-shadow: none;
    border-bottom: 0.1vw solid #ac40f1;
    caret-color: #ac40f1;
    color: #ac40f1;
    margin-bottom: calc(var(--vh, 1vh) * 5);
  }
}
</style>