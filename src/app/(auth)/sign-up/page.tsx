"use client";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const OnSubmit: (data: SignUpFormData) => Promise<void> = async (
    data: SignUpFormData,
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
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{
            minLength: { value: 2, message: "Full name is required" },
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Creating Account" : "Start Your Investing Journey"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
