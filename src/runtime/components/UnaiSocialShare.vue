<template>
  <div class="social-share__wrapper">
    <div
      v-for="item in socialShareItems"
      :key="item.id"
      :class="item.name"
      class="social-share__item"
      @click="shareTo(item.name)"
    >
      <Icon :name="item.icon" class="social-icon"  />
    </div>
    <div
      key="close"
      class="social-share__item close"
    >
      <Icon name="material-symbols:close" class="social-icon" @click="$emit('close')" />
    </div>

  </div>
</template>
<script setup>
import {gsap} from "gsap";
defineEmits(["shareTo", "close"]);
const props = defineProps({
  items: {
    type: Array,
    required: false,
    default: () => ["facebook", "twitter", "whatsapp", "email"],
  },
});
const socialShares = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    icon: "ic:baseline-facebook",
  },
  {
    id: 2,
    name: "twitter",
    url: "https://twitter.com/intent/tweet?url=",
    icon: "arcticons:x-twitter",
  },
  {
    id: 3,
    name: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    icon: "ri:linkedin-fill",
  },
  {
    id: 4,
    name: "reddit",
    url: "https://reddit.com/submit?url=",
    icon: "ri:reddit-line",
  },
  {
    id: 5,
    name: "pinterest",
    url: "https://pinterest.com/pin/create/button/?url=",
    icon: "ri:pinterest-line",
  },
  {
    id: 6,
    name: "email",
    url: "mailto:?subject=Check%20out%20this%20link&body=",
    icon: "material-symbols:alternate-email",
  },
  {
    id: 7,
    name: "whatsapp",
    url: "https://wa.me/?text=",
    icon: "ri:whatsapp-line",
  },
];
const socialShareItems = computed(() => {
  return socialShares.filter((item) => props.items.includes(item.name));
});
const shareTo = (name) => {
  const url = window.location.href;
  const item = socialShareItems.value.find((item) => item.name === name);
  window.open(item.url + url, "_blank");
};
onMounted(() => {
  const tl = gsap.timeline();
  const duration = 0.3;
  tl.to('.facebook', { top: '54%', right: '84%', scale: 1, duration: duration });
  tl.to('.twitter', { top: '68%', right: '79%', scale: 1, duration: duration });
  tl.to('.whatsapp', { top: '79%', right: '68%', scale: 1, duration: duration });
  tl.to('.email', { top: '86%', right: '55%', scale: 1, duration: duration });
  tl.to('.close', { top: '50%', right: '50%', scale: 1, duration: duration });
});


</script>
<style scoped>
.social-share__wrapper {
  position: absolute;
  top: 0;
  right: 0;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 100%;
  padding-top: 100%;
  z-index: 100;
  transform: translate(50%, -50%);
  overflow: hidden;
}
.social-share__item {
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  scale: 0;
}
.social-icon {
  font-size: 2.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
@media (min-width: 769px) {
  .social-share__wrapper {
    width: 900px;
    padding-top: 900px;
  }
  .social-icon {
  font-size: 4rem;
}

}
</style>
