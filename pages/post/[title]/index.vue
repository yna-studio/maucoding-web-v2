<template>
  <default-layout>
    <breadcrumb :data="breadcrumb" />
    <h1 class="text-weight-bold" fontSize="md">Post Title</h1>
    <div class="text-grey q-mb-lg">
      <strong>Posted by</strong> <NuxtLink to="/author/yussan">yussan</NuxtLink> • 5 days ago • <strong>Tags:</strong> <NuxtLink to="/tag/javascript">javascript</NuxtLink>&nbsp;<NuxtLink to="/tag/nextjs">nextjs</NuxtLink>
    </div> 
    <content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        facilisis nunc nec convallis pulvinar. Nullam sed enim in massa ultrices
        semper eget a libero. Praesent accumsan, odio id auctor vestibulum, elit
        enim accumsan lectus, at varius ipsum dui eget risus. Proin consectetur,
        metus ac consectetur sollicitudin, tortor dui ullamcorper elit, et
        suscipit felis diam id sem. Vestibulum enim magna, egestas sed dictum
        quis, dignissim ac risus. Fusce leo ligula, feugiat quis elementum eget,
        malesuada eu felis. Vestibulum rutrum turpis turpis, ac faucibus elit
        euismod ac. Curabitur feugiat, tortor ac blandit condimentum, tellus dui
        vehicula risus, eu ullamcorper purus nisl quis mauris. Aliquam laoreet
        volutpat libero, in porta orci luctus et.
      </p>
      <p>
        <h2>This is Heading 2</h2>
        Nunc auctor nunc a eros blandit cursus. Integer consequat interdum mi, a
        tempus diam cursus et. Fusce nec lacus at leo aliquam posuere. Donec
        semper at ex sit amet ultricies. Nullam massa felis, posuere vitae
        pellentesque sit amet, auctor quis ex. Integer sit amet elit lacinia,
        posuere nisi eget, finibus nulla. Nam id lacinia velit, at gravida nisl.
        Integer non volutpat lorem. Aenean nec lorem in elit mollis vehicula.
        Vestibulum finibus nisi vitae libero fermentum, ut finibus eros
        ullamcorper. Nunc facilisis ligula arcu, in pharetra orci accumsan quis.
        Fusce ultricies a diam ut euismod.
      </p>
      <p>
        <img
          src="https://cdn1-production-images-kly.akamaized.net/1AQr3cKKOh-dWG5KIID5q52lW-Y=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2024686/original/065149900_1521796173-emma_watson.jpeg"
        />
        Cras congue iaculis vulputate. Sed eget odio sit amet tellus aliquam
        sollicitudin nec non neque. Vivamus in augue nec orci lacinia placerat
        sit amet quis velit. Nullam pulvinar neque nunc, ac consectetur nunc
        ultricies ac. Proin nec tellus commodo, euismod ex eu, accumsan tortor.
        Praesent congue elementum aliquam. Pellentesque sagittis nunc a odio
        fermentum, ac sodales lectus lobortis
      </p>
    </content>
  </default-layout>
</template>
<script>
import DefaultLayout from "@components/layouts/default-layout";
import Breadcrumb from "@components/commons/navigations/Breadcrumbs";

export default {
  data() {
    return {
      breadcrumb: [
        { to: "/posts", label: "Posts" },
        {
          label: "This is post Title",
        },
      ],
    };
  },
  components: {
    "default-layout": DefaultLayout,
    breadcrumb: Breadcrumb,
  },
};
</script>
