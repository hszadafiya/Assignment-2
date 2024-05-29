/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Heet Shaileshbhai Zadafiya Student ID: 140255233 Date: May/25/2024
*
********************************************************************************/ 
const collegeData = require('./modules/collegeData');


collegeData.initialize()
    .then(() => {
        return collegeData.getAllStudents();
    })
    .then(students => {
        console.log(`Successfully retrieved ${students.length} students`);
        return collegeData.getCourses();
    })
    .then(courses => {
        console.log(`Successfully retrieved ${courses.length} courses`);
        return collegeData.getTAs();
    })
    .then(TAs => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch(err => {
        console.error(err);
    });