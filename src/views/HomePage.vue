<template>
  <div class="home-page-wrapper">
    <h1>Selam {{ userName }}, Staj Otomastonuna hoş geldin...</h1>
    <div class="document-links" v-if="userRole !== 'teacher'">
      <h4>Staj Başvuru Evrakları</h4>
      <ul>
        <li><a :href="zorunluStajBelgesi">Zorunlu Staj Belgesi</a></li>
        <li>
          <a :href="stajUcretleriLink"
            >Staj Ücretlerine İşsizlik Fonu Katkısı Öğrenci ve İşveren Bilgi
            Formu</a
          >
        </li>
        <li><a :href="basvuruFormuLink">Staj Başvuru Formu (TR)</a></li>
        <li><a :href="beyanDilekcesiLink">Beyan Dilekçesi</a></li>
      </ul>
      <h4>Staj Evrakları</h4>
      <ul>
        <li><a :href="icKapakLink">İç Kapak</a></li>
        <li><a :href="defterSayfaLink">Defter Sayfa</a></li>
        <li><a :href="sicilFisiLink">Pratik Sicil Fişi</a></li>
        <li><a :href="kapakLink">Kapak</a></li>
      </ul>
      <h4>İsteğe Bağlı Staj</h4>
      <ul>
        <li><a :href="icKapakLink">İsteğe Bağlı Staj Başvuru Dilekçesi</a></li>
        <li>
          <a :href="defterSayfaLink">
            İsteğe Bağlı Staj Programı Öğrenci Başvuru Formu (EK-1 B)</a
          >
        </li>
        <li>
          <a :href="sicilFisiLink"
            >İsteğe Bağlı Staj Programı Kabul Formu (EK-2)</a
          >
        </li>
        <li>
          <a :href="kapakLink"
            >İsteğe Bağlı Staj Programı Sigorta Ödeme Bildirim Dilekçesi
            (Dilekçe)</a
          >
        </li>
        <li><a :href="kapakLink">Danışman Dilekçesi (Dilekçe)</a></li>
      </ul>
      <p>
        <b>
          Sigortalı işe giriş bildirgenizi e-devlet üzerinden edinebilirsiniz
          (Sosyal Güvenlik Kurumu, 4A İşe Giriş Çıkış Bildirgesi)...
        </b>
      </p>
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
      zorunluStajBelgesi:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/CCF_000298.pdf",
      stajUcretleriLink:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/%c3%9ccretlerine_%c4%b0%c5%9fsizlik_Fonu_Katk%c4%b1s%c4%b1_%c3%96%c4%9frenci_ve_%c4%b0%c5%9fveren_Bilgi_Formu.pdf",
      basvuruFormuLink:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/Zorunlu%20Staj%20Ba%c5%9fvuru%20Formu%20(Ek1).docx",
      beyanDilekcesiLink:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/BeyanDilek%c3%a7esi.docx",
      icKapakLink: "https://www.ktun.edu.tr/Dosyalar/1020/files/ickapak.xlsx",
      defterSayfaLink:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/deftersayfa.docx",
      sicilFisiLink:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/pratiksicilfisi.docx",
      kapakLink: "https://www.ktun.edu.tr/Dosyalar/1020/files/kapak.docx",
      isteğeBağlıStajBaşvuruDilekçesi:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/%c4%b0ste%c4%9fe%20Ba%c4%9fl%c4%b1%20Staj%20Ba%c5%9fvuru%20Dilek%c3%a7esi(1)(1).docx",
      ek1b: "https://www.ktun.edu.tr/Dosyalar/1020/files/ek_1b(1).docx",
      ek2: "https://www.ktun.edu.tr/Dosyalar/1020/files/ek_2_ibs.docx",
      sigortaOdemeBildirim:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/Sigorta%20%c3%b6deme%20bildirim%20dilek%c3%a7esi.docx",
      danışmanDilekçesi:
        "https://www.ktun.edu.tr/Dosyalar/1020/files/Dan%c4%b1%c5%9fman%20Dilek%c3%a7esi.docx",
    };
  },
  computed: {
    userName() {
      return this.$store.getters["user/getUser"].firstName;
      // return this.$store.state.user.user.firstName;
    },
    userRole() {
      return this.$store.getters["user/getRole"];
    },
  },
};
</script>

<style scoped lang="scss">
.home-page-wrapper {
  @include flexible($direction: column, $align: center, $justify: center);

  h1,
  h4 {
    margin: 0;
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
}
</style>
