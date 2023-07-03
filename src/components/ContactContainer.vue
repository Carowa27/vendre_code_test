<script setup lang="ts">
import ContactCard from "../components/ContactCard.vue";
import { getEmployees } from "../services/employeeServices";
import { IEmployee } from "../models/IEmployee";
import { ref } from "vue";

const page = ref<number>(1);
const employees = ref<IEmployee[]>([]);
const getData = async (url: string) => {
  const E = await getEmployees(`https://reqres.in/api/users${url}`);
  console.log(E);
  return E;
};
employees.value = await getData(``);
const changePage = async (n: number) => {
  page.value = n;
  if (page.value === 1) {
    employees.value = await getData(``);
  } else {
    employees.value = await getData(`?page=${page.value}`);
  }
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

console.log(employees);
</script>

<template>
  <Suspense>
    <div class="contact-container">
      <ContactCard
        v-for="p in employees"
        :id="p.id"
        :key="p.id"
        :employee="p"
      ></ContactCard></div
  ></Suspense>
  <div class="pagenr-container">
    <span class="pagenr" @click="changePage(1)">1</span>&nbsp;
    <span class="pagenr" @click="changePage(2)">2</span>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
.pagenr-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  font-size: large;
  padding: 0.3rem;
}
.pagenr {
  text-decoration: underline;
}
.pagenr:hover {
  cursor: pointer;
}
</style>
