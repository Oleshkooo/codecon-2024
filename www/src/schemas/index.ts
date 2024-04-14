import * as yup from "yup"

const basicLoginSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Required email"),
    password: yup.string().min(5).required("Required password")
})


const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const onlyLettersRegex = /^[A-Za-z ]+$/;


function calculateAge(birthday: Date) {
    const ageDifMs = Date.now() - birthday.getTime(); 
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const registerSchema = yup.object().shape({
    fullName: yup.string().min(6, 'Too short!').max(40, "Too long!").matches(onlyLettersRegex, {message:"Full name can't include numbers"}).required('Full name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    age: yup
        .string()
        .required('Age is required')
        .test("age", "You must be at least 18 years old", function(value) {
            const birthYear = new Date().getFullYear() - parseInt(value, 10);
            const birthday = new Date(birthYear, 0, 1); 
            const age = calculateAge(birthday);
            return age >= 18;
        }),
    password: yup.string().required("Password is require").min(8, "Password is too short").matches(passwordRegex, {message:"Password should include min eight characters, at least one letter and one number"}),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Password must match")
    .required('Required')})

export { basicLoginSchema, registerSchema };
