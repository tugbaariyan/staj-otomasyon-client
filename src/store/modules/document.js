export default (api) => {
  const service = api.documentAPI.documentService;
  return {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
      async uploadDocument(_, payload) {
        const response = await service.uploadDocument(payload);
        if (response.status == 201) {
          return response.data;
        }
      },
      // async userDocuments(_, payload) {
      //   const response = await service.userDocuments(payload);
      //   if (response.status == 200) {
      //     return response.data;
      //   }
      // },
      async getAllDocumentsWithUser(_, payload) {
        const response = await service.getAllDocumentsWithUser(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
    },
    getters: {},
  };
};
