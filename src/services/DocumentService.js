import APIServiceBase from "./APIServiceBase";

class DocumentService extends APIServiceBase {
  uploadDocument(data) {
    return this.http({
      method: "POST",
      url: this.url + "uploadDocument",
      data,
    });
  }
  getDocumentByUserID(userID) {
    return this.http({
      method: "GET",
      url: this.url + `userDocuments/${userID}`,
    });
  }
  getAllDocumentsWithUser() {
    return this.http({
      method: "GET",
      url: this.url + `getAllWithUser`,
    });
  }
  getAllDocuments() {
    return this.http({
      method: "GET",
      url: this.url + `getAll`,
    });
  }
  updateDocument(data) {
    return this.http({
      method: "POST",
      url: this.url + `update`,
      data,
    });
  }
  updateDocumentStatus(data) {
    return this.http({
      method: "POST",
      url: this.url + `updateStatus`,
      data,
    });
  }
}

export default function DocumentAPI(api, apiDocument) {
  return {
    documentService: new DocumentService(api, apiDocument),
  };
}
