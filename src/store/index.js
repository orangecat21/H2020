import Vue from 'vue'
import Vuex from 'vuex'
import hairArrayMale from './modules/hairArrayMale'
import hairArrayFemale from './modules/hairArrayFemale'
import jacketsArray from './modules/jacketsArray'
import shirtsArray from './modules/shirtsArray'
import pantsArray from './modules/pantsArray'
import accessoriesArray from './modules/accessoriesArray'
import shoesArray from './modules/shoesArray'
import hardSkillArray from './modules/hardSkillArray'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    humanName:'',
    humanHead:{
      id:0,
      src:'null',
      posX:0,
      posY:0,
      z:11
    },
    humanShirt:{
      id:0,
      src:'null',
      posX:0,
      posY:0,
      z:8
    },
    humanJackets:{
      id:0,
      src:'null',
      posX:0,
      posY:0,
      z:9
    },
    humanPants:{
      id:0,
      src:'null',
      posX:0,
      posY:0,
      z:4
    },
    humanShoes:{
      id:0,
      src:'null',
      icon:'null',
      posX:0,
      posY:0,
      z:5
    },
    humanAccessories:{
      id:0,
      src:'null',
      posX:0,
      posY:0,
      z:10
    },
    sumOfSkills:1000,
    hardSkillPoints:0,
    softSkillsPoints:0,
    hardSkillName:'null',
    Initiative: 0,
    Creativity:0,
    Adaptability:0,
    Reflection:0,
    Multitasking:0,
    ListeningSkills:0,
    Teamwork:0,
    CriticalThinking:0,
    TimeManagement:0,
    humanImg:null,
    skillInputActive: false,
    popupActive:false
    },
  getters:{
    popupActive: state => {
      return state.popupActive
    },
    skillInputActive: state => {
      return state.skillInputActive
    },
    HUMAN_IMG: state =>{
      return state.humanImg
    },
    GENDER: state => {
      return state.gender
    },
    HUMAN_NAME: state => {
      return state.humanName
    },
    HUMAN_HEAD: state => {
      return state.humanHead
    },
    HUMAN_SHIRT: state => {
      return state.humanShirt
    },
    HUMAN_PANTS: state => {
      return state.humanPants
    },
    HUMAN_SHOES: state => {
      return state.humanShoes
    },
    HUMAN_ACCESSORIES: state => {
      return state.humanAccessories
    },
    HUMAN_JACKET: state => {
      return state.humanJackets
    },
    SUMOFSKILLS:state => {
      return state.sumOfSkills
    },
    HARDSKILL: state => {
      return state.hardSkillPoints
    },
    SOFTSKILLS: state => {
      return state.softSkillsPoints
    },
    HARDSKILLNAME: state => {
      return state.hardSkillName
    }
  },
  mutations: {
    SET_POPUP: (state, payload) => {
      state.popupActive = payload
    },
    SET_ORDER: (state, payload) => {
      state.skillInputActive = payload
    },
    SET_GENDER: (state,payload) =>{
      state.gender = payload
    },
    SET_NAME: (state, payload) =>{
      state.humanName = payload
    },
    SET_HEAD: (state, payload) =>{
      state.humanHead = payload
    },
    SET_JACKET: (state, payload) =>{
      state.humanJackets = payload
    },
    SET_SHIRT: (state, payload) =>{
      state.humanShirt = payload
    },
    SET_PANTS: (state, payload) =>{
      state.humanPants = payload
    },
    SET_ACCESSORIES: (state, payload) =>{
      state.humanAccessories = payload
    },
    SET_SHOES: (state, payload) =>{
      state.humanShoes = payload
    },
    SET_SOFTSKILLS: (state, payload) =>{
      state.softSkillsPoints = payload
    },
    SET_HARDSKILL: (state, payload) =>{
      state.hardSkillPoints = payload
    },
    SET_HARDSKILL_NAME: (state, payload) =>{
      state.hardSkillName = payload
    },
    SET_INITIATIVE: (state, payload) =>{
      state.Initiative = payload
    },
    SET_CREATIVITY: (state, payload) =>{
      state.Creativity = payload
    },
    SET_ADAPTABILITY: (state, payload) =>{
      state.Adaptability = payload
    },
    SET_REFLECTION: (state, payload) =>{
      state.Reflection = payload
    },
    SET_MULTITASKING: (state, payload) =>{
      state.Multitasking = payload
    },
    SET_LISTENING: (state, payload) =>{
      state.ListeningSkills = payload
    },
    SET_TEAMWORK: (state, payload) =>{
      state.Teamwork = payload
    },
    SET_CRITICAL: (state, payload) =>{
      state.CriticalThinking = payload
    },
    SET_TIMEMANAGEMENT: (state, payload) =>{
      state.TimeManagement = payload
    },
    SET_HUMANIMG: (state, payload) =>{
      state.humanImg = payload
    },
  },
  actions: {
    PUSH_POPUP: (context, payload) => {
      context.commit('SET_POPUP', payload)
    },
    PUSH_ORDER: (context, payload) => {
      context.commit('SET_ORDER', payload)
    },
    PUSH_HUMANIMG: (context, payload) =>{
      context.commit('SET_HUMANIMG', payload)
    },
    PUSH_HARDSKILL_NAME: (context, payload) =>{
      context.commit('SET_HARDSKILL_NAME', payload)
    },
    PUSH_SOFTSKILLS: async (context, payload) => {
      context.commit('SET_SOFTSKILLS', payload)
    },
    PUSH_HARDSKILL: async (context, payload) => {
      context.commit('SET_HARDSKILL', payload)
    },
    GET_GENDER: async (context, payload) => {
      context.commit('SET_GENDER', payload)
    },
    PUSH_NAME: async (context, payload) =>{
      context.commit('SET_NAME', payload)
    },
    PUSH_HEAD: async (context, payload) =>{
      context.commit('SET_HEAD', payload)
    },
    PUSH_JACKETS: async (context, payload) =>{
      context.commit('SET_JACKET', payload)
    },
    PUSH_SHIRTS: async (context, payload) =>{
      context.commit('SET_SHIRT', payload)
    },
    PUSH_PANTS: async (context, payload) =>{
      context.commit('SET_PANTS', payload)
    },
    PUSH_ACCESSORIES: async (context, payload) =>{
      context.commit('SET_ACCESSORIES', payload)
    },
    PUSH_SHOES: async (context, payload) =>{
      context.commit('SET_SHOES', payload)
    },
    PUSH_INITIATIVE: async (context, payload) =>{
      context.commit('SET_INITIATIVE', payload)
    },
    PUSH_CREATIVITY: async (context, payload) =>{
      context.commit('SET_CREATIVITY', payload)
    },
    PUSH_ADAPTABILITY: async (context, payload) =>{
      context.commit('SET_ADAPTABILITY', payload)
    },
    PUSH_REFLECTION: async (context, payload) =>{
      context.commit('SET_REFLECTION', payload)
    },
    PUSH_MULTITASKING: async (context, payload) =>{
      context.commit('SET_MULTITASKING', payload)
    },
    PUSH_LISTENING: async (context, payload) =>{
      context.commit('SET_LISTENING', payload)
    },
    PUSH_TEAMWORK: async (context, payload) =>{
      context.commit('SET_TEAMWORK', payload)
    },
    PUSH_CRITICAL: async (context, payload) =>{
      context.commit('SET_CRITICAL', payload)
    },
    PUSH_TIMEMANAGEMENT: async (context, payload) =>{
      context.commit('SET_TIMEMANAGEMENT', payload)
    },
  },
  modules:{
    hairArrayMale,
    hairArrayFemale,
    jacketsArray,
    shirtsArray,
    pantsArray,
    accessoriesArray,
    shoesArray,
    hardSkillArray
  },
})
