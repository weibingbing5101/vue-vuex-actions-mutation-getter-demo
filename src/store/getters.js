const getters = {
	getrSaveNews(state){
		return state.collect.length ? state.collect : [];
	}
};
export default getters;
