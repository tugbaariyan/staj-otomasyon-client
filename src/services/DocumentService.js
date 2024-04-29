import APIServiceBase from "./APIServiceBase";

class DocumentService extends APIServiceBase {
  uploadDocument(data) {
    return this.http({
      method: "POST",
      url: this.url + "uploadDocument",
      data,
    });
  }
}

export default function DocumentAPI(api, apiDocument) {
  return {
    documentService: new DocumentService(api, apiDocument),
  };
}
