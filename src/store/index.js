import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
	state:{
		message:"早上好"
	},
	getters:{
		mm(state){
			return state.message+'hhhh2222'
		}
	},
	mutations :{
		change(state){
			state.message+="下午好"
		}
	}
})

export default store