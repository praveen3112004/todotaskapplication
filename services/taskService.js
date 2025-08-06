import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';

export const getTasks = async (userId) => {
  const tasksRef = collection(db, 'users', userId, 'tasks');
  const q = query(tasksRef);
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTask = async (userId, task) => {
  const tasksRef = collection(db, 'users', userId, 'tasks');
  await addDoc(tasksRef, task);
};

export const updateTask = async (userId, taskId, updatedFields) => {
  const taskRef = doc(db, 'users', userId, 'tasks', taskId);
  await updateDoc(taskRef, updatedFields);
};

export const deleteTask = async (userId, taskId) => {
  const taskRef = doc(db, 'users', userId, 'tasks', taskId);
  await deleteDoc(taskRef);
};