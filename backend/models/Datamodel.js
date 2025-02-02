import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    regno: Number,
    maritalStatus: Number,
    applicationMode: Number,
    applicationOrder: Number,
    course: Number,
    daytimeEveningAttendance: Number,
    previousQualification: Number,
    nationality: Number,
    mothersQualification: Number,
    fathersQualification: Number,
    mothersOccupation: Number,
    fathersOccupation: Number,
    displaced: Number,
    educationalSpecialNeeds: Number,
    debtor: Number,
    tuitionFeesUpToDate: Number,
    gender: Number,
    scholarshipHolder: Number,
    ageAtEnrollment: Number,
    international: Number,
    curricularUnits1stSemCredited: Number,
    curricularUnits1stSemEnrolled: Number,
    curricularUnits1stSemEvaluations: Number,
    curricularUnits1stSemApproved: Number,
    curricularUnits1stSemGrade: Number,
    curricularUnits1stSemWithoutEvaluations: Number,
    curricularUnits2ndSemCredited: Number,
    curricularUnits2ndSemEnrolled: Number,
    curricularUnits2ndSemEvaluations: Number,
    curricularUnits2ndSemApproved: Number,
    curricularUnits2ndSemGrade: Number,
    curricularUnits2ndSemWithoutEvaluations: Number,
    unemploymentRate: Number,
    inflationRate: Number,
    gdp: Number,
    target: String,
  });
  
  const Datamodel = mongoose.model('Data', DataSchema);
  
  export default Datamodel;