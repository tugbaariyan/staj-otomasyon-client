<template>
  <div class="file-upload-page-wrapper">
    <div class="staj-turu-container" v-if="!hasApplied">
      <div>Staj Türü Seçiniz {{ selected }}</div>
      <select class="staj_turu_form" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>Zorunlu</option>
        <option>Gönüllü</option>
      </select>
    </div>

    <div v-if="selected === 'Zorunlu'" class="upload-container">
      <ui-input
        type="file"
        label="Staj Başvuru Evrakları"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="Zorunlu Staj Belgesi"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="Staj Ücretlerine İşsizlik Fonu Katkısı Öğrenci ve İşveren Bilgi Formu"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="Staj Başvuru Formu (TR)"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="Beyan Dilekçesi"
        @change="handleDocumentUpload"
      />
    </div>

    <div v-if="selected === 'Gönüllü'" class="upload-container">
      <ui-input
        type="file"
        label="İsteğe Bağlı Staj Başvuru Dilekçesi"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="İsteğe Bağlı Staj Programı Öğrenci Başvuru Formu (EK-1 B)"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="İsteğe Bağlı Staj Programı Kabul Formu (EK-2)"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="İsteğe Bağlı Staj Programı Sigorta Ödeme Bildirim Dilekçesi (Dilekçe)"
        @change="handleDocumentUpload"
      />
      <ui-input
        type="file"
        label="Danışman Dilekçesi (Dilekçe)"
        @change="handleDocumentUpload"
      />
    </div>

    <ui-button label="Yükle" @click="uploadDocument" />
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      documentFiles: [],
      selected: "",
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
      this.documentFiles.forEach((file) => {
        formData.append("fileData", file); // fileData dizisi olarak ekleniyor
      });

      try {
        if (this.documentFiles.length < 1) {
          alert("Doküman yükleyin");
        } else {
          const response = await this.$store.dispatch(
            "document/uploadDocument",
            formData
          );
          alert(response.message);
        }
      } catch (error) {
        console.error("Document upload failed:", error);
      }
    },

    handleDocumentUpload(event) {
      this.documentFiles.push(event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-upload-page-wrapper {
  height: 100%;
  @include flexible($align: center, $justify: center, $direction: column);
}
</style>
