export type HealthData = {

    Age: number;
    AlcoholConsumption: "Low" | "Medium" | "High";
    BMI: number;
    BloodPressure: number;
    CRPLevel: number;
    CholesterolLevel: number;
    Diabetes: "Yes" | "No";
    ExerciseHabits: "Low" | "Medium" | "High";
    FamilyHeartDisease: "Yes" | "No";
    FastingBloodSugar: string;
    Gender: "Male" | "Female";
    HeartDiseaseStatus: "Yes" | "No";
    HighBloodPressure: "Yes" | "No";
    HighLDLCholesterol: "Yes" | "No";
    HomocysteineLevel: number;
    LowHDLCholesterol: "Yes" | "No";
    SleepHours: number;
    Smoking: "Yes" | "No";
    StressLevel: "Low" | "Medium" | "High";
    SugarConsumption: "Low" | "Medium" | "High";
    TriglycerideLevel: number;
};


export type RestaurantData = {
    name: string;
    online_order: "Yes" | "No";
    book_table: "Yes" | "No";
    rate: string;
    votes: number;
    approx_cost_for_two_people: number;
    listed_in_type: string;
};
