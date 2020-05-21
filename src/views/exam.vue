<template>
  <div class="grid">
    <div class="block" v-for="(item,idx) in text" :key="idx">
      <img :src="imgs[0]" alt />
      <div>
        <h4>{{item.title.substring(0,12)}}...</h4>
        <div class="info">
          <p class="name">{{item.name}}</p>
          <p>評價：{{item.count}}</p>
          <p>人數：{{item.peaple}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [require("@/assets/test.png")],
      text: [
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        },
        {
          title: "工程師學理財 基金戰場投資指南（預）",
          name: "tony",
          count: "100%",
          peaple: "10"
        }
      ]
    };
  },
  created() {
    for (let i = 0; i < 5; i++) {
      (function(x) {
        window.setTimeout(function() {
          console.log(x + 1);
        }, 1000 * x);
      })(i);
    }
  }
};
</script>
<style lang="scss">
p {
  margin: 0px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
  .block {
    border: 1px solid;
    height: 300px;
    padding: 10px;
  }
  img {
    background-color: gray;
    border: 1px solid;
    height: 138px;
    width: 230px;
    margin-bottom: 10px;
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .name {
      grid-column: 1 / 3;
      text-align: left;
      padding-left: 20px;
    }
  }
}

@media (max-width: 414px) {
  p {
    margin: 0px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    .block {
      border: 1px solid;
      height: 133px;
      display: flex;
      padding: 0px;
      h4 {
        padding: 5px;
      }
      img {
        width: 134px;
        height: 100%;
      }
      .info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .name {
          grid-column: 1 / 3;
          text-align: left;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>