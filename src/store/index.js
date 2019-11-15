import Vue from 'vue'
import Vuex from 'vuex'
import hairArrayMale from './modules/hairArrayMale'
import hairArrayFemale from './modules/hairArrayFemale'
import jacketsArray from './modules/jacketsArray'
import shirtsArray from './modules/shirtsArray'
import pantsArray from './modules/pantsArray'
import accessoriesArray from './modules/accessoriesArray'
import shoesArray from './modules/shoesArray'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    humanName:'',
    humanHead:'',
    humanShirt:'',
    humanJackets:'',
    humanPants:'',
    humanShoes:'',
    humanAccessories:'',
    sumOfSkills:1000,
    hardSkill:0,
    softSkills:0
    },
  getters:{
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
      return state.hardSkill
    },
    SOFTSKILLS: state => {
      return state.softSkills
    }
  },
  mutations: {
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
      state.softSkills = payload
    },
    SET_HARDSKILL: (state, payload) =>{
      state.hardSkill = payload
    }
  },
  actions: {
    PUSH_SOFTSKILLS: async (context, payload) => {
      context.commit('SET_SOFTSKILLS', payload)
    },
    PUSH_HARDSKILL: (context, payload) => {
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
    }
  },
  modules:{
    hairArrayMale,
    hairArrayFemale,
    jacketsArray,
    shirtsArray,
    pantsArray,
    accessoriesArray,
    shoesArray,
  },
})
