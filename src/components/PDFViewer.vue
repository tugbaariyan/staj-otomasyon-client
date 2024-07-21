<template>
  <div class="pdf-viewer">
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "PdfViewer",
  props: {
    pdfFile: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderPdf();
  },
  methods: {
    async renderPdf() {
      const pdfData = new Uint8Array(this.pdfFile.buffer.data); // MongoDB Binary'den Uint8Array'a dönüştür

      const loadingTask = window.pdfjsLib.getDocument({ data: pdfData });

      try {
        const pdf = await loadingTask.promise;
        const pageNumber = 1; // İlk sayfa

        const page = await pdf.getPage(pageNumber);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = this.$refs.pdfCanvas;
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
  },
};
</script>

<style scoped>
.pdf-viewer {
  width: 100%;
}
canvas {
  border: 1px solid #ccc;
}
</style>
