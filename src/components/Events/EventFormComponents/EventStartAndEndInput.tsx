import { ChangeEventHandler } from "react";
import DateTimeInput from "@/components/defaults/Inputs/DateTimeInput";
import moment from "moment";

type Props = {
  startAt: string;
  endAt: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function EventStartAndEndInput({
  startAt,
  endAt,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col w-full text-ueventText lg:flex-row gap-2">
      <div className="flex flex-col items-center w-full mb-6">
        <label>Start At</label>
        <DateTimeInput  value={startAt} minDate={new Date() as unknown as string} handleChange={onChange} id="startAt" />
      </div>
      <div className="flex flex-col items-center w-full mb-6">
        <label>End At</label>
        <DateTimeInput value={endAt} minDate={startAt} handleChange={onChange} id="endAt" />
      </div>
    </div>
  );
}
