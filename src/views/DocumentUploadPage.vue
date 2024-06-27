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

    <div v-if="!hasApplied && selected === 'Zorunlu'" class="upload-container">
      <ui-input label="Staj Başvuru Evrakları" type="file" @change="handleFileUpload('mandatoryApplication')" />
      <ui-input label="Zorunlu Staj Belgesi" type="file" @change="handleFileUpload('mandatoryDocument')" />
      <ui-input label="Staj Ücretlerine İşsizlik Fonu Katkısı Öğrenci ve İşveren Bilgi Formu" type="file" @change="handleFileUpload('fundContributionForm')" />
      <ui-input label="Staj Başvuru Formu (TR)" type="file" @change="handleFileUpload('applicationFormTR')" />
      <ui-input label="Beyan Dilekçesi" type="file" @change="handleFileUpload('declarationPetition')" />
    </div>

    <div v-if="!hasApplied && selected === 'Gönüllü'" class="upload-container">
      <ui-input label="İsteğe Bağlı Staj Başvuru Dilekçesi" type="file" @change="handleFileUpload('voluntaryApplicationPetition')" />
      <ui-input label="İsteğe Bağlı Staj Programı Öğrenci Başvuru Formu (EK-1 B)" type="file" @change="handleFileUpload('voluntaryApplicationForm')" />
      <ui-input label="İsteğe Bağlı Staj Programı Kabul Formu (EK-2)" type="file" @change="handleFileUpload('voluntaryAcceptanceForm')" />
      <ui-input label="İsteğe Bağlı Staj Programı Sigorta Ödeme Bildirim Dilekçesi (Dilekçe)" type="file" @change="handleFileUpload('insurancePaymentNotification')" />
      <ui-input label="Danışman Dilekçesi (Dilekçe)" type="file" @change="handleFileUpload('advisorPetition')" />
    </div>

    <ui-button v-if="!hasApplied" label="Başvur" @click="submitApplication" class="submit-button" />
    <div v-if="hasApplied" class="confirmation-message">Başvurunuz alındı</div>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      selected: '',
      files: {
        mandatoryApplication: null,
        mandatoryDocument: null,
        fundContributionForm: null,
        applicationFormTR: null,
        declarationPetition: null,
        voluntaryApplicationPetition: null,
        voluntaryApplicationForm: null,
        voluntaryAcceptanceForm: null,
        insurancePaymentNotification: null,
        advisorPetition: null
      },
      hasApplied: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    },
  },
  methods: {
    async submitApplication() {
      const formData = new FormData();
      formData.append("uploader", this.user._id);
      formData.append("internshipType", this.selected);

      for (const [key, value] of Object.entries(this.files)) {
        if (value) {
          formData.append(key, value);
        }
      }

      try {
        const response = await this.$store.dispatch("document/uploadDocument", formData);
        console.log(response);
        this.hasApplied = true;
      } catch (error) {
        console.error("Document upload failed:", error);
      }
    },
    handleFileUpload(type) {
      return (event) => {
        this.files[type] = event.target.files[0];
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.file-upload-page-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.staj-turu-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  div {
    margin-right: 10px;
  }
}

.upload-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ui-input {
    margin-bottom: 10px;
  }
}

.submit-button {
  margin-top: 20px;
}

.confirmation-message {
  margin-top: 20px;
  font-size: 16px;
  color: green;
}
</style>
