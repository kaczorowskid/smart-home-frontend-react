import { CommonFormProps } from "@/types/common.types";

export type UserFormProps = {
  selectedId: string;
} & CommonFormProps;

const roomsType = ["backyard", "bathroom", "bedroom", "kitchen", "livingRoom"];

export type RoomsType = (typeof roomsType)[number];
