"use client";
import { useForm, Controller } from "react-hook-form";

// 01262026_0001.md obsidian next vs plain js what different

function ExampleController() {
  const { control } = useForm({
    defaultValues: {
      age: "",
    },
  });

  console.log(control);

  return (
    <Controller
      name="age"
      control={control}
      render={({ field }) => <input {...field} placeholder="Age" />}
    />
  );
}

export default ExampleController;
