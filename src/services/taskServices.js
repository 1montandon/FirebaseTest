import { db } from '../plugins/firebase'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

class TaskService {
    async create(task){
    await addDoc(collection(db,'tasks'), task)
    }

    async getAll(){
        const querySnapshot = await getDocs(collection(db, 'tasks'))
        const tasks = []
        querySnapshot.forEach((doc) => {
            tasks.push({id:doc.id, ...doc.data()})
        });
        return tasks
    }

    async update(task){
        const docRef = doc(db, 'tasks', task.id)
        await updateDoc(docRef, task)
    }

    async deleteTask(task){
        const docRef = doc(db, 'tasks', task.id)
        await deleteDoc(docRef)
    }
}

export default new TaskService()