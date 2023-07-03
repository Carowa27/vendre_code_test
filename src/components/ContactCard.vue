<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface IContactCardProps {
  employee: IEmployee;
}
defineProps<IContactCardProps>();
</script>

<template>
  <div class="employee-card">
    <div class="image-container">
      <img
        :src="employee.avatar"
        :alt="employee.first_name"
        class="employee-img"
      />
    </div>
    <h3 class="employee-name">
      {{ employee.first_name }} {{ employee.last_name }}
    </h3>
    <a :href="'mailto:' + employee.email" class="employee-contact"> Contact </a>
  </div>
</template>

<style scoped>
.employee-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: max-content;
  height: max-content;

  padding: 1.5rem;
  border-radius: 10px;
  background-color: rgb(232, 232, 232);
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  width: 8rem;
  height: 8rem;

  border-radius: 50%;
  overflow: hidden;
}
.employee-img {
  height: 100%;
  width: auto;
}
.employee-name {
  margin: 0;
}
.employee-contact {
  margin: 0;
  text-decoration: none;
  color: inherit;
}
</style>
