"use client";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const OnSubmit: (data: SignInFormData) => Promise<void> = async (
    data: SignInFormData,
  ) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(OnSubmit)} className="space-y-5">
        {/* input */}
        <InputField
          name="email"
          label="Email"
          placeholder="contact@jsmastery.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email address is required",
            pattern: {
              value: /^\w+@\w+\.\w+$/,
              message: "Invalid address is required",
            },
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password is required",
            },
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging in" : "Log in"}
        </Button>

        <FooterLink
          text="Don't have an account? "
          linkText="Create sign up"
          href="/sign-up"
        />
      </form>
    </>
  );
};

export default SignIn;
