/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Database from '@ioc:Adonis/Lucid/Database'
import Task from 'App/Models/Task'
import Route from '@ioc:Adonis/Core/Route'

// Lista todas as tarefas cadastradas
Route.get('/tasks', async () => {
    return Database.from('tasks').select('*')
})

// Insere uma nova tarefa ao banco de dados
Route.post('/tasks', async ({ request }) => {
    const { title, tags, status, date } = request.body();
    return Task.create({title, tags, status, date })
})

// Altera o status de pendente (status = 0) para concluído (status = 1)
Route.put('/tasks', async ({ request }) => {
    const { id, status } = request.body()
    const task = await Task.findOrFail(id)

    task.status = status

    await task.save()
})

// Deleta a tarefa com o status 1
Route.delete('/tasks', async ({ request }) => {
    const { id } = request.body()
    const task = await Task.findOrFail(id)

    await task.delete()
})