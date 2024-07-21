import APIServiceBase from "./APIServiceBase";

class DocumentService extends APIServiceBase {
  uploadDocument(data) {
    return this.http({
      method: "POST",
      url: this.url + "uploadDocument",
      data,
    });
  }
  // userDocuments(userID) {
  //   return this.http({
  //     method: "GET",
  //     url: this.url + `uploadDocument/${userID}`,
  //   });
  // }
  getAllDocumentsWithUser() {
    return this.http({
      method: "GET",
      url: this.url + `getAllWithUser`,
    });
  }
}

export default function DocumentAPI(api, apiDocument) {
  return {
    documentService: new DocumentService(api, apiDocument),
  };
}
