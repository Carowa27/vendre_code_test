<script setup lang="ts">
import { IEmployee } from "../models/IEmployee";

interface IContactCardProps {
  employee: IEmployee;
}
defineProps<IContactCardProps>();
</script>

<template>
  <div class="employee-card">
    <img
      :src="employee.avatar"
      :alt="employee.first_name"
      class="employee-img"
    />
    <h3 class="employee-name">
      {{ employee.first_name }} {{ employee.last_name }}
    </h3>
    <p class="employee-contact">Contact</p>
  </div>
</template>

<style scoped>
.employee-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  /* width: fit-content;
  height: fit-content; */
  width: max-content;
  height: max-content;
  border-radius: 10px;
  background-color: rgb(232, 232, 232);
}
.employee-img {
  width: auto;
  height: 8rem;
  border-radius: 50%;
}
.employee-name {
  margin: 0;
}
.employee-contact {
  margin: 0;
}
</style>
