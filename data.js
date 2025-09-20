const assessmentData = [
    {
        session_id: "sess_001",
        assessment_id: "as_hr_02",
        user_id: "user_123",
        date: "2023-10-26",
        data: {
            personal_info: {
                name: "John Doe",
                age: 30,
                gender: "Male"
            },
            health_metrics: {
                height_cm: 175,
                weight_kg: 70,
                bmi: 22.86,
                blood_pressure: "120/80",
                heart_rate_bpm: 72
            },
            fitness_assessment: {
                cardio_score: 85,
                strength_score: 78,
                flexibility_score: 90,
                endurance_score: 82
            },
            lifestyle_factors: {
                smoking: "No",
                alcohol_consumption: "Moderate",
                exercise_frequency: "4-5 times/week",
                sleep_hours: 7
            },
            recommendations: [
                "Maintain current exercise routine.",
                "Focus on strength training for upper body.",
                "Ensure adequate hydration."
            ]
        }
    },
    {
        session_id: "sess_002",
        assessment_id: "as_hr_02",
        user_id: "user_124",
        date: "2023-10-25",
        data: {
            personal_info: {
                name: "Jane Smith",
                age: 25,
                gender: "Female"
            },
            health_metrics: {
                height_cm: 162,
                weight_kg: 58,
                bmi: 22.1,
                blood_pressure: "110/70",
                heart_rate_bpm: 68
            },
            fitness_assessment: {
                cardio_score: 92,
                strength_score: 85,
                flexibility_score: 95,
                endurance_score: 90
            },
            lifestyle_factors: {
                smoking: "No",
                alcohol_consumption: "Low",
                exercise_frequency: "5-6 times/week",
                sleep_hours: 8
            },
            recommendations: [
                "Continue healthy lifestyle.",
                "Explore new fitness challenges."
            ]
        }
    }
];

exports.getAssessmentData = (sessionId) => {
    return assessmentData.find(data => data.session_id === sessionId);
};