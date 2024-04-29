export default (api) => {
  const service = api.documentAPI.documentService;
  console.log(service);
  return {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
      async uploadDocument(_, payload) {
        const response = await service.uploadDocument(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
    },
    getters: {},
  };
};
