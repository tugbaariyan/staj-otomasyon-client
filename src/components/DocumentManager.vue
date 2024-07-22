<template>
  <div class="document-manager">
    <h2>Belgeler</h2>
    <div class="documents">
      <div v-for="(doc, index) in documents" :key="index" class="document">
        <div class="document-actions">
          <ui-button @click="viewDocument(doc)" label="Görüntüle" />
          <ui-button @click="deleteDocument(index)" label="Sil" type="error" />
        </div>
        <div class="document-preview">
          <canvas :ref="'pdfCanvas' + index"></canvas>
        </div>
      </div>
    </div>
    <div class="add-document">
      <ui-input type="file" label="Belge Yükle" @change="addDocument" />
    </div>
    <ui-button label="Kaydet" :disabled="!changed" @click="updateDocuments" />
    <ui-modal :display="showModal">
      <single-document-modal :data="singleDoc" @close="setModal(false)" />
    </ui-modal>
  </div>
</template>

<script>
import SingleDocumentModal from "./modals/SingleDocumentModal.vue";
export default {
  components: { SingleDocumentModal },
  name: "DocumentManager",
  props: {
    pdfFiles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      documents: this.pdfFiles, // Belgelerinizi buraya ekleyeceksiniz
      changed: false,
      singleDoc: null,
      showModal: false,
    };
  },
  mounted() {
    this.renderAllPdfs();
  },
  methods: {
    async renderAllPdfs() {
      this.pdfFiles.forEach((doc, index) => {
        this.renderPdf(doc, index);
      });
    },
    async renderPdf(doc, index) {
      const pdfData = new Uint8Array(doc.buffer.data);

      const loadingTask = window.pdfjsLib.getDocument({ data: pdfData });

      try {
        const pdf = await loadingTask.promise;
        const pageNumber = 1;

        const page = await pdf.getPage(pageNumber);
        const scale = 0.2;
        const viewport = page.getViewport({ scale });

        const canvas = this.$refs["pdfCanvas" + index][0];
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    },
    viewDocument(doc) {
      // Belgeyi tam ekranda görüntülemek için gerekli işlemleri yapın
      console.log(doc);
      this.singleDoc = doc;
      this.setModal(true);
    },
    deleteDocument(index) {
      this.documents.splice(index, 1);
      this.changed = true;
    },
    addDocument(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const doc = {
          originalName: file.name,
          buffer: { data: new Uint8Array(arrayBuffer) },
        };
        this.documents.push(doc);
        this.$nextTick(() => {
          this.renderPdf(doc, this.documents.length - 1);
        });
      };

      reader.readAsArrayBuffer(file);
      this.changed = true;
    },
    updateDocuments() {
      this.$emit("updateDocument");
      this.changed = false;
    },
    setModal(show) {
      this.showModal = show;
    },
  },
};
</script>

<style scoped lang="scss">
.document-manager {
  @include flexible($direction: column, $align: center);
  width: 100%;

  .documents {
    @include flexible($wrap: wrap);

    .document {
      border: 1px solid #ccc;
      position: relative;

      &:hover .document-actions {
        display: flex;
      }

      .document-actions {
        @include flexible($direction: column, $gap: 0.25rem);
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        display: none;
      }
    }
  }
  .add-document {
    margin-top: 20px;
  }
}
</style>
