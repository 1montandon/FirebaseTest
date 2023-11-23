<script setup>
import { reactive, ref, onMounted } from 'vue'
import taskService from '../services/taskServices'

const tarefa = reactive({
  titulo: '',
  descricao: ''
})

const tarefas = ref([
  
])

async function adicionarTarefa() {
  if (tarefa.id) {
    await taskService.update(tarefa)
  } else {
    await taskService.create(tarefa)
  }
  delete tarefa.id
  tarefa.titulo = ''
  tarefa.descricao = ''
  tarefas.value = await taskService.getAll()
}


function editarTarefa(tarefaParaEditar) {
  Object.assign(tarefa, tarefaParaEditar)
}
async function deletarTarefa(tarefaParaDeletar){
  await taskService.deleteTask(tarefaParaDeletar)
  tarefas.value = await taskService.getAll()
}

onMounted(async () => {
  tarefas.value = await taskService.getAll()
})
</script>

<template>
  <h1>minhas tarefas</h1>
  <input type="text" placeholder="titulo" v-model="tarefa.titulo" />
  <input type="text" placeholder="descricao" v-model="tarefa.descricao" />
  <button @click="adicionarTarefa">Adicionar</button>

  <hr />

  <ul>
    <li v-for="tarefa in tarefas" :key="tarefa.id">
      <h3>{{ tarefa.titulo }}</h3>
      <p>{{ tarefa.descricao }}</p>
      <button @click="editarTarefa(tarefa)">editar</button>
      <button @click="deletarTarefa(tarefa)">excluir</button>
    </li>
  </ul>

  <hr />

  <div v-for="tarefa in tarefas" :key="tarefa.id">
    <h1>tarefa numero {{ tarefa.id }}</h1>
    <h3>{{ tarefa.titulo }}</h3>
    <div>
      {{ tarefa.descricao }}
    </div>
  </div>
</template>

<style></style>
