const mongoose = require("mongoose");

const DashboardSchema = mongoose.Schema({
    id: {
        type: Number, 
        required: true,
        unique: true
    },
    studentDetails : {
        appliedJobs: {
            type: Number,
            default: 0
        },
        jobAlert: {
            type: Number,
            default: 0
        },
        messages: {
            type: Number,
            default: 0
        },
        shortlistedJobs: {
            type: Number,
            default: 0
        }
    },
    graphData: {
        labels: [{
            type: String,
            required: true
        }],
        data: [{
            type: Number,
            required: true 
        }]
      },
    notifications: [
        {
          recentAppliedJob: {
            type: String,
          },
          recentAppliedStudentName: {
            type: String,
          }
        }
      ]

})

const DashboardModel = mongoose.model("Dashboard", DashboardSchema);

module.exports = DashboardModel;