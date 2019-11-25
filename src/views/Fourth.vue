<template>
  <div id="app">
    <header>Human 2020</header>
    <h1 class="BackNumber">2020</h1>
    <main>
      <section class="workSpace">
        <section class="progressBar active">
          <personsvg class="personSVG"></personsvg>
          <arrowsvg class="arrowSVG"></arrowsvg>
          <hangersvg class="hangerSVG"></hangersvg>
          <arrowsvg class="arrowSVG"></arrowsvg>
          <seekersvg class="seekerSVG"></seekersvg>
          <arrowsvg class="arrowSVG"></arrowsvg>
          <awardsvg class="awardSVG Champ"></awardsvg>
        </section>
        <section class="configurator">
          <!-- <p class="sooon">DeVeLoPeRs aRe WoRkInG oN tHiS sCrEeN😤🤕😘</p> -->
          <section class="charts">
            <chartd v-if="isDesktop" :sections="chartSections" :hardSkill="hardSkillName"></chartd>
            <chartm v-else :sections="chartSections" :hardSkill="hardSkillName"></chartm>
          </section>
          <section class="conclusion">{{$t('Fourth.text')}}</section>
        </section>
      </section>
      <section class="canvascontainer" ref="canvascontainer">
        <!-- <p class="description">Statistics from around the WORLD will be collected here...🌍</p> -->
        <v-stage ref="stage" :config="stage">
          <v-layer>
            <v-text :config="{text:'Global 2020', fontSize:60, x:350, y:20, fill:'#ac40f1'}"></v-text>
            <v-image :config="{image:podium, x: 320, y:1060, scale:{x:2,y:2}}"></v-image>
            <v-image :config="{image:human, x: 340, y:140, scale:{x:1,y:1}}"></v-image>
            <v-image :config="{image:pants, x:pantsPosX,y:pantsPosY, scale:{x:.3801,y:.3801}}"></v-image>
            <v-image :config="{image:shoes, x:shoesPosX,y:shoesPosY, scale:{x:.3801,y:.3801}}"></v-image>
            <v-image :config="{image:shirt, x:shirtPosX,y:shirtPosY, scale:{x:.3801,y:.3801}}"></v-image>
            <v-image :config="{image:jacket, x:jacketPosX,y:jacketPosY, scale:{x:.3801,y:.3801}}"></v-image>
            <v-image
              :config="{image:accessories, x:accessoriesPosX,y:accessoriesPosY, scale:{x:.38,y:.38}}"
            ></v-image>
            <v-image :config="{image:hair, x:hairPosX,y:hairPosY, scale:{x:.38,y:.38}}"></v-image>
          </v-layer>
        </v-stage>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      stage: {
        width: this.stageWidth,
        height: this.stageHeight
      },
      width: window.innerWidth,
      stageWidth: 1000,
      stageHeight: 1282,
      human: null,
      hair: null,
      hairPosX: 0,
      hairPosY: 0,
      jacket: null,
      jacketPosX: 0,
      jacketPosY: 0,
      shirt: null,
      shirtPosX: 0,
      shirtPosY: 0,
      pants: null,
      pantsPosX: 0,
      pantsPosY: 0,
      accessories: null,
      accessoriesPosX: 0,
      accessoriesPosY: 0,
      shoes: null,
      shoesPosX: 0,
      shoesPosY: 0,
      canvascontainer: "",
      podium: null,

      gender: "",
      humanHead: null,
      humanShirt: null,
      humanJackets: null,
      humanPants: null,
      humanShoes: null,
      humanAccessories: null,
      hardSkillPoints: 0,
      softSkillsPoints: 0,
      hardSkillName: "",
      Initiative: 0,
      Creativity: 0,
      Adaptability: 0,
      Reflection: 0,
      Multitasking: 0,
      ListeningSkills: 0,
      Teamwork: 0,
      CriticalThinking: 0,
      TimeManagement: 0
    };
  },
  computed: {
    humanLink() {
      if (this.gender === "male") {
        return require("../assets/boy.png");
      } else if (this.gender === "female") {
        return require("../assets/girl.png");
      } else return null;
    },
    chartSections(){
      return [
        {
          label: "Initiative - "+this.Initiative,
          value: this.Initiative,
          color: '#00C0D2'
        },
        {
          label: "Creativity - "+this.Creativity,
          value: this.Creativity,
          color: '#FFDF00'
        },
        {
          label: "Adaptability - "+this.Adaptability,
          value: this.Adaptability,
          color: '#FF7600'
        },
        {
          label: "Reflection - "+this.Reflection,
          value: this.Reflection,
          color: '#00FF00'
        },
        {
          label: "Multitasking - "+this.Multitasking,
          value: this.Multitasking,
          color: '#FF0015'
        },
        {
          label: "ListeningSkills - "+this.ListeningSkills,
          value: this.ListeningSkills,
          color: '#D6F700'
        },
        {
          label: "Teamwork - "+this.Teamwork,
          value: this.Teamwork,
          color: '#3F3FC2'
        },
        {
          label: "CriticalThinking - "+this.CriticalThinking,
          value: this.CriticalThinking,
          color: '#00AD51'
        },
        {
          label: "TimeManagement - "+this.TimeManagement,
          value: this.TimeManagement,
          color: '#BA5CAB'
        },
        {
          label: this.hardSkillName,
          value: this.hardSkillPoints,
          color: '#FF6384'
        },
      ]
    },
    isDesktop: function() {
      if ((this.width >= 560)&&((window.innerWidth/window.innerHeight) >1)) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    changeCanvas() {
      this.canvascontainer = this.$refs.canvascontainer;
      if (!this.canvascontainer) {
        return;
      }
      var width = this.canvascontainer.offsetWidth;
      var scale = width / this.stageWidth;
      this.stage.width = this.stageWidth * scale;
      this.stage.height = this.stageHeight * scale;
      this.stage.scaleX = scale;
      this.stage.scaleY = scale;
    },
    newGender() {
      const image = new window.Image();
      image.src = this.humanLink;
      image.onload = () => {
        this.human = image;
      };
    },
    newHair() {
      const image = new window.Image();
      image.src = this.humanHead.src;
      image.onload = () => {
        this.hair = image;
      };
      this.hairPosX = this.humanHead.posX;
      this.hairPosY = this.humanHead.posY;
    },
    newJacket() {
      const image = new window.Image();
      image.src = this.humanJackets.src;
      image.onload = () => {
        this.jacket = image;
      };
      this.jacketPosX = this.humanJackets.posX;
      this.jacketPosY = this.humanJackets.posY;
    },
    newShirt() {
      const image = new window.Image();
      image.src = this.humanShirt.src;
      image.onload = () => {
        this.shirt = image;
      };
      this.shirtPosX = this.humanShirt.posX;
      this.shirtPosY = this.humanShirt.posY;
    },
    newPants() {
      const image = new window.Image();
      image.src = this.humanPants.src;
      image.onload = () => {
        this.pants = image;
      };
      this.pantsPosX = this.humanPants.posX;
      this.pantsPosY = this.humanPants.posY;
    },
    newAccessories() {
      const image = new window.Image();
      image.src = this.humanAccessories.src;
      image.onload = () => {
        this.accessories = image;
      };
      this.accessoriesPosX = this.humanAccessories.posX;
      this.accessoriesPosY = this.humanAccessories.posY;
    },
    newShoes() {
      const image = new window.Image();
      image.src = this.humanShoes.src;
      image.onload = () => {
        this.shoes = image;
      };
      this.shoesPosX = this.humanShoes.posX;
      this.shoesPosY = this.humanShoes.posY;
    }
  },
  watch: {
    humanLink: function() {
      this.newGender();
    },
    humanHead() {
      this.newHair();
    },
    humanJackets: function() {
      this.newJacket();
    },
    humanShirt: function() {
      this.newShirt();
    },
    humanPants: function() {
      this.newPants();
    },
    humanAccessories: function() {
      this.newAccessories();
    },
    humanShoes: function() {
      this.newShoes();
    }
  },
  components: {
    personsvg: () =>
      import(
        /* webpackChunkName: "personSVG", webpackPrefetch: 989 */ "../components/SVG/personSVG.vue"
      ),
    arrowsvg: () =>
      import(
        /* webpackChunkName: "arrowSVG", webpackPrefetch: 988 */ "../components/SVG/arrowSVG.vue"
      ),
    hangersvg: () =>
      import(
        /* webpackChunkName: "hangerSVG", webpackPrefetch: 987 */ "../components/SVG/hangerSVG.vue"
      ),
    seekersvg: () =>
      import(
        /* webpackChunkName: "seekerSVG", webpackPrefetch: 986 */ "../components/SVG/seekerSVG.vue"
      ),
    awardsvg: () =>
      import(
        /* webpackChunkName: "awardSVG", webpackPrefetch: 985 */ "../components/SVG/awardSVG.vue"
        ),
    chartd: () =>
      import(
        /* webpackChunkName: "chartD", webpackPrefetch: 801 */ "../components/charts/chartD.vue"
        ),
    chartm: () =>
      import(
        /* webpackChunkName: "chartD", webpackPrefetch: 801 */ "../components/charts/chartM.vue"
        ),
  },
  async beforeCreate(){
   await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.hardSkillName
					FROM
					    commons.H2020Collection
					WHERE
						H2020Collection.hardSkillName <> 'null'
					GROUP BY
					    H2020Collection.hardSkillName
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.hardSkillName = response.data.results[0].hardSkillName;
      })
      .catch(error => {
        this.hardSkillName = error;
      });
  },
  created() {
    window.addEventListener("resize", this.changeCanvas());
    const podium = new window.Image();
    podium.src = require("../assets/podium.png");
    podium.onload = () => {
      this.podium = podium;
    };
  },
  async mounted() {
    this.changeCanvas();
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Получение gender
    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender
					FROM
					    commons.H2020Collection
					GROUP BY
					    H2020Collection.gender
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.gender = response.data.results[0].gender;
      })
      .catch(error => {
        this.gender = error;
      });

    // Получение humanHead

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanHead
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanHead.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanHead
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanHead = response.data.results[0].humanHead;
      })
      .catch(error => {
        this.humanHead = error;
      });
    // Получение humanShirt

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanShirt
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanShirt.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanShirt
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanShirt = response.data.results[0].humanShirt;
      })
      .catch(error => {
        this.humanShirt = error;
      });

    // Получение humanJackets

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanJackets
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanJackets.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanJackets
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanJackets = response.data.results[0].humanJackets;
      })
      .catch(error => {
        this.humanJackets = error;
      });

    // Получение humanPants

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanPants
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanPants.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanPants
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanPants = response.data.results[0].humanPants;
      })
      .catch(error => {
        this.humanPants = error;
      });

    // Получение humanShoes

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanShoes
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanShoes.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanShoes
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanShoes = response.data.results[0].humanShoes;
      })
      .catch(error => {
        this.humanShoes = error;
      });

    // Получение humanAccessories

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    H2020Collection.gender,
					    H2020Collection.humanAccessories
					FROM
					    commons.H2020Collection
					WHERE
					    H2020Collection.humanAccessories.id <> 0
					    and H2020Collection.gender = (
					        SELECT
					            H2020Collection.gender
					        FROM
					            commons.H2020Collection
					        GROUP BY
					            H2020Collection.gender
					        ORDER BY
					            COUNT(*) DESC
					        limit
					            1
					    )
					GROUP BY
					    H2020Collection.gender,
					    H2020Collection.humanAccessories
					ORDER BY
					    COUNT(*) DESC
					LIMIT
					    1`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.humanAccessories = response.data.results[0].humanAccessories;
      })
      .catch(error => {
        this.humanAccessories = error;
      });

    // Получение hardSkillName


    // Получение SoftSkills

    await axios
      .post(
        "https://api.rs2.usw2.rockset.com/v1/orgs/self/queries",
        {
          sql: {
            query: `SELECT
					    round(AVG(H2020Collection.Initiative)) AS Initiative,
    					round(AVG(H2020Collection.Creativity)) AS Creativity,
    					round(AVG(H2020Collection.Adaptability)) AS Adaptability,
    					round(AVG(H2020Collection.Reflection)) AS Reflection,
    					round(AVG(H2020Collection.Multitasking)) AS Multitasking,
    					round(AVG(H2020Collection.ListeningSkills)) AS ListeningSkills,
    					round(AVG(H2020Collection.Teamwork)) AS Teamwork,
    					round(AVG(H2020Collection.CriticalThinking)) AS CriticalThinking,
    					round(AVG(H2020Collection.TimeManagement)) AS TimeManagement,
    					round(AVG(H2020Collection.hardSkillPoints)) AS hardSkillPoints,
    					round(AVG(H2020Collection.softSkillsPoints)) AS softSkillsPoints
					FROM
					    commons.H2020Collection`
          }
        },
        {
          headers: {
            Authorization:
              "ApiKey TVjJpzuiOaUQJfo6MA18EpunKDdWfQiQUANLK69T01ysoQhWbkbo89jtpcZLv0gv"
          }
        }
      )
      .then(response => {
        this.Initiative = response.data.results[0].Initiative;
        this.Creativity = response.data.results[0].Creativity;
        this.Adaptability = response.data.results[0].Adaptability;
        this.Reflection = response.data.results[0].Reflection;
        this.Multitasking = response.data.results[0].Multitasking;
        this.ListeningSkills = response.data.results[0].ListeningSkills;
        this.Teamwork = response.data.results[0].Teamwork;
        this.CriticalThinking = response.data.results[0].CriticalThinking;
        this.TimeManagement = response.data.results[0].TimeManagement;
        this.hardSkillPoints = response.data.results[0].hardSkillPoints;
        this.softSkillsPoints = response.data.results[0].softSkillsPoints;
      })
      .catch(error => {
        this.Initiative = error;
      });
  },
  updated() {
    this.changeCanvas();
  },
  beforeDestroy() {
    this.$router.push("/create/personalisation");
  }
};
</script>

<style scoped>
.personSVG,
.awardSVG,
.seekerSVG,
.hangerSVG {
  height: 8vw;
}
.arrowSVG {
  height: 5vw;
  transform: rotate(270deg);
}
footer {
  position: relative;
  display: none;
  width: 94vw;
  align-items: center;
  justify-content: space-between;
}
.leftButtonGroup {
  display: flex;
  justify-content: flex-start;
}
.progressBar {
  height: calc(var(--vh, 1vh) * 40);
  right: 10vw;
  top: calc(var(--vh, 1vh) * 11);
  position: absolute;
  z-index: 0;
  border-radius: 0.3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  fill: rgb(138, 138, 138);
}
.active {
  fill: rgb(255, 255, 255);
}
.Champ {
  fill: rgba(0, 54, 155, 0.877);
}
.configurator {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 35vh;
  width: 100vw;
  border-radius: 0.5vw;
  z-index: 999;
  background-color: rgb(255, 255, 255);
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.conclusion {
    width: 80vw;
    flex-shrink: 0;
    font-size: 3vw;
    color: #fff;
    font-weight: 400;
    
  }
  .charts{
    width: 135vw;
    flex-shrink: 0;
  }
.sooon {
  font-size: 12vw;
  color: rgb(71, 243, 255);
  text-align: center;
  line-height: 12vw;
  align-self: center;
  text-shadow: 0 0 1vw rgb(48, 2, 173);
  font-weight: 700;
}
.description {
  color: rgb(48, 2, 173);
  font-size: 8vw;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 0 0.5vw #fff;
}
.canvascontainer {
  height: calc(var(--vh, 1vh) * 60);
  width: calc(var(--vh, 1vh) * 46.9);
}
.workSpace {
  order: 2;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
}
header {
  display: none;
}
.BackNumber {
  color: azure;
  transform: rotate(-64deg);
  font-size: 70vw;
  color: #000;
  opacity: 0.1;
  position: absolute;
  z-index: 0;
}
.GoBack_button {
  background: none;
  border: none;
  font-size: 1.5vw;
  color: #fff;
  font-weight: 300;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0vw 0vw 15vw 1vw #000;
  padding: 0.3vw 2vw;
  border-radius: 3vw;
  display: flex;
  align-items: center;
  margin-right: 1vw;
}
.GoNext_button {
  background-color: #ac40f1;
  border: none;
  font-size: 1.5vw;
  color: #fff;
  font-weight: 300;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0vw 0vw 15vw 1vw #000;
  padding: 0.3vw 2vw;
  border-radius: 3vw;
  display: flex;
  align-items: center;
  margin-right: initial;
  margin-bottom: 1vw;
  box-shadow: 0vw 0vw 0.2vw #000;
  text-shadow: 0vw 0vw 0.1vw #000;
}
.GoNext_button:active {
  box-shadow: inset 0.2vw 0.2vw 0.3vw #000;
}
.arrowbutton {
  width: 1.5vw;
  fill: #fff;
  margin-right: 0.5vw;
}
.arrowright {
  width: 1.5vw;
  fill: #fff;
  margin-left: 0.5vw;
  transform: rotate(180deg);
}
@media screen and (min-width: 760px) and (max-width: 999px) {
}

@media screen and (min-width: 1000px), (orientation: landscape) {
  .BackNumber {
    transform: rotate(-10deg);
    font-size: 45vw;
  }
  main {
    height: 100vh;
    flex-direction: row;
    justify-content: space-around;
  }
  .personSVG,
  .awardSVG,
  .seekerSVG,
  .hangerSVG {
    height: 5.5vw;
  }
  .arrowSVG {
    height: 3vw;
    transform: rotate(180deg);
  }
  footer {
    display: flex;
    width: 94vw;
    align-items: center;
    justify-content: space-between;
  }
  .leftButtonGroup {
    display: flex;
    justify-content: flex-start;
  }
  .progressBar {
    height: 6vw;
    width: 55vw;
    border-radius: 0.3vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    fill: rgb(189, 189, 189);
    height: 6vw;
    right: initial;
    top: initial;
    position: initial;
    flex-direction: row;
  }
  .active {
    fill: #fff;
  }
  .configurator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35vw;
    width: 55vw;
    border-radius: 0.5vw;
    background-color: rgba(0, 0, 0, 0.25);
    flex-shrink: 0;
    overflow-x: hidden;
  }
  .conclusion {
    width: 45%;
  }
  .charts{
    width: 55%;
  }
  .sooon {
    font-size: 7vw;
    color: #fff;
    text-align: center;
    line-height: 7.5vw;
    align-self: center;
    text-shadow: 0 0 1vw rgb(48, 2, 173);
    font-weight: 700;
  }
  .description {
    color: rgb(48, 2, 173);
    font-size: 4vw;
    font-weight: 700;
    text-align: center;
    text-shadow: 0 0 0.5vw #fff;
  }
  .canvascontainer {
    height: 41vw;
    order: 2;
    width: 32vw;
    border-radius: 0.5vw;
    background-color: rgb(255, 255, 255);
  }
  .workSpace {
    order: 2;
    display: flex;
    flex-direction: column;
  }
  #app {
    display: flex;
    height: 100vh;
  }
  .GoBack_button {
    margin-bottom: 1vw;
  }
  @-moz-document url-prefix() {
    #app {
      height: 100vh;
    }
  }
}
@media screen and (max-width: 999px) and (orientation: landscape){
	main{
		height: 70vh;
	}
	.progressBar{
		width: 35vw;
		border-radius: .3vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		fill: rgb(189, 189, 189);
		height: 4vw;
		right: initial;
		top: initial;
		position: initial;
		flex-direction: row;
	}
	.configurator{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		height: 26vw;
		width: 55vw;
		border-radius: .5vw;
		background-color: rgba(0, 0, 0, 0.25);
	}
  .configurator {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5vw;
    background-color: rgba(0, 0, 0, 0.25);
    flex-shrink: 0;
  }
  .conclusion {
    width: 45%;
  }
  .charts{
    width: 45%;
  }
	.personSVG, .awardSVG, .seekerSVG, .hangerSVG{
		height: 3.8vw;
	}
	.arrowSVG{
		height: 2vw;
		transform: rotate(180deg);
	}
	.canvascontainer{
		height: 30vw;
		order: 2;
		width: 23.4vw;
		border-radius: .5vw;
		background-color: rgb(255, 255, 255);
	}
	.workSpace{
		order: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	footer{
		width: 89vw;
	}
	.mobileMain{
		height: 100vh;
	}
}
</style>