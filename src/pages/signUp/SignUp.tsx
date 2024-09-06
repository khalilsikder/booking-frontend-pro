import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    name: string;
    email: string;
    password:string;
  }

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
      console.log(watch("name"))
    return (
        <div className="container text-center mx-auto">
            <p>Please login</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <p>Name: <input defaultValue="" {...register("name")} /></p>
     <p>Email:  <input defaultValue="" {...register("email")} /></p>
      <p>Password: <input defaultValue="" {...register("password")} /></p>
      <input type="submit" />
      <p>Already have an account please <Link to= '/login'>Login</Link></p>
      </div>
    </form>
        </div>
    );
};

export default SignUp;