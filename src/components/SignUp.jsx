import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// style
import "./SignUp.css";

// yup regex pattern
const phoneRegex = new RegExp("^9[0-9]{9}$");

// yup schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("required").min(2).max(54),
  lastName: yup.string().required("required").min(2).max(54),
  province: yup.string().required("required").min(2).max(54),
  phoneNumber: yup
    .string()
    .required("required")
    .min(10)
    .max(10)
    .matches(phoneRegex, "pattern isn't right"),
  gender: yup.string().required("required"),
  nationalId: yup.number().required("required"),
  email: yup.string().email(),
});

const SignUp = () => {
  // yup resolver
  const resolver = yupResolver(validationSchema);

  // react-hook-form -- useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolver,
    mode: "onChange",
  });

  // log errors
  console.log("errors", errors);

  const onSubmit = (data) => {
    // notify
    toast.success("Submitted successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(data);
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        <label>
          <p>First Name</p>
          <input {...register("firstName")} type="text" />
        </label>
        <label>
          <p>Last Name</p>
          <input {...register("lastName")} type="text" />
        </label>
        <label>
          <p>Province</p>
          <input {...register("province")} type="text" />
        </label>
        <label>
          <p>Phone Number</p>
          <input
            {...register("phoneNumber")}
            type="text"
            placeholder="9xxxxxxxxx"
          />
        </label>
        <label>
          <p>Gender</p>
          <select {...register("gender")}>
            <option value="">Please choose one option:</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          <p>National ID</p>
          <input {...register("nationalId")} type="text" />
        </label>
        <label>
          <p>Email</p>
          <input {...register("email")} type="email" />
        </label>
        <div>
          <input type="submit" />
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
