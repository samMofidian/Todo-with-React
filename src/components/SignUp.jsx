import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const submitClickHandler = (data) => {
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
          <p>Provience</p>
          <input {...register("provience")} type="text" />
        </label>
        <label>
          <p>Phone Number</p>
          <input {...register("phoneNumber")} type="phone" />
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
          <p>ID</p>
          <input {...register("id")} type="text" />
        </label>
        <label>
          <p>Email</p>
          <input {...register("email")} type="email" />
        </label>
        <div>
          <input type="submit" onClick={submitClickHandler} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
