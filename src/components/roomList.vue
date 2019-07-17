<template>
  <div class="managementWrap">
    <div class="roomManagement">
      <h2>Hotel Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card,index) in cards" :key="index">
            <td>00{{index+1}}</td>
            <td>
              <div :style="{backgroundImage: `url(${card.cover})`}" class="thumbnail"></div>
            </td>
            <td>{{card.title}}</td>
            <td>
              <input type="text" v-model.number="card.price" />
            </td>
            <td>
              <label class="container">
                <input type="checkbox" v-model="card.available" checked="checked" />
                <mark class="checkmark"></mark>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ul class="cards">
      <h2>Preview</h2>
      <div class="topControl">
        <div class="keyword">
          <input v-model="keyword" placeholder="Beach View" />
        </div>
        <div class="range">
          Price Range:
          <input type="text" v-model="minPrice" /> -
          <input type="text" v-model="maxPrice" />
        </div>
      </div>
      <h3 v-if="keyword">
        You Searched
        <span style="color:red">"{{keyword}}"</span>
      </h3>
      <li
        v-for="(card, index) in cards"
        v-if="(card.price >= minPrice && card.price <= maxPrice) && (card.title.indexOf(keyword) != -1)"
        :key="index"
      >
        <!-- --- image ----- -->
        <img :src="card.cover" />
        <!-- --- info ---- -->
        <div class="info">
          <h3 class="title">{{card.title}}</h3>
          <div class="price">
            ${{card.price}}
            <span class="unit">/ Night</span>
            <mark v-show="!card.available">SOLD OUT</mark>
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
      maxPrice: 500,
      keyword: "",
      cards: [
        {
          title: "Beautiful Mountain Room with Beach View",
          cover:
            "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437__340.jpg",
          price: 312,
          available: true
        },
        {
          title: "Premium Class with Private Swimming Pool",
          cover:
            "https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219__340.jpg",
          price: 182,
          available: false
        },
        {
          title: "Luxury Chalet Outdoor & Beach View",
          cover:
            "https://cdn.pixabay.com/photo/2014/01/02/10/14/beach-hut-237489__340.jpg",
          price: 225,
          available: true
        },
        {
          title: "Beach View Stunning Vacation Place ",
          cover:
            "https://cdn.pixabay.com/photo/2018/03/14/21/45/sunset-3226467__340.jpg",
          price: 210,
          available: false
        },
        {
          title: "Relaxation Resort with Swimming Pool",
          cover:
            "https://cdn.pixabay.com/photo/2017/08/07/09/25/swimming-2601877__340.jpg",
          price: 195,
          available: true
        },
        {
          title: "Five Seasons Resort Hualalai",
          cover:
            "https://cdn.pixabay.com/photo/2015/11/11/04/07/vacation-1038166__340.jpg",
          price: 295,
          available: true
        },
        {
          title: "Halton Waiko Village",
          cover:
            "https://cdn.pixabay.com/photo/2016/10/13/09/08/travel-1737172__340.jpg",
          price: 215,
          available: true
        },
        {
          title: "Halekulani Ore Hotel",
          cover:
            "https://cdn.pixabay.com/photo/2012/12/19/18/13/architecture-70920__340.jpg",
          price: 125,
          available: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.managementWrap {
  width: 100%;
  display: flex;

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  input {
    outline: none;
  }
  .roomManagement {
    width: 100%;
    background-color: #f5f6f7;
    padding: 30px;

    table {
      width: 100%;
      margin-top: 40px;
      border-collapse: separate;
      border-spacing: 0 8px;

      thead {
        tr {
          th {
            padding: 10px;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
          }
        }
      }
      tbody {
        tr {
          background-color: #fff;
          transition: 0.5s;
          border-radius: 6px;

          &:hover {
            box-shadow: 0 0 0 1px rgb(21, 133, 148);
          }

          td {
            padding: 10px;
            vertical-align: middle;
            &:first-child {
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            }
            &:last-child {
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
            }

            .thumbnail {
              width: 40px;
              height: 40px;
              background-size: cover;
              background-position: center;
              border-radius: 4px;
            }
            input {
              width: 80px;
              height: 35px;
              border-radius: 4px;
              border: 1px solid rgb(214, 223, 217);
              padding: 0 10px;
              text-align: center;
            }
            .container {
              display: block;
              position: relative;
              margin-bottom: 16px;
              cursor: pointer;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            /* Hide the browser's default checkbox */
            .container input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
            }

            /* Create a custom checkbox */
            .checkmark {
              transition: 0.3s;
              position: absolute;
              top: 0;
              left: 20px;
              height: 20px;
              width: 20px;
              border-radius: 3px;
              background-color: white;
              box-shadow: 0 0 1px rgba(black, 0.7);
            }
            /* On mouse-over, add a grey background color */
            .container:hover input ~ .checkmark {
              background-color: rgb(189, 223, 228);
              box-shadow: 0 0 1px rgb(189, 223, 228);
            }

            /* When the checkbox is checked, add a blue background */
            .container input:checked ~ .checkmark {
              background-color: rgb(21, 133, 148);
              box-shadow: 0 0 1px rgb(21, 133, 148);
            }

            /* Create the checkmark/indicator (hidden when not checked) */
            .checkmark:after {
              content: "";
              position: absolute;
              display: none;
            }

            /* Show the checkmark when checked */
            .container input:checked ~ .checkmark:after {
              display: block;
            }

            /* Style the checkmark/indicator */
            .container .checkmark:after {
              left: 7px;
              top: 4px;
              width: 4px;
              height: 8px;
              border: solid white;
              border-width: 0 2px 2px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }

  .cards {
    width: 100%;
    padding: 30px;
    h3 {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
    }
    .topControl {
      display: flex;
      margin-bottom: 20px;
      .keyword {
        position: relative;
        margin-right: 30px;
        &:before {
          content: "🔍";
          font-size: 20px;
          position: absolute;
          left: 20px;
          top: 14px;
        }
        input {
          height: 42px;
          font-size: 15px;
          padding: 0 20px 0 60px;
          border: none;
          border-radius: 3px;
          border: 1px solid rgba(220, 224, 224, 1);
        }
      }
      .range {
        input {
          width: 80px;
          height: 42px;
          border: 1px solid rgba(220, 224, 224, 1);
          border-radius: 3px;
          font-size: 15px;
          padding: 0 15px;
        }
      }
    }
    li {
      display: inline-block;
      list-style: none;
      width: 190px;
      height: 270px;
      background-color: rgb(255, 255, 255);
      margin: 4px;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 3px;
      box-shadow: 0 5px 10px rgba(black, 0.1);
      img {
        width: 100%;
        background-size: cover;
        margin-bottom: 10px;
      }
      .info {
        .title {
          span {
            color: #fd5c63;
            float: right;
          }
        }
        .price {
          font-size: 25px;
          font-weight: 500;
          clear: both;
          margin: 10px 0;

          .unit {
            font-size: 16px;
          }
          mark {
            background-color: #fd5c63;
            color: white;
            padding: 6px;
            font-weight: 500;
            font-size: 13px;
            border-radius: 3px;
            margin-top: 6px;
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


