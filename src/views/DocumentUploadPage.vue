<template>
  <div class="file-upload-page-wrapper">
    <ui-input type="file" @change="handleDocumentUpload" />
    <ui-button label="Yükle" @click="uploadDocument" />
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      documentFile: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    },
  },
  methods: {
    async uploadDocument() {
      const formData = new FormData();
      formData.append("uploader", this.user._id);
      formData.append("documentName", "staj 1");
      formData.append("fileData", this.documentFile);

      try {
        const response = await this.$store.dispatch(
          "document/uploadDocument",
          formData
        );
        console.log(response);
      } catch (error) {
        console.error("Document upload failed:", error);
      }
    },

    handleDocumentUpload(event) {
      this.documentFile = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.file-upload-page-wrapper {
  height: 100%;
  @include flexible($align: center, $justify: center);
}
</style>
