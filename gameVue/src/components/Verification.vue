<template>
    <div class="container my-5 pt-3 shadow" style="width: 500px;">
      <div class="d-flex align-item-center justify-content-center" style="color: #5706F1">
      <h2>Merci de vérifier votre compte</h2>
    </div>
      <form @submit.prevent="verifyCode">
        <!-- Affichez des messages d'erreur ou de succès -->
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
  
        <div class="form-group">
          <label for="verificationCode">Veuillez renseigner le code de vérification :</label>
          <input type="text" id="verificationCode" v-model="verificationCode" class="form-control" />
        </div>
        <button  class="btn btn-primary my-3" style="width: 100%;">Valider</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import  clientHttp from "@/libs/clientHttp";
  import { useRouter } from 'vue-router';
  
  
  const verificationCode = ref('');
  const error = ref('');
  const successMessage = ref('');
  
  const router = useRouter();
  
  const verifyCode = async () => {
    // Validation des champs
    if (!verificationCode.value) {
      error.value = 'Veuillez remplir tous les champs.';
      successMessage.value = '';
      return;
    }
  
    try {
      const user = {
        verificationCode: verificationCode.value,
      };
  
      await clientHttp.post('http://localhost:3000/api/auth/verifyCode', user);
  
      successMessage.value = 'Code de vérification correct'; 
      error.value = 'Code de vérification incorrect'; 
      router.replace('/login');
    } catch (err) {
      successMessage.value = ''; 
      error.value = '';
    }
  }
  </script>
  