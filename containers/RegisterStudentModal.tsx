import { TDButton, TDInput, TDModal } from "@/components";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentSchema } from "@/lib/validators";
import { useStudent } from "@/hooks/useStudent";

interface RegisterStudentModalProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}
const RegisterStudentModal: FC<RegisterStudentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addStudent } = useStudent();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TStudent>({
    resolver: yupResolver(studentSchema),
  });

  if (!isOpen) return null;

  return (
    <TDModal
      title="Register Student"
      subtitle="A subtitle for the resister student description modal."
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
          handleSubmit(addStudent)();
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
            label="Student Number"
            placeholder="Teacher number"
            inputRegister={register("studentNo")}
            error={errors.studentNo?.message}
          />
        </div>

        <TDButton type="submit" title="Submit" />
      </form>
    </TDModal>
  );
};

export default RegisterStudentModal;
