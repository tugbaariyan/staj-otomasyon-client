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
      async getAllDocuments() {
        const response = await service.getAllDocuments();
        if (response.status == 200) {
          return response.data;
        }
      },
      async getDocumentWithUserID(_, payload) {
        const response = await service.getDocumentByUserID(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
      async updateDocument(_, payload) {
        const response = await service.updateDocument(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
      async updateDocumentStatus(_, payload) {
        const response = await service.updateDocumentStatus(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
    },
    getters: {},
  };
};
