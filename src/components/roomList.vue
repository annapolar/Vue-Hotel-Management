<template>
  <div class="allRooms">

    <div class="controll">
      <div class="keyword">
       <label>Search Keyword:</label>
       <input v-model="keyword">
      </div>
      <div class="range">
        <label>Min</label>
        <input type="text" v-model="minPrice">
        <label>Max</label>
        <input type="text" v-model="maxPrice">
      </div>
      <div class="controllSold">
        <span v-for="(card,index) in cards">
          <label>{{index+1}}</label>
          <input type="checkbox" v-model="card.soldOut">
          <input type="text" v-model.number="card.price">
        </span>
      </div>
    </div>

    <ul class="cards">
      <h3 v-if="keyword">You Searched <span style="color:red">"{{keyword}}"</span></h3>
      <li v-for="card in cards" v-if="(card.price >= minPrice && card.price <= maxPrice) && (card.title.indexOf(keyword) != -1)">
        <!-- --- image ----- -->
        <img :src="card.cover">
        <!-- --- info ---- -->
        <div class="info">
          <h3 class="title">{{card.title}}</h3>
          <div class="price">
            ${{card.price}}
            <span class="unit">/ Night</span>
            <mark v-show="card.soldOut">SOLD OUT</mark>
          </div>
          <div class="tax">
            Plus
            <strong>{{tax}}</strong> % tax
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tax: 10,
      minPrice: 50,
      maxPrice: 300,
      keyword:'',
      cards: [
        {
          title: "Beautiful Mountain Condo Pool, Hot Tub, WaterSlide",
          cover:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 145,
          soldOut: true
        },
        {
          title: "Premium Penthouse - Spectacular Three View",
          cover:
            "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 182,
          soldOut: false
        },
        {
          title: "Luxury 2BR/2BA Chalet w Outdoor Pool & Tub",
          cover:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 225,
          soldOut: true
        },
        {
          title: "Stunning Vacation Place Falcon Crest Lodge",
          cover:
            "https://images.unsplash.com/photo-1510608493064-58934ef38392?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 210,
          soldOut: false
        },
        {
          title: "Charming Spacious 2 BR for family on Legacy trail",
          cover:
            "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp",
          price: 195,
          soldOut: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.allRooms {
  width: 100%;
  .control {
  }
  .cards {
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      list-style: none;
      width: 250px;
      height: 340px;
      background-color: rgb(255, 255, 255);
      margin: 0 4px;
      padding: 10px;
      border-radius: 3px;
      box-shadow: 0 5px 10px rgba(black, 0.1);
      img {
        width: 100%;
        background-size: cover;
      }
      .info {
        .title {
          span {
            color: red;
            float: right;
          }
        }
        .price {
          font-size: 32px;
          font-weight: 500;
          clear: both;

          .unit {
            font-size: 16px;
          }
          mark {
            background-color: red;
            color: white;
            padding: 4px 10px;
            font-weight: 500;
            font-size: 13px;
            border-radius: 3px;
            float: right;
          }
        }
        .tax {
          font-size: 14px;
          color: #666;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>


