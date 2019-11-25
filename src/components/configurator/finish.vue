<template>
  <section>
    <section class="overlay" @click="goToNext"></section>
    <section class="popup">
      <section class="text">
        <p class="name">{{ humanName }}</p>
        <p class="hardskill">Hard Skills: {{$t(hardSkill)}} ({{ hardSkillPoints }} points)</p>
        <p class="softtitle">Soft Skills:</p>
        <section class="softskills">
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Initiative')}}</p>
            <p class="percent">{{ Initiative }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Creativity')}}</p>
            <p class="percent">{{ Creativity }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Adaptability')}}</p>
            <p class="percent">{{ Adaptability }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Reflection')}}</p>
            <p class="percent">{{ Reflection }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Multitasking')}}</p>
            <p class="percent">{{ Multitasking }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Listening skills')}}</p>
            <p class="percent">{{ ListeningSkills }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Teamwork')}}</p>
            <p class="percent">{{ Teamwork }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Critical thinking')}}</p>
            <p class="percent">{{ CriticalThinking }}</p>
          </div>
          <div class="skillItem">
            <p>{{$t('thirdPage.softskill.Time management')}}</p>
            <p class="percent">{{ TimeManagement }}</p>
          </div>
        </section>
        <section class="download" @click="downloadImage">
          <downloadsvg class="downloadSVG"></downloadsvg>
          <p>{{$t('thirdPage.popup.share')}}<br><a class="linkedin" href="https://www.instagram.com/human_2020_/">Our instagram</a><br> #2020 #human2020 #choiceourfutures #lifestyle #international #world #fashion #art #following</p>
        </section>
        <section class="YourOpinion">
          <img :src="imgSrc" alt="Your human" />
        </section>
      </section>
      <img class="desctopIMG" :src="imgSrc" alt="Your human" />
    </section>
  </section>
</template>

<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { createAnswer } from "../../graphql/mutations";
export default {
  name: "finish",
  computed: {
    imgSrc() {
      return this.$store.getters.HUMAN_IMG;
    },
    gender() {
      return this.$store.getters.GENDER;
    },
    humanName() {
      return this.$store.getters.HUMAN_NAME;
    },
    humanHead() {
      return this.$store.getters.HUMAN_HEAD;
    },
    humanShirt() {
      return this.$store.getters.HUMAN_SHIRT;
    },
    humanPants() {
      return this.$store.getters.HUMAN_PANTS;
    },
    humanShoes() {
      return this.$store.getters.HUMAN_SHOES;
    },
    humanAccessories() {
      return this.$store.getters.HUMAN_ACCESSORIES;
    },
    humanJackets() {
      return this.$store.getters.HUMAN_JACKET;
    },
    hardSkill() {
      return this.$store.getters.HARDSKILLNAME;
    },
    hardSkillPoints() {
      return this.$store.getters.HARDSKILL;
    },
    softSkillsPoints() {
      return this.$store.getters.SOFTSKILLS;
    },
    Initiative() {
      return this.$store.state.Initiative;
    },
    Creativity() {
      return this.$store.state.Creativity;
    },
    Adaptability() {
      return this.$store.state.Adaptability;
    },
    Reflection() {
      return this.$store.state.Reflection;
    },
    Multitasking() {
      return this.$store.state.Multitasking;
    },
    ListeningSkills() {
      return this.$store.state.ListeningSkills;
    },
    Teamwork() {
      return this.$store.state.Teamwork;
    },
    CriticalThinking() {
      return this.$store.state.CriticalThinking;
    },
    TimeManagement() {
      return this.$store.state.TimeManagement;
    }
  },
  methods: {
    goToBack() {
      this.$router.push("/create/soft_skill");
    },
    goToNext() {
      this.$router.push("/stats");
    },
    downloadImage() {
      function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      var dataURL = this.imgSrc;
      downloadURI(dataURL, "human2020.png");
      setTimeout(() => {
        this.$router.push("/stats");
      }, 1000);
    }
  },
  beforeDestroy() {
    this.$router.push("/stats");
  },
  components: {
    downloadsvg: () =>
      import(
        /* webpackChunkName: "downloadsvg", webpackPrefetch: 958 */ "../SVG/downloadSVG.vue"
      )
  },
  async mounted() {
    const answer = {
      gender: this.gender,
      humanName: this.humanName,
      humanHead: this.humanHead,
      humanShirt: this.humanShirt,
      humanJackets: this.humanJackets,
      humanPants: this.humanPants,
      humanShoes: this.humanShoes,
      humanAccessories: this.humanAccessories,
      hardSkillPoints: this.hardSkillPoints,
      softSkillsPoints: this.softSkillsPoints,
      hardSkillName: this.hardSkill,
      Initiative: this.Initiative,
      Creativity: this.Creativity,
      Adaptability: this.Adaptability,
      Reflection: this.Reflection,
      Multitasking: this.Multitasking,
      ListeningSkills: this.ListeningSkills,
      Teamwork: this.Teamwork,
      CriticalThinking: this.CriticalThinking,
      TimeManagement: this.TimeManagement
    };
    await API.graphql(graphqlOperation(createAnswer, { input: answer }));
  }
};
</script>

<style scoped>
.linkedin{
  font-size: 5vw;
}
p {
  color: #ac40f1;
  font-size: 3vw;
}
.desctopIMG {
  display: none;
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
  width: 75vw;
  height: 70vh;
  background: linear-gradient(rgb(100, 255, 131), rgb(0, 247, 255));
  left: calc(50% - 37vw);
  top: calc(50% - 35vh);
  z-index: 999;
  flex-shrink: 0;
  border-radius: 2vw;
}
.name {
  text-transform: capitalize;
  flex-basis: 100%;
  order: 1;
  width: 100%;
  text-align: center;
}
.text {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
  padding: 1vw;
}
.softskills {
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  order: 6;
  flex-basis: 100%;
}
.skillItem {
  width: 23vw;
  height: 10vw;
  border-radius: 1vw;
  transition: 0.3s;
  background: #ffffff;
  border: none;
  margin-bottom: 1vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0vw 0vw 0.5vw#000;
  text-align: center;
}
.skillItem p {
  font-size: 2.5vw;
  line-height: 2vw;
}
.download {
  width: 48%;
  flex-basis: 48%;
  display: flex;
  order: 2;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
}
.YourOpinion {
  order: 3;
  flex-basis: 52%;
  width: 52%;
  height: 40vh;
}
.YourOpinion img {
  width: 140%;
  transform: translateX(-10vw);
}
.download p {
  order: 1;
  font-size: 3.5vw;
  margin-left: 0.5vw;
}
.downloadSVG {
  order: 2;
  width: 12vw;
  fill: #ac40f1;
  border: 0.1vw solid #ac40f1;
  padding: 1vw 1vw;
  margin: 2vw 0 0 8vw;
  border-radius: 2vw;
  box-shadow: 0 0 0.5vw #000;
  animation: cycle 2s linear infinite;
}
.downloadSVG:hover {
  box-shadow: inset 0 0 0.5 #000;
}
.softtitle {
  order: 4;
  flex-basis: 20%;
}
.hardskill {
  order: 5;
  flex-basis: 80%;
  text-align: right;
}
@keyframes cycle {
    35% {
      transform: rotate(0) translate(0, 0);
    }
    40% {
      transform: rotate(7deg) translate(0, -2px);
    }
    45% {
      transform: rotate(-5deg) translate(0, -2px);
    }
    50% {
      transform: rotate(7deg) translate(0, -2px);
    }
    55% {
      transform: rotate(-5deg) translate(0, -2px);
    }
    60% {
      transform: rotate(7deg) translate(0, -2px);
    }
    65% {
      transform: rotate(-5deg) translate(0, -2px);
    }
    70% {
      transform: rotate(0) translate(0, 0);
    }
  }
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .linkedin{
  font-size: 2vw;
}
  .YourOpinion {
    display: none;
  }
  p {
    font-size: 1.8vw;
  }
  .desctopIMG {
    display: initial;
    position: relative;
    width: 43%;
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0.8;
    cursor: pointer;
  }
  .popup {
    flex-direction: row;
    height: 80vh;
    top: calc(50% - 38vh);
    padding: 2vw 0vw 2vw 2vw;
    border-radius: 2vw;
  }
  .name {
    text-transform: capitalize;
    flex-basis: initial;
    order: initial;
    width: initial;
    text-align: initial;
  }
  .text {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 55%;
    flex-wrap: initial;
    padding: initial;
  }
  .softskills {
    justify-content: space-between;
    order: initial;
    flex-basis: initial;
  }
  .skillItem {
    width: 12vw;
    height: 5vw;
    border-radius: 0.5vw;
  }
  .skillItem p {
    font-size: 1.2vw;
    line-height: initial;
  }
  .download {
    flex-basis: initial;
    order: initial;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .download p {
    order: initial;
    font-size: 1.6vw;
    margin-left: 0.5vw;
  }
  .downloadSVG {
    order: initial;
    width: 8vw;
    fill: #ac40f1;
    border: 0.1vw solid #ac40f1;
    padding: 1vw 1vw;
    margin: 0 0 0 0;
    border-radius: 1vw;
    box-shadow: 0 0 0.2vw #000;
    animation: cycle 2s linear infinite;
  }
  .downloadSVG:hover {
    box-shadow: inset 0 0 0.2vw #000;
  }
  .softtitle {
    order: initial;
    flex-basis: initial;
  }
  .hardskill {
    order: initial;
    flex-basis: initial;
    text-align: initial;
  }
}
</style>