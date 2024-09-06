import { Button } from "@/components/ui/button";
import { verifyToken } from "@/lib/verifyToken";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [login , {error}] = useLoginMutation();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password 
    }
 const res = await login(userInfo).unwrap()

 const user = verifyToken(res.data.accessToken);
 console.log(user);

 dispatch(setUser({user: user ,token: res.data.accessToken}))
 
  }
  console.log(watch("email"));
  return (
    <div className="container text-center mx-auto mt-8 mb-8">
      <p className="text-2xl">Please login</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2">
          <p>
            Email: <input defaultValue="" {...register("email")} />
          </p>
          <p>
            Password: <input defaultValue="" {...register("password")} />
          </p>
          <Button type="submit">Login</Button>
          <p>
            Don't have account please{" "}
            <Link className="text-[#003B95] text-xl" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
