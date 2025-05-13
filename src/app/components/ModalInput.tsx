import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface ModalInputProps {
  inputHalf?: boolean;
  label: string;
  id: string;
  type: string;
  placeholder: string;
  checkbox: boolean;
  checkboxId?: string;
  checkboxText?: string;
}
export default function ModalInput({
  inputHalf,
  label,
  id,
  type,
  placeholder,
  checkbox,
  checkboxId,
  checkboxText,
}: ModalInputProps) {
  return (
    <div className={inputHalf ? "w-[calc(150%-2rem)]" : "mb-5"}>
      <Label htmlFor={id} className="text-right mb-2">
        {label}
      </Label>
      <Input
        id={id}
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}

        placeholder={placeholder}
        type={type}
      />
      {checkbox && (
        <>
          <Checkbox id={checkboxId} />
          <label
            htmlFor={checkboxId}
            className="text-sm ml-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {checkboxText}
          </label>
        </>
      )}
    </div>
  );
}
