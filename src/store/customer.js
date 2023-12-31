export const state = () => ({
  isAdd: false,
});
export const mutations = {
  TOGGLE_FORM_ADD(state, items) {
    state.isAdd = items;
  },
};

export const actions = {
  toggleFormAdd({ commit }, bool) {
    commit("TOGGLE_FORM_ADD", bool);
  },
};
