<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ingredient,i) in ingredients" :key="i">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[i]">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Ad an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null
    };
  },
  methods: {
    addSmoothie() {
      console.log(this.title, this.ingredients);
    },
    addIngredient() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter an ingredient";
      }
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 50px;
  padding: 20px;
  max-width: 500px;
}

.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px auto;
}
</style>

