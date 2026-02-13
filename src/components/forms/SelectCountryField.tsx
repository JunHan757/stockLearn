"use client";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

import { CountryDropdown } from "@/components/ui/CountrySelectField";

export const SelectCountryField = ({
  name,
  label,
  control,
  error,
  required,
}: CountrySelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>

      <Controller
        control={control}
        name="country"
        rules={{
          required: required ? `Please select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <CountryDropdown
            placeholder="Country"
            defaultValue={field.value}
            onChange={(country) => {
              field.onChange(country.alpha3);
            }}
          />
        )}
      />
      {error && <p className="text-sm text-red-50">{error.message}</p>}
    </div>
  );
};
