<template>
  <div class="single-doc-wrapper modal">
    <div class="modal-header">{{ data.originalName }}</div>
    <div class="modal-content">
      <p-d-f-viewer :pdfFile="data" />
    </div>
    <div class="modal-footer">
      <ui-button label="Kapat" type="cancel" @click="$emit('close')" />
    </div>
  </div>
</template>

<script>
import PDFViewer from "../PDFViewer.vue";
export default {
  components: { PDFViewer },
  name: "teacherMessage",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      messageData: this.data,
    };
  },
};
</script>

<style lang="scss">
.single-doc-wrapper {
  @include flexible();
  height: 100%;
  .modal-content {
    max-height: 75vh;
    overflow-y: scroll;
  }
}
</style>
