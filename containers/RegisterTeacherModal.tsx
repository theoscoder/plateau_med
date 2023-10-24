import { TDButton, TDInput, TDModal } from "@/components";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { teacherSchema } from "@/lib/validators";
import { useTeacher } from "@/hooks/useTeacher";

interface RegisterTeacherModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}
const RegisterTeacherModal: FC<RegisterTeacherModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addTeacher } = useTeacher();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TTeacher>({
    resolver: yupResolver(teacherSchema),
  });

  if (!isOpen) return null;

  return (
    <TDModal
      title="Register Teacher"
      subtitle="A subtitle for the resister teacher description modal."
      className="max-w-xl"
      isOpen={isOpen}
      onClose={() => {
        onClose(false);
        reset();
      }}
    >
      <form
        className="flex flex-col sm:gap-y-4 gap-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(addTeacher)();
        }}
      >
        <div className="flex items-start justify-between sm:flex-nowrap flex-wrap gap-2">
          <TDInput
            type="number"
            label="National ID Number"
            placeholder="National ID Number"
            inputRegister={register("nationalID")}
            error={errors.nationalID?.message}
          />
        </div>
        {/* Change to a reusable select component */}
        <TDInput
          label="Title"
          placeholder="Title"
          inputRegister={register("title")}
          error={errors.title?.message}
        />
        <div className="flex items-start justify-between sm:flex-nowrap flex-wrap gap-2">
          <TDInput
            label="Name"
            placeholder="Enter name"
            inputRegister={register("name")}
            error={errors.name?.message}
          />
          <TDInput
            label="Surname"
            placeholder="Enter surname"
            inputRegister={register("surname")}
            error={errors.surname?.message}
          />
        </div>
        <TDInput
          type="date"
          label="Date of Birth"
          placeholder="Date of birth"
          inputRegister={register("dateOfBirth")}
          error={errors.dateOfBirth?.message}
        />
        <div className="flex items-start justify-between sm:flex-nowrap flex-wrap gap-2">
          <TDInput
            type={"number"}
            label="Teacher Number"
            placeholder="Teacher number"
            inputRegister={register("teacherNo")}
            error={errors.teacherNo?.message}
          />
          <TDInput
            type="number"
            label="Salary"
            placeholder="Enter salary"
            inputRegister={register("salary")}
            error={errors.salary?.message}
          />
        </div>

        <TDButton type="submit" title="Submit" />
      </form>
    </TDModal>
  );
};

export default RegisterTeacherModal;
