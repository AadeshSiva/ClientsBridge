import dp from '../../assets/image/freelancerProfile.svg';

const freelancerData = [
    { id: 1, name: "Jason Price", username: "jasonp", email: "jason.price@example.com", password: "*********", dob: "1990-05-15", presentAddress: "123 Oak St, Apt 45", permanentAddress: "456 Pine St", city: "New York", postalCode: "10001", country: "USA", role: "Graphic Designer", image: dp },
    { id: 2, name: "Sophia Lee", username: "sophial", email: "sophia.lee@example.com", password: "*********", dob: "1988-08-12", presentAddress: "789 Maple Ave, Apt 21", permanentAddress: "101 Cedar St", city: "Los Angeles", postalCode: "90001", country: "USA", role: "Web Developer", image: dp },
    { id: 3, name: "Ethan Brown", username: "ethanb", email: "ethan.brown@example.com", password: "*********", dob: "1992-11-25", presentAddress: "987 Birch St", permanentAddress: "567 Oak St", city: "Chicago", postalCode: "60601", country: "USA", role: "Data Scientist", image: dp },
    { id: 4, name: "Olivia Davis", username: "oliviad", email: "olivia.davis@example.com", password: "*********", dob: "1991-07-09", presentAddress: "567 Pine St", permanentAddress: "890 Oak St", city: "San Francisco", postalCode: "94101", country: "USA", role: "Product Manager", image: dp },
    { id: 5, name: "Liam Smith", username: "liams", email: "liam.smith@example.com", password: "*********", dob: "1985-10-20", presentAddress: "101 Cedar St", permanentAddress: "345 Maple Ave", city: "Austin", postalCode: "73301", country: "USA", role: "UX/UI Designer", image: dp },
    { id: 6, name: "Ava Wilson", username: "avaw", email: "ava.wilson@example.com", password: "*********", dob: "1994-02-17", presentAddress: "567 Oak St", permanentAddress: "890 Pine St", city: "Miami", postalCode: "33101", country: "USA", role: "Marketing Specialist", image: dp },
    { id: 7, name: "Noah Taylor", username: "noaht", email: "noah.taylor@example.com", password: "*********", dob: "1993-04-22", presentAddress: "345 Maple Ave", permanentAddress: "101 Cedar St", city: "Seattle", postalCode: "98101", country: "USA", role: "Frontend Developer", image: dp },
    { id: 8, name: "Mia Anderson", username: "miaa", email: "mia.anderson@example.com", password: "*********", dob: "1995-06-30", presentAddress: "456 Pine St", permanentAddress: "123 Oak St", city: "Boston", postalCode: "02108", country: "USA", role: "Backend Developer", image: dp },
    { id: 9, name: "Lucas Martinez", username: "lucasm", email: "lucas.martinez@example.com", password: "*********", dob: "1990-09-15", presentAddress: "890 Oak St", permanentAddress: "567 Pine St", city: "Denver", postalCode: "80201", country: "USA", role: "SEO Analyst", image: dp },
    { id: 10, name: "Amelia Harris", username: "ameliah", email: "amelia.harris@example.com", password: "*********", dob: "1989-12-10", presentAddress: "101 Cedar St", permanentAddress: "345 Maple Ave", city: "Dallas", postalCode: "75201", country: "USA", role: "Project Coordinator", image: dp },
    { id: 11, name: "Isabella Clark", username: "isabellac", email: "isabella.clark@example.com", password: "*********", dob: "1987-03-05", presentAddress: "567 Pine St", permanentAddress: "890 Oak St", city: "Phoenix", postalCode: "85001", country: "USA", role: "Content Strategist", image: dp },
    { id: 12, name: "James Lewis", username: "jamesl", email: "james.lewis@example.com", password: "*********", dob: "1986-11-19", presentAddress: "789 Maple Ave", permanentAddress: "101 Cedar St", city: "San Diego", postalCode: "92101", country: "USA", role: "Full Stack Developer", image: dp },
    { id: 13, name: "Ella Robinson", username: "ellar", email: "ella.robinson@example.com", password: "*********", dob: "1991-01-25", presentAddress: "101 Cedar St", permanentAddress: "345 Maple Ave", city: "Houston", postalCode: "77001", country: "USA", role: "Data Analyst", image: dp },
    { id: 14, name: "Mason Walker", username: "masonw", email: "mason.walker@example.com", password: "*********", dob: "1984-07-14", presentAddress: "890 Oak St", permanentAddress: "567 Pine St", city: "Las Vegas", postalCode: "89101", country: "USA", role: "Software Engineer", image: dp },
    { id: 15, name: "Lily Hall", username: "lilyh", email: "lily.hall@example.com", password: "*********", dob: "1990-09-09", presentAddress: "567 Pine St", permanentAddress: "890 Oak St", city: "Portland", postalCode: "97201", country: "USA", role: "Business Analyst", image: dp },
    { id: 16, name: "Benjamin King", username: "benjamink", email: "benjamin.king@example.com", password: "*********", dob: "1988-05-23", presentAddress: "456 Pine St", permanentAddress: "123 Oak St", city: "Salt Lake City", postalCode: "84101", country: "USA", role: "System Administrator", image: dp },
    { id: 17, name: "Emily Scott", username: "emilys", email: "emily.scott@example.com", password: "*********", dob: "1992-02-28", presentAddress: "345 Maple Ave", permanentAddress: "101 Cedar St", city: "Charlotte", postalCode: "28201", country: "USA", role: "HR Specialist", image: dp },
    { id: 18, name: "Henry Young", username: "henryy", email: "henry.young@example.com", password: "*********", dob: "1991-06-11", presentAddress: "567 Oak St", permanentAddress: "890 Pine St", city: "Orlando", postalCode: "32801", country: "USA", role: "Cybersecurity Analyst", image: dp },
    { id: 19, name: "Grace Adams", username: "gracea", email: "grace.adams@example.com", password: "*********", dob: "1989-04-07", presentAddress: "890 Pine St", permanentAddress: "567 Oak St", city: "San Antonio", postalCode: "78201", country: "USA", role: "Digital Marketing Manager", image: dp },
    { id: 20, name: "William Carter", username: "williamc", email: "william.carter@example.com", password: "*********", dob: "1987-08-16", presentAddress: "345 Maple Ave", permanentAddress: "101 Cedar St", city: "Columbus", postalCode: "43085", country: "USA", role: "DevOps Engineer", image: dp }
];



export const freelancerReducer = (state = freelancerData, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
