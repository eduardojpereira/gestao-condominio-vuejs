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
                      <v-text-field label="consumo" name="consumo" type="text"></v-text-field>
                      <v-combobox
                        v-model="selectedCondominio"
                        item-value="id"
                        item-text="nome"
                        :items="condominios"
                        label="Condominio"
                      ></v-combobox>
                      <v-combobox
                        :items="blocos"
                        label="blocos"
                        v-model="selectedBloco"
                        item-value="id"
                        item-text="nome"
                      ></v-combobox>
                      <v-combobox
                        :items="apartamentos"
                        label="Apartamentos"
                        v-model="selectedApartamento"
                        item-value="id"
                        item-text="numero"
                      ></v-combobox>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">Registrar</v-btn>
                  </v-card-actions>
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

export default {
  data() {
    return {
      selectedBloco: null,
      selectedApartamento: null,
      selectedCondominio: null,
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
  }
};
</script>
<style>
</style>