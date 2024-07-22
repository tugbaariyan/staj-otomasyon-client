<template>
  <div class="documents-page-wrapper">
    <div v-for="(data, index) in datas" :key="index">
      <div v-for="(document, i) in data.fileData" :key="i">
        <PDFViewer :pdfFile="document" />
      </div>
    </div>
  </div>
</template>

<script>
import PDFViewer from "@/components/PDFViewer.vue";

export default {
  components: { PDFViewer },
  name: "DocumentsPage",
  data() {
    return {
      datas: [],
    };
  },
  methods: {
    async getAllDocumentsWithUser() {
      this.datas = await this.$store.dispatch(
        "document/getAllDocumentsWithUser"
      );
    },
  },
  mounted() {
    this.getAllDocumentsWithUser();
  },
};
</script>

<style lang="scss" scoped>
.documents-page-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>
