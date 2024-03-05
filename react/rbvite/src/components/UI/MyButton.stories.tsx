import { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./MyButton";

const meta: Meta<typeof MyButton> = {
    component:MyButton,
    title:'MyButton',
    tags:['autodocs']
}
export const Green:StoryObj<typeof MyButton>={
    args:{
        color:'bg-green-500',
        label:"MyButton",
        className:""
    },
}
export const Blue:StoryObj<typeof MyButton>={
    args:{
        color:'bg-yellow-500',
        label:"MyButton",
        className:""
    }
}
export const Red:StoryObj<typeof MyButton>={
    args:{
        color:'bg-red-500',
        label:"MyButton",
        className:""
    },
}
export default meta;