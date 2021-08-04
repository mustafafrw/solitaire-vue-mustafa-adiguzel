export default {
    move({ commit }, payload){
        commit('removeFromBoard', payload)
        commit('addToBoard', payload)
    }
};
