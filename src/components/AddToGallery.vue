<template>
  <form>
    <div class="mb-3">
      <label for="image_to_gallery">Зображення для галереї</label>
      <div class="input-group">
        <input class="form-control" name="image" id="image_to_gallery" v-model="gallery.image">
        <label class="btn btn-primary">Вибрати зображення для галереї
          <input type="file" hidden @change="upload($event.target.files)">
        </label>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import axios from "axios";
import {reactive, SetupContext} from "vue";

export default {
  name: "AddToGallery",
  emits: ['uploaded'],
  props: {projectId: String},
  setup(props: any, context: SetupContext) {
    const upload = async (files: FileList | null) => {
      if (files === null) return;
      const file = files[0];
      const formData = new FormData();
      formData.append('image', file);
      formData.append('project_id', props.projectId);
      const {data} = await axios.post('gallery-image', formData);
      context.emit('uploaded', data.url);
      gallery.image = data.url;
    }
    const gallery = reactive({
      image: '',
    });

    return {
      upload,
      // projectId,
      gallery
    }
  }
}
</script>

