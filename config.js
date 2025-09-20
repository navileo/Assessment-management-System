const reportConfigs = {
    "as_hr_02": {
        template: "health_fitness_report_template.html",
        sections: [
            {
                title: "Personal Information",
                fields: [
                    { label: "Name", path: "data.personal_info.name" },
                    { label: "Age", path: "data.personal_info.age" },
                    { label: "Gender", path: "data.personal_info.gender" }
                ]
            },
            {
                title: "Health Metrics",
                fields: [
                    { label: "Height (cm)", path: "data.health_metrics.height_cm" },
                    { label: "Weight (kg)", path: "data.health_metrics.weight_kg" },
                    { label: "BMI", path: "data.health_metrics.bmi" },
                    { label: "Blood Pressure", path: "data.health_metrics.blood_pressure" },
                    { label: "Heart Rate (bpm)", path: "data.health_metrics.heart_rate_bpm" }
                ]
            },
            {
                title: "Fitness Assessment",
                fields: [
                    { label: "Cardio Score", path: "data.fitness_assessment.cardio_score" },
                    { label: "Strength Score", path: "data.fitness_assessment.strength_score" },
                    { label: "Flexibility Score", path: "data.fitness_assessment.flexibility_score" },
                    { label: "Endurance Score", path: "data.fitness_assessment.endurance_score" }
                ]
            },
            {
                title: "Lifestyle Factors",
                fields: [
                    { label: "Smoking", path: "data.lifestyle_factors.smoking" },
                    { label: "Alcohol Consumption", path: "data.lifestyle_factors.alcohol_consumption" },
                    { label: "Exercise Frequency", path: "data.lifestyle_factors.exercise_frequency" },
                    { label: "Sleep Hours", path: "data.lifestyle_factors.sleep_hours" }
                ]
            },
            {
                title: "Recommendations",
                fields: [
                    { label: "", path: "data.recommendations", type: "list" }
                ]
            }
        ],
        classifications: {
            "data.health_metrics.bmi": [
                { range: [0, 18.5], label: "Underweight" },
                { range: [18.5, 24.9], label: "Normal weight" },
                { range: [25, 29.9], label: "Overweight" },
                { range: [30, Infinity], label: "Obese" }
            ]
        }
    }
};

exports.getReportConfig = (assessmentId) => {
    return reportConfigs[assessmentId];
};