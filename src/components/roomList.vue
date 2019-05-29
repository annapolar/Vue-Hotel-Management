<template>
  <div class="allRooms">
    <div class="control">
      <div class="leftSection">
        <h2>Search</h2>
        <div class="keyword">
          <input v-model="keyword" placeholder="Try 'Beach View' or 'Swimming Pool' ">
        </div>
        <div class="range">
          Price Range:
          <input type="text" v-model="minPrice"> -
          <input type="text" v-model="maxPrice">
        </div>
      </div>

      <div class="rightSection">
         <h2>Back Stage</h2>
        <div class="backStage">
          <ul>
            <div class="title">
              <span class="roomOrder">No.</span>
              <span class="roomName">Name</span>
              <span class="roomPrice">Price</span>
              <span class="roomOpen">Available</span>
            </div>
            <li v-for="(card,index) in cards">
              <span class="roomOrder">{{index+1}}.</span>
              <span class="roomName">{{card.title}}</span>
              <span class="roomPrice">
                <input type="text" v-model.number="card.price">
              </span>
              <span class="roomOpen">
                <label class="container">
                  <input type="checkbox" v-model="card.available" checked="checked">
                  <mark class="checkmark"></mark>
                </label>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ul class="cards">
      <h3 v-if="keyword">
        You Searched
        <span style="color:red">"{{keyword}}"</span>
      </h3>
      <li
        v-for="card in cards"
        v-if="(card.price >= minPrice && card.price <= maxPrice) && (card.title.indexOf(keyword) != -1)"
      >
        <!-- --- image ----- -->
        <img :src="card.cover">
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
      maxPrice: 350,
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
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.allRooms {
  width: 100%;
  padding:20px;
  input {
    outline: none;
  }
  .control {
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    background-color: #fff;
    border-bottom:1px solid rgb(226, 229, 231);
    // box-shadow:0 5px 20px rgba(black,0.05);

    .leftSection {
      margin: 0 20px;
      .keyword {
        position: relative;
        margin: 20px 0;
        &:before {
          content: "🔍";
          font-size: 20px;
          position: absolute;
          left: 20px;
          top: 10px;
        }
        input {
          width: 330px;
          height: 48px;
          font-size: 15px;
          padding: 0 20px 0 60px;
          border: none;
          border-radius: 3px;
          box-shadow: 0 0 10px rgba(black, 0.2);
        }
      }
      .range {
        input {
          width: 100px;
          height: 38px;
          border: 1px solid rgba(220, 224, 224, 1);
          border-radius: 3px;
          font-size: 15px;
          padding: 0 15px;
        }
      }
    }
    .rightSection {
      width:100%;
      margin:0 40px;
      .backStage {
        width:100%;
        min-width: 610px;
        margin: 20px 0;
        ul {
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 14px;

          li {
            width: 100%;
            list-style: none;
            padding: 2px 0;
            background-color: rgb(251, 255, 255);
            border-radius: 5px;
            margin: 4px 0;

            &:nth-child(odd) {
              background-color: rgb(242, 248, 248);
            }
          }
          .title {
            width: 100%;
            background-color: rgb(21, 133, 148);
            color: white;
            line-height: 2;
            letter-spacing: 0.5px;
            border-radius: 5px;
          }
          span {
            display: inline-block;
            width: 100%;
            padding: 0 4px 0 12px;
          }
          .roomOrder {
            width: 5%;
          }
          .roomName {
            width: 55%;
          }
          .roomPrice {
            width: 15%;
            input {
              width: 50px;
              height: 24px;
              border: 1px solid rgba(220, 224, 224, 1);
              border-radius: 3px;
              font-size: 15px;
              padding: 0 15px;
              font-size: 13px;
            }
          }
          .roomOpen {
            width: 12%;
            .container {
              display: block;
              position: relative;
              // padding-left: 35px;
              margin-bottom: 16px;
              cursor: pointer;
              // font-size: 22px;
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
              border-width: 0 3px 3px 0;
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
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      list-style: none;
      width: 250px;
      height: 340px;
      background-color: rgb(255, 255, 255);
      margin: 4px;
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
            color: #fd5c63;
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
            background-color: #fd5c63;
            color: white;
            padding: 6px 12px;
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


