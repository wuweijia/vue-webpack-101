<template>
<div class="main">
  <h1 class="title">{{message}}</h1>
  <section class="box">box
    <div class="wrap">
      <ul class="ul">
        <li class="li">1</li>
        <li class="li">2</li>
        <li class="li">3</li>
        <li class="li">4</li>
      </ul>
    </div>
  </section>
</div>
</template>

<script>
import Hello from "./components/Hello";
export default {
  name: "app",
  data() {
    return {
      message: "SCSS实践"
    };
  },
};
</script>

<style lang="scss">
@mixin bold {
  font-weight: 600;
}

// .main {
//   text-align: center;
//   .title {
//     font-size: 46px;
//   }
//   .box {
//     width: 500px;
//     margin: auto;
//     border: 1px solid red;
//   }
//   .wrap {
//     background-color: aquamarine;
//   }
// }

// @media (max-width: 768px) {
//   .main {
//     .title {
//     font-size: 26px;
//     }
//     .box {
//       width: 300px;
//       margin: auto;
//       border: 1px solid blue;
//     }
//     .wrap {
//       background-color: tan;
//     }
//   }
// }

.commonStyle {
  color: red;
}

.main {
  text-align: center;
  .title {
    @include bold;
    @extend .commonStyle;
    font-size: 46px;
  }
  .box {
    width: 500px;
    margin: auto;
    border: 1px solid red;
    .wrap {
      background-color: aquamarine;
    }
  }
}

@media (max-width: 768px) {
  .main {
    .title {
    font-size: 26px;
    }
    .box {
      width: 300px;
      margin: auto;
      border: 1px solid blue;
      .wrap {
        background-color: tan;
      }
    }
  }
}
</style>
