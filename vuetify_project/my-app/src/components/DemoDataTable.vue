<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    sort-by="salary"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Employees</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Employee
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Employee Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.salary"
                      label="Salary"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.age"
                      label="Age "
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dept"
                      label="dept"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.lStatus"
                      label="Leave Status"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save(); successSnackbar = true;"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar v-model="successSnackbar">

        {{ successText }}

        <template v-slot:action="{ attrs }">
        <v-btn
          color="green"
          text
          v-bind="attrs"
          @click="successSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this Employee?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template> 






<script>

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      fill: true,
      selectedGradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      width: 2,
      successSnackbar: false,
      successText: "Success!",
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Employee Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Salary (BDT)', value: 'salary' },
        { text: 'Age', value: 'age' },
        { text: 'Department', value: 'dept' },
        { text: 'Leave Status', value: 'lStatus' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      emloyees: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        salary: 0,
        age: 0,
        dept: 0,
        lStatus: 0,
      },
      defaultItem: {
        name: '',
        salary: 0,
        age: 0,
        dept: 0,
        lStatus: 0,
      },
    }),

    computed: {
      sValues()
      {
        return this.employees['salary'];
      },
      formTitle () {
        return this.editedIndex === -1 ? 'New Employee' : 'Edit Employee'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.employees = [
          {
            name: 'Lionel Messi',
            salary: 100000,
            age: 34,
            dept: 'Tech',
            lStatus: 'NULL',
          },
          {
            name: 'Cristiano Ronaldo',
            salary: 95000,
            age: 36,
            dept: 'Tech',
            lStatus: 'NULL',
          },
          {
            name: 'Michael Phelps',
            salary: 50000,
            age: 38,
            dept: 'HR',
            lStatus: 'NULL',
          },
          {
            name: 'Shakib Al Hasan',
            salary: 65000,
            age: 34,
            dept: 'Marketing',
            lStatus:'Pending',
          },
          {
            name: 'Jacques Kallis',
            salary: 68000,
            age: 43,
            dept: 'Marketing',
            lStatus: 'Approved',
          },
          {
            name: 'Xavi Hernandez',
            salary: 70000,
            age: 41,
            dept: 'Tech',
            lStatus: 'Resigned',
          },
          {
            name: 'Andres Don Iniesta',
            salary: 75000,
            age: 38,
            dept: 'Tech',
            lStatus: 'Pending',
          },
          {
            name: 'Neymar Jr',
            salary: 92000,
            age: 29,
            dept: 'Tech',
            lStatus: 'Approved',
          },
          {
            name: 'Paulo Dybala',
            salary: 80000,
            age: 27,
            dept: 'Tech',
            lStatus: 'Resigned',
          },
          {
            name: 'Wayne Rooney',
            salary: 73500,
            age: 37,
            dept: 'Tech',
            lStatus: 'Approved',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.employees.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.employees.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.employees.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.employees[this.editedIndex], this.editedItem)
        } else {
          this.employees.push(this.editedItem)
        }
        this.close()
      },
    },
  }



</script>