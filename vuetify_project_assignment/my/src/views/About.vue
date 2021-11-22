<template>
  <v-simple-table dark+>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            District Id
          </th>
          <th class="text-left">
            District Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataArray" :key="data.district_id">
          <td>{{ data.district_id }}</td>
          <td>{{ data.district_name }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default{
    name: "About",
    props: [
        'name', 
        'email',
        'dataArray'
    ],
    data: () => ({
      
      

    }),
    created()
    {
      this.propName = this.$route.params.nameProp;
      this.propEmail = this.$route.params.emailProp;
      this.propPassword = this.$route.params.passwordProp; 
    } 
}
</script>
