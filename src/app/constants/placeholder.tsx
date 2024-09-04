import { IconChat } from "@/icons/chat"
import { IconCourses } from "@/icons/courses"
import { IconDocument } from "@/icons/document"
import { IconGrid } from "@/icons/grid"
import { IconHeart } from "@/icons/heart"
import { IconMegaPhone } from "@/icons/mega-phone"
import { IconWhiteLabel } from "@/icons/white-label"

export type CreateGroupPlaceholderProps = {
  id: string
  label: string
  icon: JSX.Element
}

export const CREATE_GROUP_PLACEHOLDER: CreateGroupPlaceholderProps[] = [
  {
    id: "0",
    label: "Highly engaging",
    icon: <IconMegaPhone />,
  },
  {
    id: "1",
    label: "Easy to setup",
    icon: <IconHeart />,
  },
  {
    id: "2",
    label: "Group chat and posts",
    icon: <IconChat />,
  },
  {
    id: "3",
    label: "Students can create teams within Groups",
    icon: <IconGrid />,
  },
  {
    id: "4",
    label: "Gamification",
    icon: <IconDocument />,
  },
  {
    id: "5",
    label: "Host unlimited courses",
    icon: <IconCourses />,
  },
  {
    id: "6",
    label: "White-labeling options",
    icon: <IconWhiteLabel />,
  },
]
