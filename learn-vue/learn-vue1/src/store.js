import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const addObj1 = 'addObj1'
// var addObj1 = 'addObj1'
// addObj1 = 'addObj2'
export default new Vuex.Store({
  state: {
    state1: 'state1',
    state2: 'state2',
    state3: 'state3',
    state4: 'state4',
    stateArr: ['arr1', 'arr2', 'arr3', 'arr4', 'arr5'],
    stateObj: {}
  },
  mutations: {
    editStateArr: (state, payload) => {
      console.log('stateArr is edited by ' + payload.commitComponent) 
      state.stateArr.unshift('arr0')
    },
    [addObj1]: function(state, payload) { //使用常量替代 Mutation 事件类型
      console.log('obj1 is added by ' + payload.commitComponent, this, state, addObj1)
      // state.stateObj.obj1 = 'obj1'  //需要与使用 Vue 一样遵守一些注意事项,使用 Vue.set(obj, 'newProp', 123)添加对象
      var sr = this
      // setTimeout(function(){
      //   // throw new Error('aa')
      //   console.log('obj1 is added by ' + payload.commitComponent, this, state, addObj1)
      //   sr._vm.$set(state.stateObj, 'obj1', 'obj1')
      // }, 500)
      // throw new Error('aa')
      this._vm.$set(state.stateObj, 'obj1', 'obj1')
      // addObj1 = 'addObj2'
    }
  },
  actions: {

  },
  getters:{
    stateArrCount: state => state.stateArr.length,
    getIndexData: state => id => state.stateArr[id]
  }
})
