<template>
  <div>
    <div id="app">
      <h1 class="title">Graficos de consumo mensais</h1>
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" ti />
    </div>
    <div>
      <div>
        <div class="text-center d-flex pb-4">
          <v-btn @click="all">Expandir todos</v-btn>
          <v-btn @click="none">Comprimir todos</v-btn>
        </div>
        <v-row justify="center">
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel v-for="(item,i) in estrela" :key="i">
              <v-expansion-panel-header>
                <v-col>{{estrela[i].status}}</v-col>
                <v-col>{{estrela[i].name}}</v-col>
              </v-expansion-panel-header>
              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
export default {
  name: "App",
  components: {
    GChart
  },
        methods: {
        brilha(index) {
          this.estrela[index].favorite = !this.estrela[index].favorite;
        },
        all() {
          this.panel = [...Array(this.items).keys()].map((k, i) => i);
        },
        // Reset the panel
        none() {
          this.panel = [];
        }
      },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ["Mês", "Gasto"],
        ["Outubro", 123.90],
        ["Setembro", 98.76],
        ["Agosto", 110.10]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales"
        }
      },
      estrela: [
        { favorite: false, status: "Outubro", name: "R$ 123.90" },
        { favorite: false, status: "Setembro", name: "R$ 98.76" },
        { favorite: false, status: "Agosto", name: "R$ 110.10" }
      ],
      panel: [],
      items: 5,
  }
  }
};
</script>
<style>
.title {
  margin: auto;
  text-align: center;
}
</style>