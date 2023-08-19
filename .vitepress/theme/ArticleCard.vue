<script>
export default {
    props: {
        title: {
        type: String,
        required: true,
        },
        excerpt: {
        type: String,
        required: true,
        },
        image: {
        type: String,
        required: true,
        },
        author: {
        type: String,
        required: true,
        },
        date: {
        type: String,
        required: true,
        },
        href: {
        type: String,
        required: true,
        },
    },
};
</script>

<template>
  <a :href="href">
    <div class="card">
      <div class="flex">
        <div style="min-width:200px; margin:auto;">
          <img :src="image" :alt="title" width="200" />
        </div>
        <div class="details">
          <h2 class="title">{{ title }}</h2>
          <p class="excerpt">{{ excerpt }}</p>
          <div class="author">
            <div>
              <h3 class="name">{{ author }}</h3>
              <p class="date">Posted {{ date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
    .card {
        /* border-radius: 0.5rem; */
        /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
        /* margin-bottom: 1.5rem; */
        overflow: hidden;
        width: 80%;
        margin: 1.5rem auto;
    }

    .card:hover {
        border-radius: 0.5rem;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.1);
        transition: ease-in-out 0.2s all;
    }

    :root.dark .card:hover {
	    box-shadow: none;
        background-color: rgb(64, 47, 72);
    }

    .flex {
        display: flex;
    }

    .media {
        width: 200px;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .details {
        padding: 0.5em;
        margin-left: 1.2rem;
    }

    .title {
        border-top: none;
        font-size: 120%;
        font-weight: bold;
        margin: 0 0;
    }

    .excerpt {
        /* font-style: italic; */
    }

    .date {
        color: #888;
    }

    .name {
        margin: 0 0;
        font-size: 0.7rem;
        color: #999;
    }
</style>
