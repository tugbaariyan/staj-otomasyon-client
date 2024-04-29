<template>
  <div class="test-page-wrapper">
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadDocument">Belgeyi Yükle</button>
    <button @click="log">Log</button>
    {{ documentFile }}
  </div>
</template>

<script>
export default {
  name: "TestPage",
  data() {
    return {
      documentFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.documentFile = event.target.files[0];
    },
    // async uploadDocument() {
    //   try {
    //     let formData = new FormData();
    //     formData.append("documentFile", this.documentFile);

    //     await axios.post("/uploadDocument", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });

    //     console.log("Belge başarıyla yüklendi.");
    //   } catch (error) {
    //     console.error("Belge yüklenirken bir hata oluştu:", error);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.test-page-wrapper {
  @include flexible($align: center, $justify: center);
  height: 100%;
  background-color: red;
}
</style>
