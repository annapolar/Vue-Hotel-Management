<template>
  <div class="allRooms">
    hello
    <div class="cards">
      <ul>
        <li v-for="card in cards">
          <div class="info">
            <h3>
              {{card.title}}
              <span v-show="card.soldOut">Sold Out</span>
            </h3>

            <div class="price">
              <div class="tax">+ {{tax}} % tax</div>
            </div>
          </div>
          <img :src="card.cover">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basePrice: 100,
      tax: 0,
      cards: [
        {
          title: "Resort",
          cover:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 0,
          soldOut: true
        },
        {
          title: "Resort",
          cover:
            "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 0,
          soldOut: true
        },
        {
          title: "Resort",
          cover:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 0,
          soldOut: true
        },
        {
          title: "Resort",
          cover:
            "https://images.unsplash.com/photo-1510608493064-58934ef38392?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 0,
          soldOut: true
        },
        {
          title: "Resort",
          cover:
            "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 0,
          soldOut: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.allRooms {
  .cards {
    width: 300px;
    height: 500px;
    img {
      width: 100%;
      background-size: cover;
    }
  }
}
</style>


