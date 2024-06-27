<template>
  <div class="home-page-wrapper">
    <h1>Selam {{ userName }}, Staj Otomastonuna hoş geldin...</h1>
    <div class="document-links">
      <p><strong>Staj Başvuru Evrakları</strong></p>
      <ul>
        <li> <a :href="stajBelgesiLink">Zorunlu Staj Belgesi</a></li>
        <li> <a :href="stajUcretleriLink">Staj Ücretlerine İşsizlik Fonu Katkısı Öğrenci ve İşveren Bilgi Formu</a></li>
        <li> <a :href="basvuruFormuLink">Staj Başvuru Formu (TR)</a></li>
        <li> <a :href="beyanDilekcesiLink">Beyan Dilekçesi</a></li>
      </ul>
      <p><strong>Staj Evrakları</strong></p>
      <ul>
        <li> <a :href="icKapakLink">İç Kapak</a></li>
        <li> <a :href="defterSayfaLink">Defter Sayfa</a></li>
        <li> <a :href="sicilFisiLink">Pratik Sicil Fişi</a></li>
        <li> <a :href="kapakLink">Kapak</a></li>
      </ul>
      <p><strong>Sigortalı işe giriş bildirgenizi e-devlet üzerinden edinebilirsiniz</strong> (Sosyal Güvenlik Kurumu, 4A İşe Giriş Çıkış Bildirgesi)...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      documentFile: null,
      // Belge linkleri burada tanımlanabilir
      stajBelgesiLink: "link",
      stajUcretleriLink: "link",
      basvuruFormuLink: "link",
      beyanDilekcesiLink: "link",
      icKapakLink: "link",
      defterSayfaLink: "link",
      sicilFisiLink: "link",
      kapakLink: "link"
    };
  },
  computed: {
    userName() {
      return this.$store.getters["user/getUser"].firstName;
      // return this.$store.state.user.user.firstName;
    },
  },
};
</script>

<style scoped>
.home-page-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}
.document-links {
    text-align: center;
    
    ul {
      list-style-type: none;
      padding: 10px;
      
      li {
        margin-bottom: 10px;
      }
    }
  }
</style>
