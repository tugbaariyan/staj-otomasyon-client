<template>
  <div class="teacher-message-wrapper modal">
    <div class="modal-header">Selam</div>
    <div class="modal-content">
      <ui-input v-model="messageData" label="Red Mesajı" />
    </div>
    <div class="modal-footer">
      <ui-button label="Kapat" type="cancel" @click="$emit('close')" />
      <ui-button label="Tamamla" @click="$emit('close', messageData)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "teacherMessage",
  props: {
    data: {
      type: String,
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
.teacher-message-wrapper {
  @include flexible();
}
</style>
