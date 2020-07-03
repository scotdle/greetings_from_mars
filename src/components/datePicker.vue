<template>
  <v-container>
    <v-date-picker
      v-model="picker"
      :landscape="landscape"
      :reactive="reactive"
      :min="min"
      :max="max"
      :flat="flat"
      :full-width="fullWidth"
      :show-current="showCurrent"
      :type="month ? 'month' : 'date'"
      :multiple="multiple"
      :readonly="readonly"
      :events="enableEvents ? functionEvents : null"
    ></v-date-picker>
  </v-container>
</template>

<script>
const todaysDate = new Date();
const threeDaysAgo = todaysDate - 1000 * 60 * 60 * 24 * 3;
const roverAPIDate = new Date(threeDaysAgo);
const roverAPIDateForVueify = roverAPIDate.toISOString().substr(0, 10);

export default {
  name: "datePicker",

  data: () => ({
    picker: roverAPIDateForVueify,
    min: "2016-07-14",
    max: roverAPIDateForVueify,
    landscape: false,
    reactive: false,
    fullWidth: true,
    flat: false,
    showCurrent: false,
    month: false,
    multiple: false,
    readonly: false,
    enableEvents: false
  })
};
</script>
