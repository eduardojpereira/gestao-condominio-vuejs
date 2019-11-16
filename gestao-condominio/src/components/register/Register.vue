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
                    <v-toolbar-title>Registro</v-toolbar-title>
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
                      <v-text-field label="Nome" name="nome" type="text"></v-text-field>
                      <v-text-field label="Sobrenome" name="sobrenome" type="text"></v-text-field>
                      <v-text-field label="CPF" name="cpf" type="text"></v-text-field>
                      <v-text-field label="E-mail" name="email" type="text"></v-text-field>
                      <v-text-field label="Telefone" name="telefone" type="text"></v-text-field>
                      <v-text-field id="Senha" label="senha" name="password" type="password"></v-text-field>
                      <v-combobox  :items="condominios" label="Condominio"></v-combobox>
                      <v-combobox  :items="blocos" label="blocos"></v-combobox>
                      <v-combobox  :items="ap" label="ap"></v-combobox>
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
export default {
  data() {
    return {
      condominios: ["Dom Jaime", "Aurora azul", "Atlântico Sul", "Leblon"],
      blocos: ["bloco 1", "bloco 2", "bloco 3", "bloco 4"],
      ap: ["101", "102", "103", "104"]
    };
  }
};
</script>
<style>
</style>