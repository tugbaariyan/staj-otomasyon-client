<template>
  <ui-spinner :spinner="spinner" v-if="spinner !== 0" />
  <div class="student-detail-page-wrapper" v-else>
    <div class="student-detail-card">
      <h4>{{ student.firstName + " " + student.lastName }}</h4>
      <h5>{{ student.email }}</h5>
      <h5>{{ documents.status }}</h5>
      <p>Belge sayısı: {{ documentCount }}</p>
      <div class="button-wrapper">
        <ui-button
          label="Onayla"
          :disabled="buttonStatus"
          @click="updateDocumentStatus('approved')"
        />
        <ui-button
          label="Reddet"
          type="error"
          :disabled="buttonStatus"
          @click="updateDocumentStatus('denied')"
        />
      </div>
    </div>
    <div class="pdf-container" v-if="documents">
      <p-d-f-viewer
        v-for="(document, i) in documents.fileData"
        :key="i"
        :pdfFile="document"
        showTitle
      />
    </div>
    <ui-modal :display="showModal">
      <teacher-message :data="teacherMessage" @close="handleClose" />
    </ui-modal>
  </div>
</template>

<script>
import PDFViewer from "@/components/PDFViewer.vue";
import TeacherMessage from "@/components/modals/TeacherMessage.vue";

export default {
  components: { PDFViewer, TeacherMessage },
  name: "StudentDetailPage",
  data() {
    return {
      student: {},
      documents: {
        fileData: [],
      },
      showModal: false,
      spinner: 1,
      teacherMessage: "asd",
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    documentCount() {
      return this.documents?.fileData?.length || 0;
    },
    buttonStatus() {
      return (
        this.documentCount === 0 ||
        this.documents.status === "approved" ||
        this.documents.status === "denied"
      );
    },
  },
  methods: {
    async getStudentByID() {
      this.student = await this.$store.dispatch("user/getById", this.id);
    },
    async getDocumentWithUserID() {
      this.documents = await this.$store.dispatch(
        "document/getDocumentWithUserID",
        this.id
      );
      this.spinner = 0;
    },
    async updateDocumentStatus(status) {
      const data = {
        id: this.documents._id,
        status: status,
      };
      if (status === "approved") {
        this.documents = await this.$store.dispatch(
          "document/updateDocumentStatus",
          data
        );
      } else {
        this.setModal(true);
      }
    },
    setModal(show) {
      this.showModal = show;
    },
    async handleClose(e) {
      this.setModal(false);
      if (e) {
        this.teacherMessage = e;
        this.documents = await this.$store.dispatch(
          "document/updateDocumentStatus",
          {
            id: this.documents._id,
            status: "denied",
            rejectionMessage: this.teacherMessage,
          }
        );
      }
    },
  },
  mounted() {
    this.getStudentByID();
    this.getDocumentWithUserID();
  },
};
</script>

<style lang="scss" scoped>
.student-detail-page-wrapper {
  @include flexible($direction: column, $align: center);
  height: 100%;
  width: 90%;

  .student-detail-card {
    border: 1px solid black;
    width: 100%;
    padding: 1rem 0;
    border-radius: 1rem;
  }
  .pdf-container {
    overflow-y: auto;
  }
}
</style>
