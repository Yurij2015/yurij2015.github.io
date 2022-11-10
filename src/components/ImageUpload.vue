<template>
  <label class="btn btn-primary">Select an image
    <input type="file" hidden @change="upload($event.target.files)">
  </label>
</template>

<script lang="ts">
import axios from "axios";
import {SetupContext} from "vue";

export default {
  name: "ImageUpload",
  emits: ['uploaded'],
  setup(_: any, context: SetupContext) {
    const upload = async (files: FileList | null) => {
      if (files === null) return;
      const file = files[0];
      const formData = new FormData();
      formData.append('image_preview', file);

      const {data} = await axios.post('file-store', formData);
      context.emit('uploaded', data.url);
    }
    return {
      upload
    }
  }
}
</script>

