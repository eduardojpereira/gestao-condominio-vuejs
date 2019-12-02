<template>
  <div>
    <div id="app">
      <v-app id="inspire">
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Registro de Consumo</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }"></template>
                    </v-tooltip>
                    <v-tooltip right>
                      <template v-slot:activator="{ on }"></template>
                    </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field v-model="consumo.leitura" label="Leitura" name="consumo" type="number"></v-text-field>
                      <v-text-field v-model="consumo.data_leitura" label="Data da Leitura" name="data" type="date"></v-text-field>
                      <v-combobox
                        item-value="id"
                        item-text="nome"
                        :items="condominios"
                        label="Condominio"
                      ></v-combobox>
                      <v-combobox
                        :items="blocos"
                        label="blocos"
                        item-value="id"
                        item-text="nome"
                      ></v-combobox>
                      <v-combobox
                        :items="apartamentos"
                        label="Apartamentos"
                        v-model="consumo.apartamento"
                        item-value="id"
                        item-text="numero"
                      ></v-combobox>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="salvar" color="primary">Registrar</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>
<script>
import Bloco from "../../services/blocos";
import Apartamento from "../../services/apartamentos";
import Condominio from "../../services/condominios";
import Consumo from "../../services/consumos";

export default {
  data() {
    return {
      consumo: {
        leitura: null,
        apartamento: null,
        data_leitura: null,
        leitor: 1
      },
      condominios: [],
      blocos: [],
      apartamentos: []
    };
  },
  mounted() {
    Bloco.listar().then(resposta => {
      this.blocos = resposta.data;
    });
    Condominio.listar().then(resposta => {
      this.condominios = resposta.data;
    });
    Apartamento.listar().then(resposta => {
      this.apartamentos = resposta.data;
    });
  },
  methods: {
    salvar() {
      this.consumo.apartamento = this.consumo.apartamento.id
      this.consumo.leitura = parseInt(this.consumo.leitura)
      Consumo.salvar(this.consumo).then(resposta => {
        alert(resposta.data.data)
      })
    }
  }
};
</script>
<style>
</style>