<template>
  <ui-spinner :spinner="spinner" v-if="spinner !== 0" />
  <div class="intern-page-wrapper" v-else>
    <div v-if="documents == 0">
      <h1>Henüz belge yüklemediniz...</h1>
      <ui-button label="Belge Yükle" @click="goToDocumentUploadPage" />
    </div>
    <div class="intern-page" v-else>
      <h2 :style="statusInfo.styles">{{ statusInfo.message }}</h2>
      <h2 v-if="documents.rejectionMessage" class="rejection-message">
        Mesaj: {{ documents.rejectionMessage }}
      </h2>
      <document-manager
        :pdfFiles="documents.fileData"
        @updateDocument="updateDocuments"
      />
    </div>
  </div>
</template>

<script>
import DocumentManager from "@/components/DocumentManager.vue";
export default {
  components: { DocumentManager },
  name: "FileUpload",
  data() {
    return {
      documents: {
        fileData: [],
      },
      spinner: 1,
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    },
    statusInfo() {
      const statusMap = {
        denied: {
          message: "RED EDİLDİ",
          styles: { color: "red" },
        },
        approved: {
          message: "ONAYLANDI",
          styles: { color: "green" },
        },
        pending: {
          message: "ONAY BEKLİYOR",
          styles: { color: "orange" },
        },
      };
      return statusMap[this.documents.status] || statusMap.pending;
    },
  },
  methods: {
    async getDocumentWithUserID() {
      this.documents = await this.$store.dispatch(
        "document/getDocumentWithUserID",
        this.user._id
      );
      this.spinner = 0;
    },
    goToDocumentUploadPage() {
      this.$router.push({ name: "fileUpload" });
    },
    async updateDocuments() {
      if (this.documents.status === "approved") {
        alert("Onaylanmış belgelerde değişiklik yapamazsınız.");
        return;
      }
      // Verileri Base64 formatına dönüştür
      const documentsToUpdate = {
        ...this.documents,
        rejectionMessage: "",
        status: "pending",
      };
      documentsToUpdate.fileData = this.documents.fileData.map((doc) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(doc.buffer.data))
        );
        return {
          ...doc,
          buffer: base64String,
        };
      });

      // Vuex action'a gönder
      const response = await this.$store.dispatch(
        "document/updateDocument",
        documentsToUpdate
      );
      alert(response.message);
      this.documents = response.data;
    },
  },
  mounted() {
    this.getDocumentWithUserID();
  },
};
</script>

<style lang="scss" scoped>
.intern-page-wrapper {
  height: 100%;
  width: 100%;
  @include flexible($align: center, $justify: center, $direction: column);
  .intern-page {
    @include flexible(
      $align: center,
      $justify: center,
      $direction: column,
      $gap: 0
    );
    width: 100%;

    .rejection-message {
      color: $error;
    }
  }
}
</style>
